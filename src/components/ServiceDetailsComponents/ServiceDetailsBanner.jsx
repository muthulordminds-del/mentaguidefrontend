import React from 'react'
import { servicedetailsbanner } from '../../assets/images'

const ServiceDetailsBanner = ({
  title = 'Our Services',
  subtitle = 'We are passionate about providing the best legal solutions to our clients.',
}) => {
  return (
    <section
      className="relative isolate flex min-h-[50vh] w-full items-center justify-center overflow-hidden bg-[#071f1f] px-4 py-24 text-center sm:min-h-[100vh] sm:px-6 md:min-h-[100vh] lg:min-h-[100vh] xl:min-h-[100vh]"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 31, 30, 0.82), rgba(4, 31, 30, 0.82)), url(${servicedetailsbanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center">
        <h1 className="font-serif text-[clamp(2.5rem,8vw,5.25rem)] font-semibold leading-tight tracking-normal text-white">
          {title}
        </h1>
        <p className="mt-4 text-base font-bold leading-relaxed text-white sm:text-lg md:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export default ServiceDetailsBanner
