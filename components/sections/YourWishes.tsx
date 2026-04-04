"use client"

import { dummyPesan } from "@/components/data/wishes"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import WishesCard from "../popup/WishesCard"
import type { Wish } from "@/components/data/wishes"



const YourWishes = () => {
    const [nama, setNama] = useState("")
    const [pesan, setPesan] = useState("")
    const handleSubmit = () => {
        if (!nama || !pesan) {
            alert("Please fill in all fields")
            return;
        }

        console.log({ nama, pesan })

        setShowPopup(true)

        setNama("")
        setPesan("")
    }
    const [showPopup, setShowPopup] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState<Wish | null>(null)

    return (
        <>
            <section className='w-full min-h-screen bg-[#6C7852]'>
                <div className="max-w-2xl mx-auto px-8 md:px-4 lg:px-4 py-32">
                    <div className="flex flex-col items-center">
                        <motion.h2 initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.2,
                            }} className='uppercase font-sweetsans font-medium text-[30px] md:text-[46px] lg:text-[46px] tracking-[4px] text-white mb-10 md:mb-6'>
                            Your Wishes
                        </motion.h2>

                        <motion.div initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.2,
                            }} className='w-full flex flex-col gap-4'>
                            <input type="text" value={nama} placeholder="Desy (Tester)" onChange={(e) => setNama(e.target.value)} className='w-full rounded-md text-white  font-sweetsans text-[18px] bg-transparent border-[1.5px] border-[#454F23] px-3 py-2 text-sm outline-none placeholder:text-[#BFC7A4]' />
                            <textarea value={pesan} onChange={(e) => setPesan(e.target.value)} className='w-full rounded-md  font-sweetsans bg-transparent border-[1.5px] border-[#454F23] px-3 py-2 text-sm outline-none text-white h-[120px] md:h-[310px]'></textarea>
                            <button onClick={handleSubmit} className='bg-[#454F23] py-2 text-[14px] md:text-[18px] lg:text-[18px] font-sweetsans uppercase flex items-center justify-center gap-2 rounded-md text-white'>
                                <Image
                                    src="/images/wishes/Kirim.png"
                                    alt="Kirim"
                                    width={18}
                                    height={18}
                                    className="object-cover" />
                                Send
                            </button>

                            <motion.div initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.2,
                                }} className={`w-full max-w-none mt-8 py-6 px-6 rounded-md ${showAll ? "bg-transparent" : "bg-[#454F23] max-h-[580px] overflow-y-auto"
                                    }`}>
                                {!showAll ? (
                                    // 🔹 LIST MODE (awal)
                                    dummyPesan.slice(0, 4).map((item, index) => (
                                        <div key={item.id}>
                                            <p className="text-white font-bold text-[14px] mb-2 font-sweetsans">
                                                {item.nama}
                                            </p>

                                            <p className="text-white text-[14px] font-light font-sweetsans">
                                                {item.pesan}
                                            </p>

                                            {index !== 3 && (
                                                <div className="border-t border-[#D9D9D9] my-3"></div>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    // 🔥 GRID CARD MODE (KOMENTAR)
                                    <div className="max-w-2xl relative left-1/2 -translate-x-1/2 w-screen px-10 md:px-12">
                                        <motion.div
                                            layout
                                            initial="hidden"
                                            animate="visible"
                                            variants={{
                                                hidden: {},
                                                visible: {
                                                    transition: {
                                                        staggerChildren: 0.1
                                                    }
                                                }
                                            }} className="grid grid-cols-2  gap-3">
                                            {dummyPesan.map((item) => (
                                                <motion.div key={item.id}
                                                    variants={{
                                                        hidden: { opacity: 0, y: 50, scale: 0.95 },
                                                        visible: { opacity: 1, y: 0, scale: 1 }
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        ease: [0.22, 1, 0.36, 1]
                                                    }}
                                                    onClick={() => setSelectedMessage(item)}
                                                    className="min-h-[160px] md:min-h-[170px] rounded-lg overflow-hidden shadow-md bg-[#F4F8F5] font-sweetsans flex flex-col"
                                                >
                                                    {/* CONTENT */}
                                                    <div className="p-2 text-[#202F26] relative flex-1 flex flex-col justify-center">
                                                        <p className="text-[40px] md:text-[60px] text-slate-500 opacity-30 leading-none absolute top-2 left-3">
                                                            “
                                                        </p>

                                                        <p className="text-[11px] md:text-[13px] leading-relaxed px-1 md:px-4  md:pt-7 text-slate-800 font-medium line-clamp-3 text-center">
                                                            {item.pesan}
                                                        </p>
                                                    </div>

                                                    {/* FOOTER */}
                                                    <div className="bg-[#454F23] h-[35px] flex items-center justify-center px-3">
                                                        <p className="text-white text-[12px] md:text-[14px] font-bold text-center line-clamp-1">
                                                            {item.nama}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                )}
                            </motion.div>

                            <WishesCard
  data={selectedMessage}
  onClose={() => setSelectedMessage(null)}
/>

                            <motion.button initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.2,
                                }} onClick={() => setShowAll(!showAll)} className='bg-[#454F23] py-2 text-[14px] font-sweetsans text-white uppercase mt-3 flex items-center justify-center gap-2 rounded-md'>
                                <Image
                                    src="/images/wishes/Pesan.png"
                                    alt="Kirim"
                                    width={20}
                                    height={20}
                                    className="object-cover" />
                                {showAll ? "BACK" : "See all message"}
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">

                        <div className="bg-[#F7F8F2] rounded-2xl p-8 w-[340px] text-center shadow-xl border border-[#E4E7D6]">

                            {/* Title */}
                            <h3 className="text-[22px] font-sweetsans font-semibold text-[#454F23] mb-3 tracking-wide">
                                Message Sent
                            </h3>

                            {/* Divider */}
                            <div className="w-10 h-[2px] bg-[#454F23] mx-auto mb-4 opacity-60"></div>

                            {/* Description */}
                            <p className="text-[16px] text-[#6C7852] font-sweetsans leading-relaxed mb-6">
                                Thank you for your kind wishes.
                                We truly appreciate your message.
                            </p>

                            {/* Button */}
                            <button
                                onClick={() => setShowPopup(false)}
                                className="bg-[#454F23] hover:bg-[#5A6530] transition-all text-white px-6 py-2 rounded-full text-[14px] tracking-wide"
                            >
                                Close
                            </button>

                        </div>
                    </div>
                )}
            </section>

            <div className="border-b border-[#454F23]/80 md:border-[#454F23]/85 border-[1px]" />
        </>
    )
}

export default YourWishes