import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const AdvertiserForm = ({ onSuccess }) => {
  const { backendUrl } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [industrySearch, setIndustrySearch] = useState('');
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const [customIndustry, setCustomIndustry] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    whatsapp: '',
    landline: '',
    companyName: '',
    website: '',
    industry: '',
    location: '',
    section2Description: '',
    section3Description: '',
    section4Description: '',
    section5Description: '',
    section6Description: '',
    primaryReason: '',
    specificChallenge: '',
    businessDescription: '',
    businessStage: '',
    topicsOfInterest: [],
    primaryContact: '',
    certificationChallenge: '',
    expectedOutcome: '',
    willAttend: '',
    numberOfAttendees: '',
    additionalComments: ''
  });

  const industries = [
    "Textile Mills", "Yarn Spinning", "Weaving", "Knitting", "Dyeing & Finishing",
    "Garment Manufacturing", "Home Textiles", "Carpets & Rugs", "Technical Textiles",
    "Leather Goods", "Footwear", "Fashion Accessories", "Organic Farming",
    "Conventional Crop Farming", "Fresh Fruits Export", "Fresh Vegetables Export",
    "Seed Production", "Tea Processing", "Coffee Processing", "Cocoa Processing",
    "Spice Processing", "Grain Milling", "Rice Milling", "Sugar Manufacturing",
    "Dairy Farming", "Dairy Processing", "Meat Processing", "Poultry Processing",
    "Seafood Processing", "Bakery Products", "Beverage Manufacturing", "Snack Foods",
    "Frozen Foods", "Edible Oil", "Basic Chemicals", "Specialty Chemicals",
    "Agrochemicals", "Paints & Coatings", "Adhesives & Sealants", "Plastic Manufacturing",
    "Plastic Recycling", "Rubber Products", "Packaging", "Corrugated Packaging",
    "Flexible Packaging", "Paper Manufacturing", "Printing & Publishing",
    "Furniture Manufacturing", "Wood Products", "Pharmaceutical Manufacturing",
    "API Manufacturing", "Biopharmaceuticals", "Medical Devices", "Diagnostics & IVD",
    "Hospitals", "Diagnostic Laboratories", "Testing Laboratories",
    "Calibration Laboratories", "Blood Banks", "Cosmetics", "Personal Care Products",
    "Herbal Products", "Automotive OEM Supply", "Automotive Components",
    "EV Components", "Battery Manufacturing", "Aerospace Components",
    "Defense Electronics", "Industrial Machinery", "Electrical Equipment",
    "Switchgear & Panels", "Cables & Wires", "Tools & Hardware",
    "Bearings & Precision Parts", "Pumps & Compressors", "Valves & Fittings",
    "Metal Fabrication", "Steel Manufacturing", "Aluminium Products", "Copper Products",
    "Mining", "Oil & Gas Equipment", "Petrochemicals", "Solar Module Manufacturing",
    "Solar EPC", "Wind Turbine Components", "Hydropower", "Power Generation",
    "Transmission & Distribution", "Construction", "Civil Infrastructure",
    "Real Estate Development", "Roads & Highways", "Railway Systems", "Metro & Transit",
    "Marine & Shipbuilding", "Ports & Logistics Hubs", "Logistics", "Warehousing",
    "Freight Forwarding", "Courier & Parcel", "Truck Transport", "Aviation Services",
    "Airports", "IT Services", "Software Development", "SaaS", "Cloud Services",
    "Data Centers", "Artificial Intelligence", "Cybersecurity", "Telecom Operators",
    "Internet Service Providers", "E-Commerce", "Payment Processing", "FinTech",
    "Banking", "Insurance", "Retail Chains", "Wholesale Trade", "Supermarkets",
    "Department Stores", "Restaurants", "Catering Services", "Hotels",
    "Tourism & Travel", "Theme Parks", "Sports Equipment", "Toys", "Jewelry",
    "Watch Manufacturing", "Schools", "Colleges", "Universities", "Training Institutes",
    "Government Contractors", "Security Services", "Waste Management",
    "Water Treatment", "Environmental Consulting", "NGOs", "Others"
  ];

  const filteredIndustries = industries.filter(ind => ind.toLowerCase().includes(industrySearch.toLowerCase()));

  const businessStages = [
    "Idea / Pre-launch",
    "Early Stage (0–2 years)",
    "Growth Stage (3–5 years)",
    "Established (5+ years)",
    "Scaling / Expansion"
  ];

  const topics = [
    "Export Certifications",
    "Country-specific Compliance",
    "Legal Frameworks",
    "Digital Export Tools",
    "Case Studies",
    "Initial Public Offerings (SME/Mainboard)",
    "Compliance Management"
  ];

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
      industry: formData.industry === 'Others' ? customIndustry : formData.industry
    };
    
    try {
      const { data } = await axios.post(backendUrl + '/api/advertiser/submit', submitData);
      if (data.success) {
        toast.success(data.message || 'Signup form submitted successfully!');
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast.error(data.message || 'Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting advertiser form:', error);
      toast.error('Error connecting to the server');
    } finally {
      setIsLoading(false);
    }
  };

  const SectionHeader = ({ title }) => (
    <div className="border-b-2 border-[#a4d64f]/30 pb-2 mb-4 mt-8 first:mt-0">
      <h4 className="text-lg font-bold text-[#2d2f31] uppercase tracking-wider">{title}</h4>
    </div>
  );

  return (
    <form className="max-w-3xl mx-auto flex flex-col gap-6 font-inter" onSubmit={handleSubmit}>
      
      {/* Section 1: Advertiser Signup */}
      <div>
        <SectionHeader title="Section 1: Advertiser Signup" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
            <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">WhatsApp Number *</label>
            <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} required className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Landline Number (If Available)</label>
            <input type="tel" name="landline" value={formData.landline} onChange={handleInputChange} className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Company / Organization Name *</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} required className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Company Website</label>
            <input type="url" name="website" value={formData.website} onChange={handleInputChange} className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-sm font-semibold text-gray-700">Industry / Sector *</label>
            <div className="relative">
              <input
                type="text"
                name="industrySearch"
                value={industrySearch}
                onChange={(e) => {
                  setIndustrySearch(e.target.value);
                  setIsIndustryDropdownOpen(true);
                  if (formData.industry) {
                    setFormData(prev => ({ ...prev, industry: '' }));
                  }
                }}
                onFocus={() => setIsIndustryDropdownOpen(true)}
                onBlur={() => setTimeout(() => setIsIndustryDropdownOpen(false), 150)}
                placeholder="Search and select industry..."
                required={!formData.industry}
                className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all w-full"
                autoComplete="off"
              />
              {isIndustryDropdownOpen && (
                <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredIndustries.length > 0 ? (
                    filteredIndustries.map(ind => (
                      <li
                        key={ind}
                        onMouseDown={() => {
                          setFormData(prev => ({ ...prev, industry: ind }));
                          setIndustrySearch(ind);
                          setIsIndustryDropdownOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                      >
                        {ind}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-sm text-gray-500">No industries found</li>
                  )}
                </ul>
              )}
            </div>
          </div>
          {formData.industry === 'Others' && (
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-gray-700">Please Specify Your Industry *</label>
              <input 
                type="text" 
                value={customIndustry} 
                onChange={(e) => setCustomIndustry(e.target.value)} 
                required 
                className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all w-full" 
              />
            </div>
          )}
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-sm font-semibold text-gray-700">Location (City, Country) *</label>
            <input type="text" name="location" value={formData.location} onChange={handleInputChange} required className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
        </div>
      </div>

      {/* Section 2: Program Objectives */}
      <div>
        <SectionHeader title="Section 2: Program Objectives" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Description (Optional)</label>
            <input type="text" name="section2Description" value={formData.section2Description} onChange={handleInputChange} className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Primary reason for attending the Mentaguide Program *</label>
            <textarea name="primaryReason" value={formData.primaryReason} onChange={handleInputChange} required rows="3" className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all resize-y"></textarea>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Specific challenge or goal you want to address *</label>
            <textarea name="specificChallenge" value={formData.specificChallenge} onChange={handleInputChange} required rows="3" className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all resize-y"></textarea>
          </div>
        </div>
      </div>

      {/* Section 3: Background & Business Context */}
      <div>
        <SectionHeader title="Section 3: Background & Business Context" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Description (Optional)</label>
            <input type="text" name="section3Description" value={formData.section3Description} onChange={handleInputChange} className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Describe your business / company work *</label>
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
        </div>
      </div>

      {/* Section 4: Event Logistics & Preferences */}
      <div>
        <SectionHeader title="Section 4: Event Logistics & Preferences" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Description (Optional)</label>
            <input type="text" name="section4Description" value={formData.section4Description} onChange={handleInputChange} className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Topics of Highest Interest *</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
              {topics.map(topic => (
                <label key={topic} className="flex items-center gap-2 cursor-pointer text-gray-700 text-sm">
                  <input type="checkbox" checked={formData.topicsOfInterest.includes(topic)} onChange={() => handleTopicChange(topic)} className="text-[#a4d64f] focus:ring-[#a4d64f] rounded h-4 w-4" />
                  {topic}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Primary Contact Name & Phone Number *</label>
            <input type="text" name="primaryContact" value={formData.primaryContact} onChange={handleInputChange} required className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
        </div>
      </div>

      {/* Section 5: Business Objectives */}
      <div>
        <SectionHeader title="Section 5: Business Objectives" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Description (Optional)</label>
            <input type="text" name="section5Description" value={formData.section5Description} onChange={handleInputChange} className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Certification or compliance challenge currently facing *</label>
            <textarea name="certificationChallenge" value={formData.certificationChallenge} onChange={handleInputChange} required rows="3" className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all resize-y"></textarea>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Expected outcome from this event *</label>
            <textarea name="expectedOutcome" value={formData.expectedOutcome} onChange={handleInputChange} required rows="3" className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all resize-y"></textarea>
          </div>
        </div>
      </div>

      {/* Section 6: Confirmation */}
      <div>
        <SectionHeader title="Section 6: Confirmation" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Description (Optional)</label>
            <input type="text" name="section6Description" value={formData.section6Description} onChange={handleInputChange} className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Will you attend the event? *</label>
            <div className="flex gap-6 pl-2">
              <label className="flex items-center gap-2 cursor-pointer text-gray-700 text-sm">
                <input type="radio" name="willAttend" value="Yes" checked={formData.willAttend === 'Yes'} onChange={handleInputChange} required className="text-[#a4d64f] focus:ring-[#a4d64f] h-4 w-4" /> Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-gray-700 text-sm">
                <input type="radio" name="willAttend" value="No" checked={formData.willAttend === 'No'} onChange={handleInputChange} required className="text-[#a4d64f] focus:ring-[#a4d64f] h-4 w-4" /> No
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Number of attendees joining from company *</label>
            <input type="number" name="numberOfAttendees" min="1" value={formData.numberOfAttendees} onChange={handleInputChange} required className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all w-full sm:w-1/2" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Additional comments or requirements</label>
            <textarea name="additionalComments" value={formData.additionalComments} onChange={handleInputChange} rows="3" className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#a4d64f] transition-all resize-y"></textarea>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <button type="submit" disabled={isLoading} className={`w-full bg-[#a4d64f] text-[#202523] px-8 py-4 rounded-xl font-black uppercase tracking-widest transition-all shadow-[0_10px_25px_rgba(164,214,79,0.3)] text-base sm:text-lg flex justify-center items-center gap-3 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#b5e663] hover:-translate-y-1 cursor-pointer'}`}>
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-[#202523] border-t-transparent rounded-full animate-spin"></div>
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </button>
      </div>

    </form>
  );
};

export default AdvertiserForm;
