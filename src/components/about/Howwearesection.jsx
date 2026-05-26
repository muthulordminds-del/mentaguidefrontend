"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    howweareimg1, howweareimg2, howweareimg3, howweareimg4, howweareimg5, howweareimg6
} from "../../assets/images";


const Howwearesection = () => {
    const navigate = useNavigate();

    const desktopSections = [
        {
            type: "content",
            title: "Who We Are",

            description1:
                "We are a professional solutions-driven organization committed to helping businesses navigate complexity, resolve operational issues, and unlock opportunities for growth. Our team brings together deep industry experience and practical business insight to support organizations across sectors and markets.",
           
            backgroundImage: howweareimg6,
        },
        { type: "image", src: howweareimg1, alt: "Delicious Dish" },
        { type: "image", src: howweareimg3, alt: "Special Dish" },
        {
            type: "content-overlay",
            src: howweareimg2,
            
            description:
                "We understand that no two businesses are the same. That is why we take a customized approach to every engagement, focusing on the specific challenges, objectives, and priorities of each client. Whether the need is immediate problem-solving or long-term strategic support, MentaGuide stands beside businesses as a trusted advisor and execution partner.",
        },
        {
            type: "content-overlay",
            src: howweareimg4,
        
            description:
                "Our mission is to help organizations operate more efficiently, reduce risk, improve performance, expand globally, and prepare for future milestones such as public market readiness.",
        },
        { 
            type: "image", 
            src: howweareimg5, 
            alt: "Luxury Dish",
            objectFit: "contain",
            bgColor: "bg-black"
        },
    ];

    const mobileSections = [
        desktopSections[0],
        desktopSections[1],
        desktopSections[3],
        desktopSections[2],
        desktopSections[5],
        desktopSections[4],
    ];

    const renderSection = (item, index) => {
        const ref = useRef(null);

        if (item.type === "content") {
            return (
                <div
                    key={index}
                    className="sticky top-20 bg-white flex flex-col justify-center p-4 sm:p-6 md:p-8 h-[400px] lg:h-[500px]"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                >
                    <h2 className="text-sm sm:text-base font-gilroy font-black mb-1 sm:mb-2">
                        {item.title}
                    </h2>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-3 font-gilroy">
                        {item.subtitle}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-lg mb-2 leading-relaxed font-gilroy-light">
                        {item.description1}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base mb-4 leading-relaxed font-gilroy-light">
                        {item.description2}
                    </p>
                    <button
                        onClick={() => navigate("/menus")}
                        className="px-3 py-1.5 rounded-sm bg-button font-gilroy-light text-white text-xs sm:text-sm font-semibold shadow hover:bg-red-700 transition self-start"
                    >
                        {item.button}
                    </button>
                </div>
            );
        }

        if (item.type === "image") {
            return (
                <div
                    key={index}
                    className={`sticky top-20 ${item.bgColor || 'bg-gray-100'} flex items-center justify-center h-[350px] lg:h-[500px] overflow-hidden`}
                >
                    <img
                        src={item.src}
                        alt={item.alt}
                        className={`w-full h-full ${item.objectFit || 'object-cover'}`}
                    />
                </div>
            );
        }

        if (item.type === "content-overlay") {
            const { scrollYProgress } = useScroll({
                target: ref,
                offset: ["start end", "center start"],
            });

            const opacity = useTransform(scrollYProgress, [1, 0.9], [0.5, 1]);
            const clipPath = useTransform(
                scrollYProgress,
                [0, 0.5],
                ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
            );

            return (
                <div
                    key={index}
                    ref={ref}
                    className="sticky top-20 relative bg-gray-100 h-[350px] lg:h-[500px] w-full overflow-hidden"
                >
                    <img
                        src={item.src}
                        alt={item.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <motion.div
                        style={{ opacity, clipPath }}
                        className="absolute inset-0 bg-black/80 flex flex-col justify-center px-4 sm:px-6 md:px-8 text-white"
                    >
                        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 font-gilroy">
                            {item.title}
                        </h2>
                        <p className="text-sm sm:text-sm md:text-base leading-relaxed font-gilroy-light font-light">
                            {item.description}
                        </p>
                    </motion.div>
                </div>
            );
        }

        return null;
    };

    return (
        <>

            <h2 className="text-3xl md:text-3xl font-black uppercase text-center relative pb-2 font-gilroy mt-10">
                Who We Are
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-button rounded-full"></span>
            </h2>


            <div className="grid grid-cols-1 gap-2 justify-center mt-6 lg:hidden">
                {mobileSections.map((item, index) => renderSection(item, index))}
            </div>

            <div className="hidden lg:grid bg-white lg:grid-cols-2 gap-2 justify-center mt-6">
                {desktopSections.map((item, index) => renderSection(item, index))}
            </div>
        </>
    );
};

export default Howwearesection;
