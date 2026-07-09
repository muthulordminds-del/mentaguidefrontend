import React from "react";

const IndustriesServedSection = () => {
  const industries = [
    {
      industry: "Textile & Apparel",
      challenges:
        "Buyer and social compliance audits (SEDEX, BSCI, WRAP, Brand Requirements), ESG implementation, labor law compliance, ISO certifications, sustainability reporting, supply chain compliance, export documentation, quality management systems, productivity improvement, factory governance, environmental compliance, and customer-specific audit readiness.",
    },
    {
      industry:
        "MSME Manufacturing (Engineering, Fabrication & Industrial Manufacturing)",
      challenges:
        "Business strategy, operational efficiency, GST compliance, accounting & financial management, ISO implementation, quality management systems, production optimization, cost reduction, HR process improvement, statutory compliance, business restructuring, supply chain optimization, digital process improvement, and profitability enhancement.",
    },
    {
      industry: "Construction & Infrastructure",
      challenges:
        "Corporate compliance, project governance, contract management, labor law compliance, EHS management, ISO certifications, ESG implementation, cash flow planning, internal controls, statutory approvals, project risk management, operational process improvement, and business restructuring.",
    },
    {
      industry: "Engineering & Auto Components",
      challenges:
        "Customer and OEM audit readiness, IATF/ISO systems, supplier compliance, quality improvement, manufacturing process optimization, export compliance, operational excellence, internal audits, risk management, documentation systems, ESG implementation, and cost optimization initiatives.",
    },
    {
      industry: "Food Processing",
      challenges:
        "FSSAI compliance, HACCP implementation, ISO 22000 certification, food safety management systems, export certifications, traceability systems, quality assurance, hygiene compliance, buyer audits, supplier qualification, sustainability practices, and regulatory compliance.",
    },
    {
      industry: "Healthcare & Pharmaceuticals",
      challenges:
        "Regulatory compliance, documentation systems, quality management, internal audits, ISO certifications, GMP support, risk management, statutory compliance, corporate governance, operational improvements, ESG advisory, and business process standardization.",
    },
    {
      industry: "Chemicals",
      challenges:
        "Environmental compliance, pollution control requirements, hazardous waste management, occupational health & safety, ISO 14001 & ISO 45001 implementation, statutory approvals, ESG consulting, sustainability reporting, compliance audits, risk assessment, and regulatory documentation.",
    },
    {
      industry: "Logistics & Warehousing",
      challenges:
        "Supply chain optimization, GST compliance, warehouse process improvement, fleet compliance, operational efficiency, inventory management, labor compliance, business process improvement, ISO certifications, cost optimization, digital transformation, and risk management.",
    },
    {
      industry: "Agriculture & Food Exports",
      challenges:
        "Export documentation, APEDA and export certifications, international buyer compliance, quality assurance, traceability systems, sustainability initiatives, supply chain compliance, regulatory approvals, food safety certifications, market access support, and export readiness.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white w-full flex justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[85rem]">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#142033] font-gilroy leading-tight">
            Industries We Have Served
          </h2>
          <p className="mt-3 text-[#7cb342] font-bold text-lg sm:text-xl">
            Delivering Practical Solutions Across Diverse Industries
          </p>
          <p className="mt-5 text-[#5b6a7a] text-[0.95rem] sm:text-base leading-[1.8] font-medium">
            Over the years, MentaGuide has partnered with organizations across multiple industries, helping them overcome operational, financial, regulatory, compliance, and strategic business challenges. Our experience enables us to understand industry-specific pain points and deliver practical, result-oriented solutions that improve performance, ensure compliance, and support sustainable growth.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="bg-[#142033]">
                <th className="px-8 py-7 sm:px-10 sm:py-8 text-sm sm:text-base font-bold text-white w-[26%] font-gilroy">
                  Industry
                </th>
                <th className="px-8 py-7 sm:px-10 sm:py-8 text-sm sm:text-base font-bold text-white font-gilroy">
                  Major Business Challenges We Have Helped Solve
                </th>
              </tr>
            </thead>
            <tbody>
              {industries.map((row, index) => (
                <tr
                  key={row.industry}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#f0f2f4]"}
                >
                  <td className="align-top px-8 py-8 sm:px-10 sm:py-10 text-[0.95rem] sm:text-base font-bold text-[#142033]">
                    {row.industry}
                  </td>
                  <td className="align-top px-8 py-8 sm:px-10 sm:py-10 text-sm sm:text-[0.95rem] leading-relaxed sm:leading-8 text-[#5b6a7a] font-medium">
                    {row.challenges}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServedSection;