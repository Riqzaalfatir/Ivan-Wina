"use client"
import React from "react"
import { useState } from "react"
import { faqData } from "../data/faqData";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggle = (key: string) => {
        setOpenIndex(openIndex === key ? null : key)
    }

    return (
        <>
        <section className='w-full min-h-screen bg-white'>
            <div className="max-w-2xl mx-auto px-4 py-40">

                <h2 className='uppercase text-center text-[#202F26] font-sweetsans font-medium text-[34px] md:text-[46px] lg:text-[46px] mb-[18px]'>
                    FAQ
                </h2>

                {faqData.map((section, sIndex) => (
                    <div key={sIndex} className="mb-10">

                        <h3 className="text-center text-[#202F26] font-sweetsans font-medium text-[16px] md:text-[22px] lg:text-[22px] uppercase">
                            {section.judul}
                        </h3>

                        <div className="border-t border-[#202F26] mt-4">

                            {section.items.map((item, iIndex) => {
                                const key = `${sIndex}-${iIndex}`;
                                const isOpen = openIndex === key;

                                return (
                                    <div key={key} className="border-b border-[#202F26]">

                                        <button
                                            onClick={() => toggle(key)}
                                            className="w-full flex justify-between items-center py-4 text-left text-[#202F26]"
                                        >
                                            <span className="text-[14px] md:text-[18px] lg:text-[18px] text-[#202F26] font-sweetsans">
                                                {item.pertanyaan}
                                            </span>

                                            <span className="text-xl">
                                                {isOpen ? "−" : "+"}
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <p className="text-[14px] md:text-[18px] lg:text-[18px] font-sweetsans font-light text-[#202F26] pb-3">
                                                {item.jawaban}
                                            </p>
                                        )}

                                    </div>
                                );
                            })}

                        </div>
                    </div>
                ))}

            </div>
        </section>

                <div className=" border-b border-[#454F2340]/20 border-[1.5px]" />
                </>

    )
}

export default Faq 