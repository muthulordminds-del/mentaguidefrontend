import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const TOTAL_FEE = 2;
const PARTIAL_FEE = 1;
const BALANCE_FEE = TOTAL_FEE - PARTIAL_FEE;

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// advertiser: { advertiserId, fullName, email, whatsapp }
const PaymentStep = ({ advertiser, onPaymentSuccess }) => {
  const { backendUrl } = useContext(AppContext);
  const [selectedPlan, setSelectedPlan] = useState('full'); // 'full' | 'partial'
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = async () => {
    setIsProcessing(true);
    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        toast.error('Unable to load payment gateway. Check your internet connection.');
        setIsProcessing(false);
        return;
      }

      const { data: orderData } = await axios.post(backendUrl + '/api/payment/create-order', {
        advertiserId: advertiser.advertiserId,
        paymentType: selectedPlan,
      });

      if (!orderData.success) {
        toast.error(orderData.message || 'Could not start payment');
        setIsProcessing(false);
        return;
      }

      const { order, key, advertiser: payer } = orderData;

      const options = {
        key,
        amount: order.amount,
        currency: order.currency,
        name: 'Mentaguide - Expand 360²',
        description: selectedPlan === 'full'
          ? 'Event Registration - Full Payment'
          : 'Event Registration - Advance Payment (₹1000 now, ₹2500 at venue)',
        order_id: order.id,
        prefill: {
          name: payer.name,
          email: payer.email,
          contact: payer.contact,
        },
        theme: { color: '#a4d64f' },
        handler: async (response) => {
          try {
            const { data: verifyData } = await axios.post(backendUrl + '/api/payment/verify', {
              advertiserId: advertiser.advertiserId,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verifyData.success) {
              toast.success('Payment successful!');
              if (onPaymentSuccess) {
                onPaymentSuccess({
                  paymentType: selectedPlan,
                  paymentStatus: verifyData.paymentStatus,
                  balanceAmount: verifyData.balanceAmount,
                  totalAmount: TOTAL_FEE,
                  partialAmount: PARTIAL_FEE,
                  razorpayPaymentId: response.razorpay_payment_id,
                });
              }
            } else {
              toast.error(verifyData.message || 'Payment verification failed');
            }
          } catch (err) {
            console.error('Verify payment error:', err);
            toast.error('Payment was made but verification failed. Please contact support.');
          } finally {
            setIsProcessing(false);
          }
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', async (response) => {
        console.error('Razorpay payment failed:', response.error);
        toast.error(response.error?.description || 'Payment failed. Please try again.');
        try {
          await axios.post(backendUrl + '/api/payment/record-failure', {
            advertiserId: advertiser.advertiserId,
            razorpay_order_id: response.error?.metadata?.order_id || order.id,
            reason: response.error?.description || response.error?.reason || 'Payment failed at gateway',
          });
        } catch (recordErr) {
          console.error('Error recording payment failure:', recordErr);
        }
        setIsProcessing(false);
      });
      rzp.open();
    } catch (error) {
      console.error('Error initiating payment:', error);
      toast.error('Error connecting to payment gateway');
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6 font-inter">
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-gilroy font-black text-[#2d2f31]">Complete Your Registration</h3>
        <p className="text-gray-600 text-sm sm:text-base mt-2">Choose how you'd like to pay the registration fee of ₹{TOTAL_FEE}.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Payment Option */}
        <button
          type="button"
          onClick={() => setSelectedPlan('full')}
          className={`text-left p-5 rounded-2xl border-2 transition-all cursor-pointer ${
            selectedPlan === 'full'
              ? 'border-[#a4d64f] bg-[#f4f9ec] shadow-[0_10px_25px_rgba(164,214,79,0.2)]'
              : 'border-gray-200 bg-white hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-black uppercase tracking-wide text-sm text-[#2d2f31]">Pay Full Amount</span>
            {selectedPlan === 'full' && (
              <span className="w-5 h-5 rounded-full bg-[#a4d64f] flex items-center justify-center">
                <svg className="w-3 h-3 text-[#202523]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
            )}
          </div>
          <p className="text-3xl font-black text-[#2d2f31]">₹{TOTAL_FEE}</p>
          <p className="text-xs text-gray-500 mt-1">Pay the entire registration fee now. Nothing else to pay later.</p>
        </button>

        {/* Partial Payment Option */}
        <button
          type="button"
          onClick={() => setSelectedPlan('partial')}
          className={`text-left p-5 rounded-2xl border-2 transition-all cursor-pointer ${
            selectedPlan === 'partial'
              ? 'border-[#a4d64f] bg-[#f4f9ec] shadow-[0_10px_25px_rgba(164,214,79,0.2)]'
              : 'border-gray-200 bg-white hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-black uppercase tracking-wide text-sm text-[#2d2f31]">Pay Partial Amount</span>
            {selectedPlan === 'partial' && (
              <span className="w-5 h-5 rounded-full bg-[#a4d64f] flex items-center justify-center">
                <svg className="w-3 h-3 text-[#202523]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
            )}
          </div>
          <p className="text-3xl font-black text-[#2d2f31]">₹{PARTIAL_FEE}</p>
          <p className="text-xs text-gray-500 mt-1">Pay ₹{PARTIAL_FEE} now. Balance ₹{BALANCE_FEE} payable at the venue on event day.</p>
        </button>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
        <p><span className="font-bold text-[#2d2f31]">Selected: </span>
          {selectedPlan === 'full'
            ? `You will pay ₹${TOTAL_FEE} now via Razorpay.`
            : `You will pay ₹${PARTIAL_FEE} now via Razorpay. Balance ₹${BALANCE_FEE} to be paid at the venue.`}
        </p>
      </div>

      <button
        type="button"
        onClick={handlePay}
        disabled={isProcessing}
        className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-base sm:text-lg flex justify-center items-center gap-3 transition-all shadow-[0_10px_25px_rgba(164,214,79,0.3)] ${
          isProcessing
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-[#a4d64f] text-[#202523] hover:bg-[#b5e663] hover:-translate-y-1 cursor-pointer'
        }`}
      >
        {isProcessing ? (
          <>
            <div className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
            Processing...
          </>
        ) : (
          `Pay ₹${selectedPlan === 'full' ? TOTAL_FEE : PARTIAL_FEE} Now`
        )}
      </button>

      <p className="text-center text-xs text-gray-400">Payments secured by Razorpay. Cards, UPI, Netbanking &amp; Wallets accepted.</p>
    </div>
  );
};

export default PaymentStep;