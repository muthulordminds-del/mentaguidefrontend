import React from 'react'
import ContactHeroSection from '../components/contactpage/contactherosection'
import ContactDetailsSection from '../components/contactpage/ContactDetailsSection'
import MapSection from '../components/contactpage/MapSection'

const Contactpage = () => {
  return (
    <div>
        <ContactHeroSection />
        <ContactDetailsSection />
        <MapSection />
    </div>
  )
}

export default Contactpage