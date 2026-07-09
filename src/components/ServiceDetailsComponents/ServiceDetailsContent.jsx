import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck, FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'
import {
  serviceDetailsData,
  serviceHelpInfo,
  allServiceLinks,
  getServicePath
} from '../../data/servicedetailsdata'

const helpIcons = [FiPhoneCall, FiMail, FiMapPin]

const ServiceDetailsContent = ({ details }) => {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 font-gilroy">
      <div className="mx-auto grid w-full max-w-[1180px] gap-8 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-start">
        <article className="min-w-0">
          <img
            src={details.heroImage}
            alt={details.title}
            className="h-[230px] w-full rounded-[14px] object-cover sm:h-[320px] lg:h-[420px]"
          />

          <h2 className="mt-8 font-gilroy text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-[#071f1f]">
            {details.title}
          </h2>

          <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#6f767d]">
            {details.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-10 font-gilroy text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight text-[#071f1f]">
            {details.sectionTitle}
          </h3>

          {/* New Service Layout */}
          {details.services ? (
            details.slug === 'ipo-advisory' ? (
              <div className="mt-8">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {details.services.map((service, index) => {
                    const cleanTitle = service.title.replace(/^\d+\.\s*/, '')
                    const shortDesc = service.description.split('. ')[0].trim().replace(/\.$/, '') + '.'

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-[12px] border border-[#eceeee] p-4"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2f5355] text-xs font-bold text-white">
                          {index + 1}
                        </span>

                        <div className="min-w-0">
                          <h4 className="text-[15px] font-bold leading-5 text-[#071f1f]">
                            {cleanTitle}
                          </h4>
                          <p className="mt-1 text-[13px] leading-5 text-[#6f767d]">
                            {shortDesc}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-8">
                  <img
                    src={details.contentImage}
                    alt={details.title}
                    className="w-full rounded-[14px] object-cover"
                  />
                </div>

                <p className="mt-8 text-[16px] leading-8 text-[#6f767d]">
                  {details.closing}
                </p>
              </div>
            ) : (
              <div className="mt-8 space-y-10">
                {details.services.map((service, index) => (
                  <div key={index}>
                    <h4 className="text-2xl font-bold text-[#071f1f] mb-4">
                      {service.title}
                    </h4>

                    <p className="text-[16px] leading-8 text-[#6f767d]">
                      {service.description}
                    </p>
                  </div>
                ))}

                <div className="mt-10">
                  <img
                    src={details.contentImage}
                    alt={details.title}
                    className="w-full rounded-[14px] object-cover"
                  />
                </div>

                <p className="text-[16px] leading-8 text-[#6f767d]">
                  {details.closing}
                </p>
              </div>
            )
          ) : (
            <>
              {/* Old Layout */}
              <p className="mt-5 text-[15px] leading-7 text-[#6f767d]">
                {details.sectionText}
              </p>

              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {details.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm font-medium text-[#6f767d]"
                  >
                    <FiCheck className="mt-1 shrink-0 text-[#be976b]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] md:items-start">
                <img
                  src={details.contentImage}
                  alt={details.title}
                  className="h-[220px] w-full rounded-[14px] object-cover sm:h-[260px] md:h-full"
                />

                <div className="space-y-4 text-[15px] leading-7 text-[#6f767d]">
                  {details.imageText.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <p className="mt-8 text-[15px] leading-7 text-[#6f767d]">
                {details.closing}
              </p>
            </>
          )}
        </article>

        <aside className="space-y-8 lg:sticky lg:top-28">
          <div className="rounded-[16px] bg-[#f4f4f4] p-6 sm:p-7">
            <h3 className="font-gilroy text-xl font-bold text-[#071f1f]">
              All Services
            </h3>

            <nav className="mt-5 space-y-3" aria-label="All services">
              {allServiceLinks.map((service) => (
                <Link
                  key={service.title}
                  to={service.slug ? getServicePath(service.slug) : service.path}
                  className="flex min-h-11 items-center justify-between gap-4 rounded-full bg-white px-5 text-sm font-medium text-[#6f767d] transition duration-300 hover:bg-[#2f5355] hover:text-white"
                >
                  <span>{service.title}</span>
                  <FiArrowRight className="shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div> 

          <div className="rounded-[16px] bg-[#2f5355] p-6 text-white sm:p-7">
            <h3 className="font-gilroy text-xl font-semibold">{serviceHelpInfo.title}</h3>
            <p className="mt-1 text-sm font-medium leading-6 opacity-90">
              {serviceHelpInfo.subtitle}
            </p>

            <div className="mt-6 space-y-5">
              {serviceHelpInfo.contacts.map((contact, index) => {
                const Icon = helpIcons[index]

                return (
                  <div key={contact.type} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40">
                      <Icon className="text-lg" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium opacity-80">{contact.type}</p>
                      {contact.href ? (
                        <a href={contact.href} className="mt-1 block text-sm font-medium leading-5 hover:text-[#be976b] transition-colors">{contact.value}</a>
                      ) : (
                        <p className="mt-1 text-sm font-medium leading-5">{contact.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default ServiceDetailsContent