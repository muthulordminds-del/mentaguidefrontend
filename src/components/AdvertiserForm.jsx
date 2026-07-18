import React, { useState, useContext, useRef } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { advertiserpopupbanner } from '../assets/images';
import PaymentStep from './PaymentStep';
import PaymentReceipt from './PaymentReceipt';

const AdvertiserForm = ({ onSuccess, showIntroScreen = false }) => {
  const { backendUrl } = useContext(AppContext);
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showIntro, setShowIntro] = useState(showIntroScreen);
  const [currentStep, setCurrentStep] = useState(1);
  const [customIndustry, setCustomIndustry] = useState('');
  const [submittedAdvertiser, setSubmittedAdvertiser] = useState(null); // { advertiserId, fullName, email, whatsapp }
  const [paymentReceipt, setPaymentReceipt] = useState(null); // set after successful payment, shows PaymentReceipt step
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    whatsapp: '',
    companyName: '',
    website: '',
    industry: [],
    location: '',
    businessDescription: '',
    businessStage: '',
    topicsOfInterest: [],
    primaryReason: '',
    additionalComments: ''
  });

  const industries = [
    "Textile & Apparel",
    "MSME Manufacturing (Engineering, Fabrication & Industrial Manufacturing)",
    "Construction & Infrastructure",
    "Engineering & Auto Components",
    "Food Processing",
    "Healthcare & Pharmaceuticals",
    "Chemicals",
    "Logistics & Warehousing",
    "Agriculture & Food Exports",
    "Other"
  ];

  const businessStages = [
    "Early stage",
    "Growth stage",
    "Scaling / Expansion",
    "Established",
    "Pre-IPO Stage",
    "IPO / Public Listed Company"
  ];

  const topics = [
    "Business Growth Consultancy",
    "Finance, Taxation & Corporate Affairs",
    "Compliance, Certification & Sustainability",
    "IPO Advisory (SME & Mainboard)"
  ];

  const handleIndustryChange = (ind) => {
    setFormData(prev => {
      const isSelected = prev.industry.includes(ind);
      if (isSelected) {
        return { ...prev, industry: prev.industry.filter(i => i !== ind) };
      } else {
        return { ...prev, industry: [...prev.industry, ind] };
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTopicChange = (topic) => {
    setFormData(prev => {
      const isSelected = prev.topicsOfInterest.includes(topic);
      if (isSelected) {
        return { ...prev, topicsOfInterest: prev.topicsOfInterest.filter(t => t !== topic) };
      } else {
        return { ...prev, topicsOfInterest: [...prev.topicsOfInterest, topic] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.topicsOfInterest.length === 0) {
      toast.error('Please select at least one Topic of Interest');
      return;
    }
    setIsLoading(true);

    const submitData = {
      ...formData,
      industry: formData.industry.includes('Other') && customIndustry
        ? [...formData.industry.filter(i => i !== 'Other'), customIndustry]
        : formData.industry
    };

    try {
      const { data } = await axios.post(backendUrl + '/api/advertiser/submit', submitData);
      if (data.success) {
        toast.success('Details saved! Now complete your payment.');
        setSubmittedAdvertiser({
          advertiserId: data.advertiserId,
          fullName: formData.fullName,
          email: formData.email,
          whatsapp: formData.whatsapp,
        });
        setCurrentStep(3); // move to payment step
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        toast.error(data.message || 'Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting registration form:', error);
      toast.error('Error connecting to the server');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentSuccess = (paymentResult) => {
    setPaymentReceipt({
      fullName: formData.fullName,
      email: formData.email,
      paymentType: paymentResult.paymentType,
      amountPaid: paymentResult.paymentType === 'full'
        ? paymentResult.totalAmount
        : paymentResult.partialAmount,
      balanceAmount: paymentResult.balanceAmount,
      paymentStatus: paymentResult.paymentStatus,
      razorpayPaymentId: paymentResult.razorpayPaymentId,
    });
    if (onSuccess) {
      onSuccess();
    }
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.jobTitle && formData.email && formData.whatsapp && formData.companyName && formData.industry.length > 0 && formData.location && (!formData.industry.includes('Other') || customIndustry);
      case 2:
        return formData.businessDescription && formData.businessStage && formData.topicsOfInterest.length > 0 && formData.primaryReason && formData.additionalComments;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1);
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      toast.error('Please fill all required fields before proceeding');
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const SectionHeader = ({ title }) => (
    <div className="border-b-2 border-[#a4d64f]/30 pb-2 mb-4 mt-8 first:mt-0">
      <h4 className="text-lg font-bold text-[#2d2f31] uppercase tracking-wider">{title}</h4>
    </div>
  );

  if (showIntro) {
    return (
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6 font-inter">
        <img
          src={advertiserpopupbanner}
          alt="MentaGuide - Expand 360²"
          className="w-full max-w-md rounded-xl shadow-lg"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-xl sm:text-2xl font-gilroy font-bold text-[#2d2f31]">
            Become an Advertiser Partner
          </h3>
          <p className="text-gray-600 text-sm sm:text-base max-w-lg">
            Join MentaGuide's Expand 360² program and connect your brand with businesses accelerating global growth through strategy, compliance, and certification expertise.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowIntro(false)}
          className="bg-[#a4d64f] text-[#202523] px-8 py-3 rounded-xl font-black uppercase tracking-widest transition-all shadow-[0_10px_25px_rgba(164,214,79,0.3)] hover:bg-[#b5e663] hover:-translate-y-1 cursor-pointer"
        >
          Get Started
        </button>
      </div>
    );
  }

  if (currentStep === 3 && paymentReceipt) {
    return (
      <div ref={formRef}>
        <PaymentReceipt receipt={paymentReceipt} />
      </div>
    );
  }

  if (currentStep === 3 && submittedAdvertiser) {
    return (
      <div ref={formRef}>
        <PaymentStep advertiser={submittedAdvertiser} onPaymentSuccess={handlePaymentSuccess} />
      </div>
    );
  }

  return (
    <form ref={formRef} className="max-w-3xl mx-auto flex flex-col gap-6 font-inter" onSubmit={handleSubmit}>

      {/* Section 1: Onsite Event Registration */}
      {currentStep === 1 && (
      <div>
        <SectionHeader title="MentaGuide Program — Onsite Event Registration" />
        <p className="text-sm text-gray-600 -mt-2 mb-2">Thank you for your interest in the MentaGuide Program. This is an in-person event held at a fully equipped conference hall. Please complete this form to confirm your attendance and help us prepare for your visit.</p>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Full Name *</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Job Title / Role *</label>
            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} required className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Business Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Phone Number (WhatsApp) *</label>
            <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} required className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Company / Organization Name *</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} required className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Company Website</label>
            <input type="url" name="website" value={formData.website} onChange={handleInputChange} className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Industry / Sector *</label>
            <div className="flex flex-col gap-2 pl-2">
              {industries.map(ind => (
                <label key={ind} className="flex items-center gap-2 cursor-pointer text-gray-700 text-sm">
                  <input type="checkbox" checked={formData.industry.includes(ind)} onChange={() => handleIndustryChange(ind)} className="text-[#a4d64f] focus:ring-[#a4d64f] rounded h-4 w-4" />
                  {ind}
                </label>
              ))}
            </div>
          </div>
          {formData.industry.includes('Other') && (
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">If Other *</label>
              <textarea value={customIndustry} onChange={(e) => setCustomIndustry(e.target.value)} required rows="2" className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all resize-y"></textarea>
            </div>
          )}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Location (City, Country) *</label>
            <input type="text" name="location" value={formData.location} onChange={handleInputChange} required className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
        </div>
      </div>
      )}

      {/* Section 2: Program Objectives */}
      {currentStep === 2 && (
      <div>
        <SectionHeader title="Program Objectives" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Briefly describe your business / what your company does *</label>
            <textarea name="businessDescription" value={formData.businessDescription} onChange={handleInputChange} required rows="3" className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all resize-y"></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Current Business Stage *</label>
            <div className="flex flex-col gap-2 pl-2">
              {businessStages.map(stage => (
                <label key={stage} className="flex items-center gap-2 cursor-pointer text-gray-700 text-sm">
                  <input type="radio" name="businessStage" value={stage} checked={formData.businessStage === stage} onChange={handleInputChange} required className="text-[#a4d64f] focus:ring-[#a4d64f] h-4 w-4" />
                  {stage}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Topics of highest interest *</label>
            <div className="flex flex-col gap-2 pl-2">
              {topics.map(topic => (
                <label key={topic} className="flex items-center gap-2 cursor-pointer text-gray-700 text-sm">
                  <input type="checkbox" checked={formData.topicsOfInterest.includes(topic)} onChange={() => handleTopicChange(topic)} className="text-[#a4d64f] focus:ring-[#a4d64f] rounded h-4 w-4" />
                  {topic}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">What is your primary reason for attending the Mentaguide Program? *</label>
            <textarea name="primaryReason" value={formData.primaryReason} onChange={handleInputChange} required rows="3" className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all resize-y"></textarea>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Any additional comments or requirements *</label>
            <textarea name="additionalComments" value={formData.additionalComments} onChange={handleInputChange} required rows="3" className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all resize-y"></textarea>
          </div>
        </div>
      </div>
      )}

      <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between gap-4">
        {currentStep > 1 && (
          <button type="button" onClick={prevStep} className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-bold uppercase tracking-wider transition-all hover:bg-gray-300 cursor-pointer">
            Previous
          </button>
        )}
        {currentStep < 2 ? (
          <div className="ml-auto flex items-center gap-4">
            {!validateStep() && <span className="text-sm text-gray-500 hidden sm:inline">Please complete required fields</span>}
            <button type="button" onClick={nextStep} disabled={!validateStep()} className={`bg-[#a4d64f] text-[#202523] px-8 py-3 rounded-xl font-black uppercase tracking-wider transition-all shadow-[0_4px_14px_rgba(164,214,79,0.3)] ${!validateStep() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#b5e663] hover:-translate-y-0.5 cursor-pointer'}`}>
              Next
            </button>
          </div>
        ) : (
          <button type="submit" disabled={isLoading || !validateStep()} className={`ml-auto bg-[#a4d64f] text-[#202523] px-8 py-3 rounded-xl font-black uppercase tracking-widest transition-all shadow-[0_10px_25px_rgba(164,214,79,0.3)] text-base sm:text-lg flex justify-center items-center gap-3 ${isLoading || !validateStep() ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#b5e663] hover:-translate-y-1 cursor-pointer'}`}>
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-[#202523] border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </button>
        )}
      </div>

    </form>
  );
};

export default AdvertiserForm;