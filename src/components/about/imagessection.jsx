import React from 'react';
import { motion } from 'framer-motion';
import { ourmission } from '../../assets/images';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Imagessection = () => {
    return (
        <section className="w-full bg-white">
            <motion.div 
                initial="hidden"
                whileInView="show"
                variants={fadeInUp}
                className="w-full"
            >
                <img 
                    src={ourmission} 
                    alt="Our Mission" 
                    className="w-full h-[360px] sm:h-auto max-h-[600px] lg:max-h-[800px] object-cover" 
                />
            </motion.div>
        </section>
    );
};

export default Imagessection;
