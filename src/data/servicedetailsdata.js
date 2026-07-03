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
    'MentaGuide empowers businesses with strategic insights, operational excellence, and growth-focused solutions to achieve sustainable success.',
    'We help organizations build scalable business models, improve profitability, and create long-term business value.'
  ],

  sectionTitle: 'Drive Sustainable Business Growth',

  sectionText:
    'Our consultancy services focus on business transformation, operational efficiency, corporate restructuring, mergers, acquisitions, and risk management solutions.',

  highlights: [
    'Business Strategy',
    'Growth Planning',
    'Risk Management',
    'Mergers & Acquisitions'
  ],

  imageText: [
    'We support businesses in identifying growth opportunities and implementing strategies for sustainable success.',
    'Our solutions help organizations improve operational performance and long-term scalability.'
  ],

  closing:
    'Business growth requires strategic planning, operational excellence, and expert guidance to achieve sustainable success.'
}

// 2. Finance & Taxation
export const financeTaxationDetails = {
  slug: 'finance-taxation-corporate-affairs',
  title: 'Finance, Taxation & Corporate Affairs',
  heroImage: finance1,
  contentImage: finance2,

  intro: [
    'MentaGuide provides complete financial, taxation, legal, and corporate compliance services for businesses.',
    'We help companies maintain regulatory excellence while strengthening governance and financial management.'
  ],

  sectionTitle: 'Complete Financial & Compliance Solutions',

  sectionText:
    'We handle accounting, bookkeeping, GST registration, MCA filings, audits, company incorporation, and corporate compliance management.',

  highlights: [
    'Accounting',
    'GST Filing',
    'Company Incorporation',
    'Corporate Compliance'
  ],

  imageText: [
    'Accurate financial management is essential for business growth and regulatory compliance.',
    'We provide end-to-end support for taxation and legal compliance requirements.'
  ],

  closing:
    'Strong financial systems and compliance frameworks are essential for long-term business stability.'
}

// 3. Compliance & Certification
export const complianceDetails = {
  slug: 'compliance-certification-sustainability',
  title: 'Compliance, Certification & Sustainability',
  heroImage: compliance1,
  contentImage: compliance2,

  intro: [
    'Helping organizations meet statutory, industry, and global compliance standards.',
    'We improve business credibility through certification and sustainability advisory solutions.'
  ],

  sectionTitle: 'Build Trust Through Compliance',

  sectionText:
    'We assist businesses with ISO certification, trademark registration, ESG consulting, export certifications, and regulatory compliance.',

  highlights: [
    'ISO Certification',
    'Trademark Registration',
    'ESG Consulting',
    'Regulatory Compliance'
  ],

  imageText: [
    'Compliance builds customer trust and improves long-term market access.',
    'We help organizations achieve global certification standards.'
  ],

  closing:
    'Regulatory compliance and certifications strengthen brand value and business credibility.'
}

// 4. IPO Advisory
export const ipoAdvisoryDetails = {
  slug: 'ipo-advisory',
  title: 'IPO Advisory (SME & Mainboard)',
  heroImage: ipo1,
  contentImage: ipo2,

  intro: [
    'Complete IPO advisory services from private company to listed company.',
    'We guide businesses through IPO planning, documentation, compliance, and execution support.'
  ],

  sectionTitle: 'Complete IPO Listing Support',

  sectionText:
    'Our IPO services include readiness assessment, SEBI coordination, due diligence, valuation support, and listing execution.',

  highlights: [
    'IPO Readiness',
    'SEBI Compliance',
    'Due Diligence',
    'Listing Support'
  ],

  imageText: [
    'IPO preparation requires strong compliance, documentation, and governance systems.',
    'We coordinate with professional advisors for seamless IPO execution.'
  ],

  closing:
    'Our IPO advisory services help businesses successfully transition from private to listed companies.'
}

// 5. Industries Served
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

// 6. Industry Certifications
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
  [financeTaxationDetails.slug]: financeTaxationDetails,
  [complianceDetails.slug]: complianceDetails,
  [ipoAdvisoryDetails.slug]: ipoAdvisoryDetails,
  [industriesServedDetails.slug]: industriesServedDetails,
  [certificationsDetails.slug]: certificationsDetails,
}

// Links
export const allServiceLinks = [
  { title: businessGrowthDetails.title, slug: businessGrowthDetails.slug },
  { title: financeTaxationDetails.title, slug: financeTaxationDetails.slug },
  { title: complianceDetails.title, slug: complianceDetails.slug },
  { title: ipoAdvisoryDetails.title, slug: ipoAdvisoryDetails.slug },
  { title: industriesServedDetails.title, slug: industriesServedDetails.slug },
  { title: certificationsDetails.title, slug: certificationsDetails.slug },
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