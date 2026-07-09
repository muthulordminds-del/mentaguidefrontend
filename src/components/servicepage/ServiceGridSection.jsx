import React from 'react'
import { Link } from 'react-router-dom'
import { service1 , service2 , service3 ,service4 , service5, service6 , service7 } from '../../assets/images'

const blogPosts = [
  {
    id: 1, 
    image: service1,
    category: "BUSINESS CONSULTANCY",
    title: "Business Strategy & Transformation for Sustainable Growth and Long-Term Success",
    date: "July 2, 2026",
    author: "Admin",
    slug: "business-growth-consultancy"
  },
  {
    id: 2,
    image: service2,
    category: "GROWTH STRATEGY",
    title: "Growth & Expansion Strategy to Identify Opportunities and Scale Your Business",
    date: "July 2, 2026",
    author: "Admin",
    slug: "growth-strategy"
  },
  {
    id: 3,
    image: service3,
    category: "FINANCE & TAXATION",
    title: "Accounting, GST Registration, Financial Planning and Corporate Compliance Services",
    date: "July 2, 2026",
    author: "Admin",
    slug: "finance-taxation-corporate-affairs"
  },
  {
    id: 6,
    image: service6,
    category: "RISK MANAGEMENT",
    title: "Risk & Crisis Management Solutions to Ensure Business Continuity and Resilience",
    date: "July 2, 2026",
    author: "Admin",
    slug: "industry-certifications"
  },
  {
    id: 7,
    image: service7,
    category: "SUPPLY CHAIN",
    title: "Supply Chain Management Services to Improve Efficiency and Reduce Operational Costs",
    date: "July 2, 2026",
    author: "Admin",
    slug: "industries-served"
  },
];

const ServiceGridSection = () => {
  return (
    <section className="w-full bg-[#E6F0FA]">
      <div id="service-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 font-gilroy">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {blogPosts.map((post) => (
          <Link to={`/service/${post.slug}`} key={post.id} className="flex flex-col group cursor-pointer bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 h-full overflow-hidden">
            <div className="overflow-hidden w-full">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-[250px] object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <div className="text-[#FF3333] text-sm font-semibold mb-3 tracking-wide uppercase">
                / {post.category}
              </div>
              <h3 className="text-[22px] font-bold text-gray-900 mb-6 leading-snug group-hover:text-[#FF3333] transition-colors duration-300">
                {post.title}
              </h3>
              <div className="mt-auto border-t border-gray-100 pt-5 flex items-center text-[15px] text-gray-500">
                {/* <span>{post.date}</span> */}
                {/* <span className="mx-2">/</span>
                <span>by <span className="font-bold text-gray-900">{post.author}</span></span> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ServiceGridSection;