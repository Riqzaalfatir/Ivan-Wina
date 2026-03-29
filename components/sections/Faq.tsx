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
        <section className='w-full min-h-screen bg-[#6C7852]'>
            <div className="max-w-2xl mx-auto px-4 py-40">

                <h2 className='uppercase text-center text-white font-sweetsans font-medium text-[46px] mb-[18px]'>
                    FAQ
                </h2>

                {faqData.map((section, sIndex) => (
                    <div key={sIndex} className="mb-10">

                        <h3 className="text-center text-white font-sweetsans font-medium text-[22px] uppercase">
                            {section.judul}
                        </h3>

                        <div className="border-t border-[#454F23] mt-4">

                            {section.items.map((item, iIndex) => {
                                const key = `${sIndex}-${iIndex}`;
                                const isOpen = openIndex === key;

                                return (
                                    <div key={key} className="border-b border-[#454F23]">

                                        <button
                                            onClick={() => toggle(key)}
                                            className="w-full flex justify-between items-center py-4 text-left text-white"
                                        >
                                            <span className="text-[18px] text-white font-sweetsans">
                                                {item.pertanyaan}
                                            </span>

                                            <span className="text-xl">
                                                {isOpen ? "−" : "+"}
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <p className="text-[17px] font-sweetsans font-light text-slate-200 pb-3">
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
    )
}

export default Faq 