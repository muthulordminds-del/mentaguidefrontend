import React from 'react'
import ServiceHerosection from '../components/servicepage/ServiceHerosection'

import Managementsection from '../components/servicepage/Managementsection'
import Agriculturalsection from '../components/servicepage/Agriculturalsection'
import GlobalCommerceSection from '../components/servicepage/GlobalCommerceSection'
import SupplyChainSection from '../components/servicepage/SupplyChainSection'
import IPOMainBoardSection from '../components/servicepage/IPOMainBoardSection'
import CTASection from '../components/servicepage/CTASection'
// import ServiceGridSection from '../components/servicepage/ServiceGridSection'

const Servicepage = () => {
    return (
        <div>
            <ServiceHerosection />
            <Managementsection />
            {/* <ServiceGridSection /> */}
            {/* <Agriculturalsection /> */}
            {/* <GlobalCommerceSection /> */}
            <IPOMainBoardSection />
            <SupplyChainSection />
            <CTASection />

        </div>
    )
}

export default Servicepage