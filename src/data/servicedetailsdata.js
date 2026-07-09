import {
  ipo1,ipo2,businessgrowth1,businessgrowth2,compliance1,compliance2,finance1,finance2,industriesserved1,industriesserved2,industrycertifications1,industrycertifications2
} from '../assets/images'

export const getServicePath = (slug) => `/service/${slug}`

// 1. Business Growth Consultancy
export const businessGrowthDetails = {
  slug: 'business-growth-consultancy',

  title: 'Business Growth Consultancy',

  heroImage: businessgrowth1,
  contentImage: businessgrowth2,

  intro: [
    "Accelerate Growth with Confidence",
    "In today's rapidly evolving business landscape, sustainable growth requires more than just ambition—it demands the right strategy, efficient operations, and informed decision-making. MentaGuide partners with businesses to unlock growth opportunities, improve operational performance, manage risks, and build resilient organizations. Our experienced consultants work closely with you to deliver practical, customized solutions that drive long-term profitability and competitive advantage."
  ],

  sectionTitle: "Our Business Growth Consultancy Services",

  services: [
    {
      title: "1. Business Strategy & Transformation",
      description:
        "A strong business strategy lays the foundation for sustainable success. Our strategic advisory services help organizations develop clear growth roadmaps, optimize business models, improve profitability, and align operations with long-term objectives. Transformation solutions enable businesses to adapt to changing market conditions while enhancing overall performance and value creation."
    },
    {
      title: "2. Growth & Expansion Strategy",
      description:
        "Expanding into new markets or launching new business initiatives requires careful planning and execution. Strategic advisory support includes identifying emerging opportunities, evaluating market potential, and developing scalable growth strategies tailored to business goals. This approach enables organizations to expand confidently while minimizing risks and maximizing returns."
    },
    {
      title: "3. Operational Efficiency",
      description:
        "Efficient operations are essential for improving productivity and profitability. A structured operational assessment focuses on analyzing existing business processes, identifying operational bottlenecks, and implementing practical improvements that optimize resource utilization. The result is reduced costs, improved workflow efficiency, and enhanced overall business performance."
    },
    {
      title: "4. Risk & Crisis Management",
      description:
        "Every business faces uncertainties that can impact operations and growth. Comprehensive risk advisory services assist organizations in identifying strategic, operational, financial, and compliance risks while developing proactive mitigation and crisis management plans. This approach strengthens business resilience and ensures continuity during challenging situations."
    },
    {
      title: "5. Corporate Restructuring",
      description:
        "As businesses evolve, restructuring may become necessary to improve efficiency and support future growth. Strategic restructuring advisory provides guidance on organizational restructuring, operational realignment, and financial optimization to enhance business performance. The objective is to create agile organizations capable of adapting to changing market demands."
    },
    {
      title: "6. Mergers & Acquisitions (M&A)",
      description:
        "Successful mergers and acquisitions require careful planning, thorough evaluation, and seamless execution. Comprehensive M&A advisory services cover opportunity assessment, transaction support, valuation coordination, integration planning, and post-merger strategy. The focus remains on maximizing business value while ensuring a smooth transition."
    },
    {
      title: "7. Demerger Advisory",
      description:
        "Business demergers can unlock value, improve operational focus, and support strategic growth objectives. End-to-end demerger advisory includes strategic, financial, and regulatory guidance throughout the separation process. The process is designed to ensure efficiency, regulatory compliance, and alignment with long-term business objectives."
    },
    {
      title: "8. Due Diligence",
      description:
        "Making informed business decisions begins with a comprehensive understanding of potential risks and opportunities. Comprehensive due diligence services include financial, legal, operational, commercial, and compliance assessments to support investments, acquisitions, partnerships, and business restructuring. These assessments provide the insights needed for confident decision-making."
    },
    {
      title: "9. Supply Chain Management",
      description:
        "A resilient and efficient supply chain is critical for business success. Supply chain advisory services focus on optimizing procurement, logistics, inventory management, and supplier performance to improve operational efficiency and reduce costs. The outcome is stronger supply chain resilience, enhanced customer satisfaction, and sustainable business growth."
    }
  ],

  closing:
    "At MentaGuide, we help organizations transform challenges into opportunities through strategic planning, operational excellence, and expert advisory services. Our goal is to empower businesses with sustainable growth strategies that create long-term value and lasting competitive advantage."
}

// 2. Growth & Expansion Strategy
export const growthStrategyDetails = {
  slug: "growth-strategy",

  title: "Growth & Expansion Strategy",

  heroImage: businessgrowth1,
  contentImage: businessgrowth2,

  intro: [
    "Accelerate Sustainable Business Growth",
    "Every successful organization requires a structured roadmap to achieve sustainable growth. At MentaGuide, we help businesses identify opportunities, improve operational excellence, strengthen governance, manage risks, and build long-term competitive advantage through strategic consulting."
  ],

  sectionTitle: "Road Map for Business Growth Consultancy",

  services: [
    {
      title: "Step 1: Strategic Assessment & Planning",
      description:
        "Establish a strong foundation for growth by developing clear strategic roadmaps, optimizing business models, and identifying market expansion opportunities through comprehensive advisory services."
    },
    {
      title: "Step 2: Operational Optimization",
      description:
        "Analyze and refine core business processes, resolve operational bottlenecks, and implement supply chain management improvements to drive efficiency, productivity, and reduced operational costs."
    },
    {
      title: "Step 3: Financial & Governance Foundation",
      description:
        "Build integrity and transparency by establishing robust accounting, budgeting, and financial planning systems alongside strong corporate governance and secretarial compliance practices."
    },
    {
      title: "Step 4: Risk Mitigation & Restructuring",
      description:
        "Fortify the business through proactive risk management, crisis planning, and strategic corporate restructuring to ensure stability, resilience, and agility amidst changing market conditions."
    },
    {
      title: "Step 5: Sustainability & Market Validation",
      description:
        "Achieve long-term value by integrating Environmental, Health & Safety (EHS) practices, securing ISO and export certifications, and conducting comprehensive due diligence to support confident, sustainable business decisions."
    }
  ],

  closing:
    "Our structured growth roadmap enables organizations to strengthen their strategic direction, improve operational excellence, enhance governance, reduce business risks, and achieve sustainable long-term growth."
}

// 3. Finance & Taxation
export const financeTaxationDetails = {
  slug: "finance-taxation-corporate-affairs",

  title: "Finance, Taxation & Corporate Affairs",

  heroImage: finance1,
  contentImage: finance2,

  intro: [
    "Building Strong Financial Foundations with Complete Regulatory Compliance",
    "Managing finances and staying compliant with evolving regulations are essential for every successful business. MentaGuide offers comprehensive financial, taxation, legal, and corporate advisory services that help businesses operate with confidence, transparency, and efficiency. From business incorporation and accounting to tax compliance, corporate governance, and legal advisory, our experts provide end-to-end support so you can focus on growing your business while we take care of your compliance obligations."
  ],

  sectionTitle: "Our Finance, Taxation & Corporate Affairs Services",

  services: [
    {
      title: "1. Accounting & Bookkeeping",
      description:
        "Accurate financial records are the backbone of every successful business. Professional accounting and bookkeeping services ensure proper record maintenance, financial transparency, and statutory compliance. These services enable businesses to make informed decisions based on accurate and timely financial information."
    },
    {
      title: "2. Budgeting & Financial Planning",
      description:
        "Effective financial planning enables businesses to achieve sustainable growth and long-term stability. Financial planning advisory focuses on preparing realistic budgets, forecasting cash flows, and developing financial strategies that optimize resources and improve profitability. The approach supports informed investment and business planning decisions."
    },
    {
      title: "3. GST Registration & Return Filing",
      description:
        "GST compliance is critical for smooth business operations. End-to-end GST services include registration, return filing, reconciliations, and ongoing compliance, ensuring timely submissions while minimizing the risk of penalties. A streamlined approach simplifies the entire GST process for businesses of all sizes."
    },
    {
      title: "4. GST Advisory & Notice Support",
      description:
        "Navigating GST regulations can be complex and challenging. Specialized GST advisory services provide guidance on regulatory matters, assistance in responding to departmental notices, and effective resolution of compliance issues. A proactive approach helps businesses remain compliant while reducing tax-related risks."
    },
    {
      title: "5. Statutory, Internal & Concurrent Audits",
      description:
        "Regular audits strengthen financial integrity and improve internal controls. Comprehensive audit services include statutory, internal, and concurrent audits to evaluate financial systems, identify operational gaps, and ensure compliance with applicable laws and regulatory requirements. The outcome is improved transparency and enhanced stakeholder confidence."
    },
    {
      title: "6. Company Incorporation",
      description:
        "Starting a business should be simple and hassle-free. End-to-end incorporation services cover documentation, regulatory approvals, registrations, and legal formalities. The process ensures businesses are established efficiently while meeting all statutory requirements."
    },
    {
      title: "7. Annual MCA Filings",
      description:
        "Every company must meet annual filing obligations under the Companies Act. Annual compliance services include managing MCA filings, statutory returns, and regulatory documentation accurately and on time. This helps businesses maintain good corporate standing and avoid compliance penalties."
    },
    {
      title: "8. Secretarial Compliance",
      description:
        "Corporate governance begins with strong secretarial practices. Secretarial compliance services include maintaining statutory registers, ensuring board meeting compliance, managing shareholder records, and fulfilling other corporate secretarial requirements. These services help companies remain fully compliant with applicable corporate laws."
    },
    {
      title: "9. Secretarial Audit",
      description:
        "A secretarial audit helps businesses evaluate compliance with corporate laws and governance standards. Comprehensive secretarial audits assess compliance status, identify gaps, recommend improvements, and strengthen regulatory adherence. The objective is enhanced corporate governance and minimized legal risks."
    },
    {
      title: "10. NIDHI Companies Assistance",
      description:
        "NIDHI companies operate under specific regulatory frameworks that require continuous compliance. Dedicated advisory services cover incorporation, annual filings, governance, regulatory approvals, and ongoing compliance requirements. The focus is on ensuring smooth operations while maintaining full statutory compliance."
    },
    {
      title: "11. FEMA / FCGPR Compliance",
      description:
        "Foreign investments require strict compliance with FEMA regulations. FEMA compliance services include FCGPR filings, reporting requirements, documentation, and regulatory submissions to ensure seamless adherence to Reserve Bank of India guidelines and foreign investment regulations."
    },
    {
      title: "12. ECB Compliance",
      description:
        "External Commercial Borrowings (ECB) require accurate regulatory reporting and ongoing compliance. Comprehensive ECB advisory includes approvals, documentation, filings, and regulatory guidance, helping businesses manage overseas borrowings in accordance with applicable regulations."
    },
    {
      title: "13. SEZ Compliance",
      description:
        "Businesses operating in Special Economic Zones must comply with various regulatory and reporting requirements. SEZ compliance services cover documentation, approvals, statutory filings, and operational compliance to ensure uninterrupted business operations and regulatory adherence."
    },
    {
      title: "14. Search Reports",
      description:
        "Reliable corporate information is essential before entering into business transactions or investments. Detailed corporate search reports provide information on company records, charges, legal status, compliance history, and statutory filings. These reports support informed decision-making and effective risk assessment."
    },
    {
      title: "15. Dematerialization of Private Company Shares",
      description:
        "With evolving regulatory requirements, private companies are increasingly required to maintain shares in electronic form. End-to-end dematerialization assistance includes documentation, coordination with depositories, and regulatory compliance, ensuring a smooth and compliant transition."
    },
    {
      title: "16. Legal Documentation & Agreements",
      description:
        "Well-drafted legal documents protect businesses from future disputes and legal risks. Legal documentation services include preparing, reviewing, and customizing contracts, agreements, policies, and other legal documents that safeguard business interests while ensuring compliance with applicable laws."
    },
    {
      title: "17. Legal Opinions",
      description:
        "Sound legal advice supports confident business decisions. Professional legal opinion services provide practical guidance on corporate, commercial, regulatory, and contractual matters, enabling businesses to understand legal implications and manage risks effectively before making strategic decisions."
    },
    {
      title: "18. Business Registration",
      description:
        "Every business requires the right registrations to operate legally and efficiently. Business registration services facilitate registrations with various government authorities, ensuring timely approvals, regulatory compliance, and a smooth business setup process."
    },
    {
      title: "19. Trust, Society & Section 8 Registration",
      description:
        "Organizations established for charitable, educational, or non-profit purposes require specialized legal structures. Registration advisory services cover Trusts, Societies, and Section 8 Companies by managing documentation, approvals, and statutory requirements to ensure a seamless and compliant establishment process."
    }
  ],

  closing:
    "At MentaGuide, we provide integrated finance, taxation, legal, and corporate advisory services that strengthen financial governance, ensure regulatory compliance, and support sustainable business growth. Our experienced professionals help organizations navigate complex regulatory requirements with confidence while building a strong foundation for long-term success."
}

// 4. Compliance & Certification
export const complianceDetails = {
  slug: "compliance-certification-sustainability",

  title: "Compliance, Certification & Sustainability",

  heroImage: compliance1,
  contentImage: compliance2,

  intro: [
    "Achieve Compliance. Build Trust. Drive Sustainable Growth.",
    "In today's competitive business environment, compliance and sustainability are more than regulatory requirements—they are key drivers of business success, customer confidence, and global market access. MentaGuide helps organizations navigate complex regulatory frameworks, achieve internationally recognized certifications, strengthen governance practices, and embed sustainability into their business strategy. Our end-to-end solutions enable businesses to reduce compliance risks, enhance operational excellence, and build long-term stakeholder value."
  ],

  sectionTitle: "Our Compliance, Certification & Sustainability Services",

  services: [
    {
      title: "1. ISO Certification",
      description:
        "International standards help businesses improve quality, efficiency, and customer confidence. Comprehensive ISO certification services include gap assessments, documentation, implementation, employee training, internal audits, certification audit support, and continual improvement. A structured approach ensures a smooth certification journey while building robust management systems."
    },
    {
      title: "2. Brand / Buyer Requirement Certification",
      description:
        "Many customers and global brands require suppliers to comply with specific social, quality, environmental, and ethical standards. Buyer certification advisory supports organizations in obtaining brand-specific certifications that strengthen supply chain relationships, enhance market credibility, and meet both domestic and international customer requirements such as SA 8000, SEDEX, and EcoVadis."
    },
    {
      title: "3. ESG Consulting",
      description:
        "Environmental, Social, and Governance (ESG) practices have become essential for sustainable business growth and investor confidence. ESG consulting services focus on developing sustainability strategies, identifying material priorities, strengthening governance practices, and aligning with globally recognized reporting frameworks. This approach enhances long-term business value while meeting stakeholder and regulatory expectations."
    },
    {
      title: "4. Export Certifications",
      description:
        "Expanding into international markets requires compliance with country-specific regulations and certification requirements. Export certification services cover product approvals, regulatory documentation, and certification requirements needed to access global markets. The objective is to enhance export readiness while ensuring smooth international trade operations."
    },
    {
      title: "5. Trademark Registration",
      description:
        "A brand is one of the most valuable business assets. Trademark registration services include application preparation, filing, documentation, and coordination with the appropriate authorities. These services help businesses protect their brand identity and establish exclusive legal rights over their trademarks."
    },
    {
      title: "6. Intellectual Property (IPR)",
      description:
        "Protecting intellectual property is essential for preserving innovation and maintaining a competitive advantage. Intellectual property advisory services provide registration and protection support for trademarks, copyrights, patents, designs, and other intellectual property rights. The focus is on safeguarding valuable business assets while ensuring compliance with applicable intellectual property laws."
    },
    {
      title: "7. Regulatory Compliance",
      description:
        "Keeping pace with changing regulatory requirements can be challenging for growing businesses. Regulatory compliance services assist organizations in identifying applicable legal obligations, establishing compliance frameworks, and implementing effective monitoring systems. This proactive approach promotes ongoing compliance, minimizes business risks, and supports operational excellence."
    },
    {
      title: "8. Supply Chain Compliance",
      description:
        "Modern supply chains demand transparency, ethical practices, and compliance with customer and regulatory expectations. Supply chain compliance services include assessments, audits, supplier evaluations, and implementation of internationally recognized standards. The outcome is stronger supplier relationships, enhanced business credibility, and improved access to global markets."
    },
    {
      title: "9. Sustainability & Governance Advisory",
      description:
        "Strong sustainability practices and effective corporate governance create long-term business resilience and stakeholder trust. Sustainability and governance advisory services focus on developing sustainability strategies, strengthening governance frameworks, improving regulatory compliance, and aligning business objectives with responsible growth. These initiatives enable enhanced operational performance while creating lasting environmental, social, and economic value."
    }
  ],

  closing:
    "At MentaGuide, we help businesses build resilient, compliant, and future-ready organizations through expert certification, regulatory compliance, intellectual property, and sustainability advisory services. Our integrated approach strengthens governance, enhances brand credibility, supports global market expansion, and drives sustainable long-term growth."
}
 
// 5. IPO Advisory
export const ipoAdvisoryDetails = {
  slug: "ipo-advisory",

  title: "IPO Advisory (SME & Mainboard)",

  heroImage: ipo1,
  contentImage: ipo2,

  intro: [
    "From Private Company to Listed Company",
    "Taking a company public is a significant milestone that requires strategic planning, regulatory compliance, financial readiness, and seamless coordination among multiple stakeholders. MentaGuide provides comprehensive IPO advisory services to help businesses successfully transition from a private company to a publicly listed entity. Our experienced team works alongside merchant bankers, legal advisors, chartered accountants, company secretaries, and other professionals to ensure a smooth, compliant, and value-driven IPO journey."
  ],

  sectionTitle: "Our IPO Advisory Services",

  services: [
    {
      title: "1. IPO Readiness Assessment",
      description:
        "Every successful IPO begins with understanding where your business stands today. We conduct a comprehensive assessment of your company's financial, operational, legal, governance, and compliance readiness to identify gaps and develop an action plan for a successful listing."
    },
    {
      title: "2. Business Structuring & Corporate Restructuring",
      description:
        "A well-structured organization attracts investors and supports long-term growth. We assist businesses in optimizing their corporate structure, shareholding pattern, capitalization, and governance framework to align with IPO requirements and improve operational efficiency."
    },
    {
      title: "3. IPO Strategy & Roadmap",
      description:
        "A clear roadmap is essential for executing a successful public issue. We develop a structured IPO strategy covering timelines, regulatory milestones, documentation, stakeholder responsibilities, valuation planning, and overall execution to ensure a smooth listing process."
    },
    {
      title: "4. Merchant Banker Coordination",
      description:
        "Merchant bankers play a central role throughout the IPO lifecycle. We act as a single point of coordination between your organization and merchant bankers, ensuring effective communication, timely documentation, and seamless execution from planning through listing."
    },
    {
      title: "5. Registrar & Transfer Agent (RTA) Coordination",
      description:
        "Efficient shareholder management is critical during and after an IPO. We coordinate with RTAs for shareholder data verification, issue management, allotment processes, reconciliation, and post-listing services to ensure accurate and timely execution."
    },
    {
      title: "6. SEBI & Stock Exchange Coordination",
      description:
        "Navigating regulatory requirements requires continuous engagement with market authorities. We facilitate communication and documentation with SEBI, NSE, BSE, and other regulatory bodies, ensuring timely submissions and compliance throughout the IPO process."
    },
    {
      title: "7. Due Diligence Support",
      description:
        "Comprehensive due diligence builds investor confidence and reduces transaction risks. We coordinate financial, legal, secretarial, tax, operational, and commercial due diligence activities, ensuring all critical aspects of the business are thoroughly reviewed before listing."
    },
    {
      title: "8. Financial Due Diligence",
      description:
        "Reliable financial reporting is fundamental to a successful IPO. We support the review of financial statements, accounting policies, internal controls, and historical financial performance to ensure transparency, regulatory compliance, and investor confidence."
    },
    {
      title: "9. Legal & Secretarial Due Diligence",
      description:
        "Strong legal and corporate governance frameworks are essential for public companies. We review statutory records, corporate documents, governance practices, contracts, and legal compliances to ensure your business is fully prepared for regulatory scrutiny."
    },
    {
      title: "10. Corporate Governance Framework",
      description:
        "Good governance is a cornerstone of every listed company. We help establish effective board structures, independent committees, internal control systems, governance policies, and compliance mechanisms that meet investor and regulatory expectations."
    },
    {
      title: "11. Financial Reporting & Restatement Support",
      description:
        "Public companies must comply with stringent financial reporting standards. We coordinate the preparation and restatement of financial statements in accordance with applicable accounting standards and regulatory requirements for IPO filings."
    },
    {
      title: "12. Valuation Support",
      description:
        "An accurate business valuation plays a key role in determining issue pricing and attracting investors. We coordinate with registered valuers and merchant bankers to support valuation exercises and provide inputs for pricing strategy and capital raising objectives."
    },
    {
      title: "13. Drafting & Documentation Support",
      description:
        "IPO documentation requires precision, accuracy, and regulatory compliance. We assist in preparing corporate documents, disclosures, business information, and supporting documentation required throughout the IPO process."
    },
    {
      title: "14. DRHP / RHP Documentation Coordination",
      description:
        "The Draft Red Herring Prospectus (DRHP) and Red Herring Prospectus (RHP) are among the most critical IPO documents. We coordinate their preparation, review, and regulatory submissions, ensuring all disclosures are accurate, complete, and compliant."
    },
    {
      title: "15. Regulatory Compliance Management",
      description:
        "Compliance is at the heart of every successful IPO. We help businesses comply with the Companies Act, SEBI Regulations, FEMA, Stock Exchange requirements, and other applicable laws to ensure a smooth and compliant listing journey."
    },
    {
      title: "16. Capital Restructuring",
      description:
        "Optimizing share capital before listing enhances investor confidence and regulatory readiness. We assist with bonus issues, stock splits, ESOP restructuring, preferential allotments, share capital reconciliation, and other capital restructuring activities."
    },
    {
      title: "17. Investor Readiness",
      description:
        "Successful IPOs require effective communication with potential investors. We prepare management teams for investor meetings, presentations, roadshows, disclosures, and public interactions, helping them confidently communicate the company's growth story."
    },
    {
      title: "18. Internal Controls & Risk Management",
      description:
        "Robust internal controls improve governance and enhance investor trust. We help strengthen internal control systems, enterprise risk management frameworks, compliance monitoring, and business processes to support long-term corporate performance."
    },
    {
      title: "19. ESG & Sustainability Readiness",
      description:
        "Investors increasingly evaluate companies based on sustainability and governance practices. We help organizations develop ESG strategies, strengthen governance frameworks, and prepare sustainability disclosures that align with regulatory requirements and investor expectations."
    },
    {
      title: "20. Tax & FEMA Advisory",
      description:
        "Cross-border transactions and tax planning require careful regulatory compliance. We provide advisory support on tax structuring, FEMA regulations, FCGPR filings, ODI/FDI compliance, and other related matters to ensure efficient and compliant capital market transactions."
    },
    {
      title: "21. Coordination with Professional Advisors",
      description:
        "A successful IPO requires seamless collaboration among multiple experts. MentaGuide coordinates with merchant bankers, chartered accountants, company secretaries, legal advisors, RTAs, depositories (NSDL/CDSL), registered valuers, bankers, underwriters, and investor relations agencies to ensure every stage of the IPO is managed efficiently."
    },
    {
      title: "22. Pre-IPO Compliance",
      description:
        "Preparing for an IPO involves strengthening the company's legal, financial, and governance foundation. We assist with corporate restructuring, statutory and secretarial compliances, financial clean-up, share capital reconciliation, dematerialization of shares, regulatory filings, and obtaining all necessary board and shareholder approvals before the public issue."
    },
    {
      title: "23. IPO Execution Support",
      description:
        "From regulatory filings to the listing ceremony, we provide end-to-end execution support throughout the IPO process. Our services include issue management coordination, investor documentation, roadshow support, regulatory submissions, public issue management, and listing coordination, ensuring a seamless transition from a private company to a listed enterprise."
    }
  ],

  closing:
    "At MentaGuide, we provide comprehensive IPO advisory services that guide businesses through every stage of the listing journey—from IPO readiness and strategic planning to regulatory compliance, execution, and post-listing coordination. Our integrated approach helps organizations achieve successful public listings while building strong governance, investor confidence, and sustainable long-term growth."
}

// 6. Industries Served
export const industriesServedDetails = {
  slug: 'industries-served',
  title: 'Industries Served',
  heroImage: industriesserved1,
  contentImage: industriesserved2,

  intro: [
    'We provide consulting solutions across multiple industries facing operational and compliance challenges.',
    'Our expertise helps industries improve efficiency and maintain compliance standards.'
  ],

  sectionTitle: 'Industry-Specific Business Solutions',

  sectionText:
    'We serve textile, manufacturing, construction, healthcare, logistics, food processing, chemicals, and export industries.',

  highlights: [
    'Textile Industry',
    'Manufacturing',
    'Construction',
    'Healthcare'
  ],

  imageText: [
    'Every industry faces unique challenges requiring specialized consulting support.',
    'We deliver tailored solutions based on sector-specific requirements.'
  ],

  closing:
    'Industry-focused expertise helps businesses overcome operational challenges and improve performance.'
}

// 7. Industry Certifications
export const certificationsDetails = {
  slug: 'industry-certifications',
  title: 'Industry Certifications',
  heroImage: industrycertifications1,
  contentImage: industrycertifications2,

  intro: [
    'We help businesses obtain industry certifications required for compliance and market expansion.',
    'Certifications improve quality standards and global market credibility.'
  ],

  sectionTitle: 'Global Certification Support',

  sectionText:
    'Our certification services include ISO standards, HACCP, GMP, IATF, FSSC, BRCGS, and export certifications.',

  highlights: [
    'ISO 9001',
    'HACCP',
    'GMP',
    'Export Certifications'
  ],

  imageText: [
    'Industry certifications improve trust, quality assurance, and business competitiveness.',
    'We support documentation, audits, implementation, and certification processes.'
  ],

  closing:
    'Achieving the right certifications helps businesses scale globally and build stronger customer trust.'
}

// Main Object
export const serviceDetailsData = {
  [businessGrowthDetails.slug]: businessGrowthDetails,
  // [growthStrategyDetails.slug]: growthStrategyDetails,
  [financeTaxationDetails.slug]: financeTaxationDetails,
  [complianceDetails.slug]: complianceDetails,
  [ipoAdvisoryDetails.slug]: ipoAdvisoryDetails,
  // [industriesServedDetails.slug]: industriesServedDetails,
  // [certificationsDetails.slug]: certificationsDetails,
}

// Links
export const allServiceLinks = [
  { title: businessGrowthDetails.title, slug: businessGrowthDetails.slug },
  // { title: growthStrategyDetails.title, slug: growthStrategyDetails.slug },
  { title: financeTaxationDetails.title, slug: financeTaxationDetails.slug },
  { title: complianceDetails.title, slug: complianceDetails.slug },
  { title: ipoAdvisoryDetails.title, slug: ipoAdvisoryDetails.slug },
  // { title: industriesServedDetails.title, slug: industriesServedDetails.slug },
  // { title: certificationsDetails.title, slug: certificationsDetails.slug },
]

export const serviceHelpInfo = {
  title: 'How can we help?',
  subtitle: 'Contact our experts for business consulting and advisory support.',
  contacts: [
    { type: 'Phone', value: '+91 7708505529', href: 'tel:+917708505529' },
    { type: 'Email', value: 'mentaguide6@gmail.com', href: 'mailto:mentaguide6@gmail.com' },
    { type: 'Office', value: 'Tiruppur, India', href: '' }
  ]
}