"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const OrderOfEvents = () => {
    return (
        <section className='w-full min-h-screen grid grid-cols-1 lg:grid-cols-2'>

            {/* LEFT */}
            <div className="relative w-full h-[80vh] lg:h-full flex items-center justify-center">

                <Image
                    src="/images/orderofevents/Gedung.png"
                    alt="Gedung"
                    fill
                    className="object-cover object-[50%_70%]"
                    priority
                />

                <div className="absolute inset-0 bg-black/40" />

                <motion.h2
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="relative z-10 font-sweetsans text-white text-[28px] md:text-[50px] lg:text-[46px] text-center font-medium "
                >
                    ORDER OF<span className="block">EVENTS</span>
                </motion.h2>

            </div>

            {/* RIGHT */}
            <div className="bg-white flex flex-col items-center justify-center gap-[50px] py-[75px] md:py-[85px] lg:py-[0px]">

                {/* ITEM 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.2,
                    }}
                    className="text-[#202F26] text-center leading-none"
                >
                    <h3 className="font-sweetsans font-bold text-[28px]  md:text-[45px] lg:text-[45px] mb-[20px]">09.00 WIB</h3>
                    <h4 className="font-sweetsans font-semibold text-[13px] md:text-[24px] lg:text-[24px] mb-[17px]">CEREMONY</h4>
                    <p className="font-sweetsans font-normal text-[12px] md:text-[16px] lg:text-[16px] text-[#202F26]">The Sacrament. The vows</p>
                </motion.div>

                {/* ITEM 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.4,
                    }}
                    className="text-[#202F26] text-center leading-none"
                >
                    <h3 className="font-sweetsans font-bold text-[28px]  md:text-[45px] lg:text-[45px] mb-[20px]">12.00 WIB</h3>
                    <h4 className="font-sweetsans font-semibold text-[13px] md:text-[24px] lg:text-[24px] mb-[17px]">TEA PAI</h4>
                    <p className="font-sweetsans font-normal text-[12px] md:text-[16px] lg:text-[16px] text-[#202F26]">The tradition. The honor.</p>
                </motion.div>

                {/* ITEM 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.6,
                    }}
                    className="text-[#202F26] text-center leading-none"
                >
                    <h3 className="font-sweetsans font-bold text-[28px]  md:text-[45px] lg:text-[45px] mb-[20px]">12.00 WIB</h3>
                    <h4 className="font-sweetsans font-semibold text-[13px] md:text-[24px] lg:text-[24px] mb-[5px]">COCKTAIL HOUR</h4>
                    <p className="font-sweetsans text-[9px] md:text-[14px] lg:text-[14px] font-light italic text-[#202F26]">Followed by the Reception</p>
                </motion.div>

                <motion.p 
                initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.8,
                    }}
                  className="font-sweetsans  text-[12px] md:text-[18px] lg:text-[18px] text-[#202F26] -mt-8">The celebration. The joy.</motion.p>

            </div>

        </section>
    )
}

export default OrderOfEvents