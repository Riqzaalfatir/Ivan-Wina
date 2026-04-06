"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'

const Rsvp = () => {
    const waHadir = () => {
        const nomorHp = "6283102851438"

        const pesan = `Hello, I will be attending your event with ${guest} people. Thank you.`

        const url = `https://wa.me/${nomorHp}?text=${encodeURIComponent(pesan)}`

        window.open(url, "_blank")
    }

    const waTidakHadir = () => {
        const nomorHp = "6283102851438"

        const pesan = `Sorry, I can't attend your event.`

        const url = `https://wa.me/${nomorHp}?text=${encodeURIComponent(pesan)}`

        window.open(url, "_blank")
    }

    const waHelpdesk = () => {
        const nomorHp = "6283102851438"

        const pesan = `Hello, I need help with RSVPing my invitations. Please help me. Thank you.`

        const url = `https://wa.me/${nomorHp}?text=${encodeURIComponent(pesan)}`

        window.open(url, "_blank")
    }

    const [status, setStatus] = useState<"attend" | "not">("attend")
    const [guest, setGuest] = useState(1)


    return (
        <>
            <section id="rsvp" className='w-full bg-[#6C7852] '>

                <div className="w-full max-w-[270px]  md:max-w-[370px]  mx-auto px-4  py-28">

                    <div className="flex flex-col items-center justify-center leading-none text-center w-full">

                        <motion.h2 initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                            }} className='uppercase font-sweetsans font-medium text-[28px] md:text-[46px]  text-white mb-[36px]'>
                            RSVP
                        </motion.h2>

                        <motion.div initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.1,
                            }}>
                            <p className='font-sweetsans font-light text-[12px] md:text-[22px] lg:text-[18px] text-white mb-[23px]'>Dear Mr./ Mrs./ Ms.</p>
                            <p className='font-sweetsans font-normal text-center  text-[12px] md:text-[22px] lg:text-[18px] text-white mb-[40px]'>.............</p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.2,
                            }}
                            className='font-sweetsans font-light text-center text-[12px] md:text-[22px] lg:text-[18px] text-white leading-6 mb-[50px]'
                        >
                            Kindly confirm your attendance before
                            <span className='block font-bold'>07 February 2026</span>
                        </motion.p>


                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.3,
                            }}
                            className='flex w-full items-center gap-4 mb-[40px]'
                        >
                            <button
                                onClick={() => setStatus("attend")}
                                className={`flex-1 whitespace-nowrap uppercase font-figtree font-normal text-[12px] md:text-[22px] lg:text-[18px] py-2 ${status === "attend"
                                        ? "bg-[#CB4F35] text-white"
                                        : "border border-[#CB4F35] text-white"
                                    }`}
                            >
                                Attend
                            </button>

                            <button
                                onClick={() => setStatus("not")}
                                className={`flex-1 whitespace-nowrap uppercase font-figtree font-normal text-[12px] md:text-[22px] lg:text-[18px] py-2 ${status === "not"
                                        ? "bg-[#CB4F35] text-white"
                                        : "border border-[#CB4F35] text-white"
                                    }`}
                            >
                                Not Attend
                            </button>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.4,
                            }} className='w-full'>

                            {/* STATUS NOT ATTEND */}
                            {status === "not" && (
                                <div className='w-full'>
                                    <p className='uppercase text-center font-sweetsans font-light  text-[12px] md:text-[22px] lg:text-[18px] text-white mb-[30px]'>
                                        Are You Sure?
                                    </p>

                            <button
                                onClick={waTidakHadir}
                                className='flex w-full items-center justify-center gap-3 uppercase font-sweetsans  text-[12px] md:text-[22px] lg:text-[18px] text-white py-1 lg:py-1.5 mb-8 bg-[#CB4F35]'                            >
                                <Image
                                    src="/images/rsvp/lonceng.png"
                                    alt="wa"
                                    width={25}
                                    height={25}
                                    className="w-[20px] md:w-[20px] object-contain"
                                />

                                Confirm not attend
                            </button>
                                </div>
                            )}

                            {/* STATUS ATTEND  */}
                            {status === "attend" && (
                                <div className='w-full'>
                                    <div className="w-full mb-[40px] flex flex-col items-center">
                                        <p className="uppercase text-white text-start font-sweetsans font-light text-[12px] md:text-[19px] lg:text-[15px] mb-3">how many people came?</p>

                                        <select
                                            value={guest}
                                            onChange={(e) => setGuest(Number(e.target.value))}
                                            className="w-full md:w-full bg-[#F5F5F5] text-black text-[12px] md:text-[19px] lg:text-[15px]  py-3 px-4 "
                                        >
                                            {[1, 2, 3, 4, 5].map((num) => (
                                                <option key={num} value={num}>
                                                    {num}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                     <button
                                onClick={waHadir}
                                className='flex w-full items-center justify-center gap-3 uppercase font-sweetsans  text-[12px] md:text-[22px] lg:text-[18px] text-white py-1 lg:py-1.5 mb-8 bg-[#CB4F35]'                            >
                                <Image
                                    src="/images/rsvp/lonceng.png"
                                    alt="wa"
                                    width={25}
                                    height={25}
                                    className="w-[20px] md:w-[20px] object-contain"
                                />

                                Confirm attend
                            </button>
                                </div>
                            )}


                            <p className='font-sweetsans  text-center font-light text-[11px] md:text-[22px] lg:text-[18px] text-white mb-[20px]'>
                                Having trouble with RSVP?
                            </p>

                            <button
                                onClick={waHelpdesk}
                                className='flex w-full items-center justify-center gap-3 uppercase font-figtree font-semibold text-[12px] md:text-[22px] lg:text-[18px] text-white py-2 lg:py-2 bg-[#CB4F35]'                            >
                                {/* <Image
                                    src="/images/rsvp/lonceng.png"
                                    alt="wa"
                                    width={25}
                                    height={25}
                                    className="w-[20px] md:w-[20px] object-contain"
                                /> */}

                                Chat helpdesk team
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="border-b border-[#454F23]/80 md:border-[#454F23]/80 border-[1px]" />
        </>

    )
}

export default Rsvp