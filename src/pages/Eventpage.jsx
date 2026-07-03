import React from 'react'
import Herosection from '../components/eventpage/Herosection'
import InnovationSummitSection from '../components/eventpage/InnovationSummitSection'
import FeaturedSpeakersSection from '../components/eventpage/FeaturedSpeakersSection'
import ScheduleSection from '../components/eventpage/ScheduleSection'
import EarlyBirdSection from '../components/eventpage/EarlyBirdSection'
import EventLogosSection from '../components/eventpage/EventLogosSection'
import TestimonialsSection from '../components/eventpage/TestimonialsSection'
import CallToActionSection from '../components/eventpage/CallToActionSection'
import EventImagesSection from '../components/eventpage/EventImagesSection'

const Eventpage = () => {
  return (
    <div>
        <Herosection/>
        <InnovationSummitSection/>
        <FeaturedSpeakersSection/>
        <ScheduleSection/>
        <EarlyBirdSection/>
        <EventLogosSection/>
        <CallToActionSection/>
        <TestimonialsSection/>
        <EventImagesSection/>
    </div>
  )
}

export default Eventpage
