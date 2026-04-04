"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

const Rsvp = () => {
    const waHadir = () => {
        const nomorHp = "6283102851438" // GANTI nomor lo (pakai 62, tanpa 0 depan)

        const pesan = `Hello, I will be attending your event with ${guest} people. Thank you.`

        const url = `https://wa.me/${nomorHp}?text=${encodeURIComponent(pesan)}`

        window.open(url, "_blank")
    }

    const watTidakHadir = () => {
        const nomorHp = "6283102851438" // GANTI nomor lo (pakai 62, tanpa 0 depan)

        const pesan = `Sorry, I can't attend your event.`

        const url = `https://wa.me/${nomorHp}?text=${encodeURIComponent(pesan)}`

        window.open(url, "_blank")
    }

    const waHelpdesk = () => {
        const nomorHp = "6283102851438" // GANTI nomor lo (pakai 62, tanpa 0 depan)

        const pesan = `Hello, I need help with RSVPing my invitations. Please help me. Thank you.`

        const url = `https://wa.me/${nomorHp}?text=${encodeURIComponent(pesan)}`

        window.open(url, "_blank")
    }

    const [status, setStatus] = useState<"attend" | "not">("attend")
    const [guest, setGuest] = useState(1)


    return (
        <>
            <section id="rsvp" className='w-full bg-[#6C7852] '>
                <div className="max-w-7xl mx-auto px-4 py-32">
                    <div className="flex flex-col items-center justify-center leading-none">
                        <motion.h2 initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                            }} className='uppercase font-sweetsans font-medium text-[34px] md:text-[46px] lg:text-[46px] text-white mb-[36px]'>
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
                            <p className='font-sweetsans font-light text-[16px] md:text-[22px] lg:text-[18px] text-white mb-[23px]'>Dear Mr./ Mrs./ Ms.</p>
                            <p className='font-sweetsans font-normal text-center  text-[16px] md:text-[22px] lg:text-[18px] text-white mb-[40px]'>.............</p>
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
                            className='font-sweetsans font-light text-center text-[16px] md:text-[22px] lg:text-[18px] text-white leading-6 mb-[50px]'
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
                            }} className='flex items-center gap-4 mb-[40px]'>
                            <button
                                onClick={() => setStatus("attend")}
                                className={`uppercase font-sweetsans font-normal text-[14px] md:text-[22px] lg:text-[18px] py-2.5 px-8 rounded-md ${status === "attend"
                                    ? "bg-[#CB4F35] text-white"
                                    : "border border-[#CB4F35] text-white"
                                    }`}
                            >
                                Attend
                            </button>

                            <button
                                onClick={() => setStatus("not")}
                                className={`uppercase font-sweetsans font-normal text-[14px] md:text-[22px] lg:text-[18px] py-2.5 px-8 rounded-md ${status === "not"
                                    ? "bg-[#CB4F35] text-white"
                                    : "border border-[#CB4F35] text-white"
                                    }`}
                            >
                                Not Attend
                            </button>
                        </motion.div>

                        <motion.div  initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.4,
                            }}>
                        {status === "not" && (
                            <div>
                                <p className='uppercase text-center font-sweetsans font-light  text-[16px] md:text-[22px] lg:text-[18px] text-white mb-[40px]'>
                                    Are You Sure?
                                </p>

                                <button onClick={watTidakHadir} className='uppercase font-sweetsans font-normal  text-[14px] md:text-[22px] lg:text-[18px] text-white py-2.5 px-16 bg-[#CB4F35] mb-[40px] rounded-md'>
                                    Confirm Not Attend
                                </button>
                            </div>
                        )}


                        {status === "attend" && (
                            <div>
                                <div className="w-[320px] md:w-[350px] max-w-[500px] mb-[40px]">
                                    <p className="uppercase text-white font-sweetsans font-light text-[12px] md:text-[19px] lg:text-[15px] mb-3">how many people came?</p>

                                    <select
                                        value={guest}
                                        onChange={(e) => setGuest(Number(e.target.value))}
                                        className="w-full bg-[#F5F5F5] text-black text-[14px] md:text-[19px] lg:text-[15px]  py-3 px-4 rounded-md"
                                    >
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <option key={num} value={num}>
                                                {num}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button onClick={waHadir} className='uppercase font-sweetsans font-normal text-[14px] md:text-[22px] lg:text-[18px] text-white py-2.5 px-[83px] md:px-[90px] bg-[#CB4F35] mb-[40px] rounded-md'>
                                    Confirm Attend
                                </button>
                            </div>
                        )}
                        {/* <p className='uppercase font-sweetsans font-light text-[17px] text-white mb-[40px]'>Are You Sure?</p>
                    <button className='uppercase font-sweetsans font-normal test-[18px] text-white py-2.5 px-16 bg-[#CB4F35] mb-[40px]'>Confirm Not Attend</button> */}
                        
                            <p className='font-sweetsans  text-center font-light text-[16px] md:text-[22px] lg:text-[18px] text-white mb-[40px]'>
                                Having trouble with RSVP?
                            </p>

                            <button
                                onClick={waHelpdesk}
                                className='uppercase font-sweetsans font-normal text-[14px] md:text-[22px] lg:text-[18px] text-white py-2.5 px-16 bg-[#CB4F35] rounded-md'
                            >
                                Chat helpdesk team
                            </button>
                            </motion.div>
                        </div>
                    </div>
            </section>

            <div className="border-b border-[#454F23]/80 md:border-[#454F23]/85 border-[1px]" />
        </>

    )
}

export default Rsvp