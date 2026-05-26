import React from 'react'
import { ourmissionbg, ourmission } from '../../assets/images'
import { motion } from 'framer-motion'

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const OurMission = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            className="relative bg-cover bg-center bg-no-repeat py-20 px-6 text-left"
            style={{ backgroundImage: `url(${ourmissionbg})` }}
        >
            <div className="absolute inset-0"></div>
            <div className="relative max-w-7xl mx-auto">
                <motion.div variants={fadeInUp} className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase inline-block relative pb-4 font-cormorant tracking-widest text-[#1a1a1a]">
                        Our Mission <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-[3px] bg-[#e31818] rounded-full"></span>
                    </h2>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <p className="mt-6 text-xl md:text-2xl font-bold font-gilroy text-[#4a4a4a] leading-relaxed tracking-tight max-w-4xl">
                        To empower businesses with practical solutions, expert guidance, and strategic support that drive efficiency, resilience, and sustainable growth.

                    </p>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default OurMission