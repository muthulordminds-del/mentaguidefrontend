import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';
import PaymentStep from '../components/PaymentStep';
import PaymentReceipt from '../components/PaymentReceipt';

// Route: /complete-payment/:id
// This is the page the "Complete Payment" link in the registration
// email / WhatsApp message points to. It fetches the advertiser's
// saved registration by ID (no local state carried over from the
// form, since the user is arriving fresh from an email/WhatsApp link)
// and then renders PaymentStep inside the same header + white card
// layout used on AdvertiserSignupPage, so the two pages look consistent.
const CompletePayment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { backendUrl } = useContext(AppContext);

  const [advertiser, setAdvertiser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchAdvertiser = async () => {
      if (!id) {
        setError('Invalid payment link.');
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.get(`${backendUrl}/api/advertiser/${id}`);

        if (!isMounted) return;

        if (data.success) {
          setAdvertiser(data.advertiser);
        } else {
          setError(data.message || 'Registration not found.');
        }
      } catch (err) {
        console.error('Error fetching advertiser:', err);
        if (isMounted) {
          setError('We could not load your registration. Please check the link or contact support.');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchAdvertiser();

    return () => {
      isMounted = false;
    };
  }, [id, backendUrl]);

  const handlePaymentSuccess = (paymentResult) => {
    toast.success('Payment successful!');
    setReceipt({
      fullName: advertiser.fullName,
      email: advertiser.email,
      paymentType: paymentResult.paymentType,
      amountPaid: paymentResult.paymentType === 'full'
        ? paymentResult.totalAmount
        : paymentResult.partialAmount,
      balanceAmount: paymentResult.balanceAmount,
      paymentStatus: paymentResult.paymentStatus,
      razorpayPaymentId: paymentResult.razorpayPaymentId,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 sm:pt-32 pb-16 px-4 flex flex-col items-center">
      {/* Header row — matches AdvertiserSignupPage */}
      <div className="w-full max-w-2xl flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 mb-6 px-1 text-black font-gilroy">
        <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base font-bold">
          <button onClick={() => navigate('/login')} className="hover:text-[#a4d64f] transition-colors uppercase tracking-widest cursor-pointer">
            Login
          </button>
          <span className="bg-[#a4d64f] text-[#202523] px-4 py-1.5 rounded-full font-black uppercase tracking-widest text-xs sm:text-sm whitespace-nowrap">
            Complete Payment
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold">
          <a href="tel:+917708505529" className="hover:text-[#a4d64f] transition-colors">+91 7708505529</a>
          <span className="opacity-50">|</span>
          <a href="mailto:info@mentaguide.com" className="hover:text-[#a4d64f] transition-colors whitespace-nowrap">info@mentaguide.com</a>
        </div>
      </div>

      {/* White card — matches AdvertiserSignupPage */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        {loading && (
          <div className="flex flex-col items-center justify-center gap-4 py-12">
            <div className="w-10 h-10 border-4 border-[#a4d64f] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 font-inter">Loading your registration...</p>
          </div>
        )}

        {!loading && error && (
          <div className="flex flex-col items-center justify-center gap-3 text-center py-8">
            <h2 className="text-xl font-gilroy font-black text-[#2d2f31]">Something went wrong</h2>
            <p className="text-gray-600 font-inter max-w-md">{error}</p>
            <p className="text-sm text-gray-400 mt-2">
              If you think this is a mistake, please contact us at{' '}
              <a href="mailto:info@mentaguide.com" className="text-[#a4d64f] font-semibold underline">
                info@mentaguide.com
              </a>
            </p>
          </div>
        )}

        {!loading && !error && advertiser?.paymentStatus === 'paid' && !receipt && (
          <div className="flex flex-col items-center justify-center gap-3 text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#f4f9ec] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#a4d64f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-gilroy font-black text-[#2d2f31]">You're all set, {advertiser.fullName}!</h2>
            <p className="text-gray-600 font-inter max-w-md">
              Your payment for Mentaguide Expand 360² is already confirmed. See you at the event!
            </p>
          </div>
        )}

        {!loading && !error && receipt && (
          <PaymentReceipt receipt={receipt} />
        )}

        {!loading && !error && !receipt && advertiser && advertiser.paymentStatus !== 'paid' && (
          <>
            {advertiser.paymentStatus === 'partial_paid' && (
              <div className="mb-6 bg-yellow-50 border border-yellow-300 rounded-xl p-4 text-sm text-yellow-800 font-inter">
                You've already paid the advance amount. Balance is payable at the venue on event day.
              </div>
            )}
            {advertiser.paymentStatus === 'failed' && (
              <div className="mb-6 bg-red-50 border border-red-300 rounded-xl p-4 text-sm text-red-700 font-inter">
                Your previous payment attempt was unsuccessful. Please try again below.
              </div>
            )}
            <PaymentStep advertiser={advertiser} onPaymentSuccess={handlePaymentSuccess} />
          </>
        )}
      </div>
    </div>
  );
};

export default CompletePayment;