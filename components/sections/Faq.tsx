"use client"
import React from "react"
import { useState } from "react"
import { faqData } from "../data/faqData";
import { motion } from "framer-motion"


const Faq = () => {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggle = (key: string) => {
        setOpenIndex(openIndex === key ? null : key)
    }

    return (
        <>
            <section className='w-full  bg-[#6C7852]'>
                <div className="max-w-2xl mx-auto px-4 py-12 lg:py-28">

                    <motion.h2 initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.5,
                            ease: [0.22, 1, 0.36, 1],
                        }} className='uppercase text-center text-white font-sweetsans font-medium text-[28px] md:text-[46px] lg:text-[46px] mb-[25px]'>
                        FAQ
                    </motion.h2>
            
            <div className="max-h-[580px] lg:max-h-none overflow-y-auto lg:overflow-visible">
                
                {/* RENDER FAQ */}
                    {faqData.map((section, sIndex) => (
                        <div key={sIndex} className="mb-10">

                        {/* JUDUL FAQ */}
                            <motion.h3 initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.2,
                                }} className="text-center text-white font-sweetsans font-medium text-[14px] md:text-[22px] lg:text-[24px] uppercase">
                                {section.judul}
                            </motion.h3>

                            <motion.div initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.3,
                                }} className="border-t border-white mt-4">

                                {section.items.map((item, iIndex) => {
                                    const key = `${sIndex}-${iIndex}`;
                                    const isOpen = openIndex === key;

                                    return (
                                        <motion.div initial={{ opacity: 0, y: 80 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1.5,
                                                ease: [0.22, 1, 0.36, 1],
                                                delay: 0.4,
                                            }} key={key} className="border-white border-b-[1.5px]">

                                            <button
                                                onClick={() => toggle(key)}
                                                className="w-full flex justify-between items-center py-4 text-left text-white"
                                            >
                                                <span className="text-[12px] md:text-[18px] lg:text-[18px] text-white font-sweetsans">
                                                    {item.pertanyaan}
                                                </span>

                                                <span className="text-xl">
                                                    {isOpen ? "−" : "+"}
                                                </span>
                                            </button>

                                            {isOpen && (
                                                <p className="text-[12px] md:text-[17px] lg:text-[17px] font-sweetsans font-light text-white pb-3">
                                                    {item.jawaban}
                                                </p>
                                            )}

                                        </motion.div>
                                    );
                                })}

                            </motion.div>
                        </div>
                    ))}

                </div>

            </div>
            </section>

            <div className="border-b border-[#454F23]/15 border-[1px]" />
        </>

    )
}

export default Faq 