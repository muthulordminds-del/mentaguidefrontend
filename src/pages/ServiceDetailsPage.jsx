import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import ServiceDetailsBanner from '../components/ServiceDetailsComponents/ServiceDetailsBanner'
import ServiceDetailsContent from '../components/ServiceDetailsComponents/ServiceDetailsContent'
import { serviceDetailsData } from '../data/servicedetailsdata'

const ServiceDetailsPage = () => {
  const { slug } = useParams()
  const details = serviceDetailsData[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!details) {
    return <Navigate to="/service" replace />
  }

  return (
    <div>
      <ServiceDetailsBanner
        title={details.title}
        subtitle="Delivering strategic solutions that drive growth, compliance, and long-term business success."
      />
      <ServiceDetailsContent details={details} />
    </div>
  )
}

export default ServiceDetailsPage
