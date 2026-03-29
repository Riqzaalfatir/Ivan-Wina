"use client"

import { dummyPesan } from "@/components/data/wishes"
import { useState } from "react"
import Image from "next/image"


const YourWishes = () => {
    const [nama, setNama] = useState("")
    const [pesan, setPesan] = useState("")
    const handleSubmit = () => {
        if (!nama || !pesan) {
            alert("Please fill in all fields")
            return;
        }

        console.log({nama, pesan})

        setShowPopup(true)

        setNama("")
        setPesan("")
    }
    const [showPopup, setShowPopup] = useState(false);
    const [showAll, setShowAll] = useState(false);

    return (
        <section className='w-full min-h-screen bg-[#6C7852]'>
            <div className="max-w-2xl mx-auto px-4 py-32">
                <div className="flex flex-col items-center">
                    <h2 className='uppercase font-sweetsans font-medium text-[46px] tracking-[4px] text-white mb-6'>
                        Your Wishes
                    </h2>

                    <div className='w-full flex flex-col gap-4'>
                        <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder='Desy (Tester)' className='w-full text-white  font-sweetsans text-[18px] bg-transparent border-[2px] border-[#454F23] px-3 py-2 text-sm outline-none placeholder:text-[#BFC7A4]' />
                        <textarea rows={15} value={pesan} onChange={(e) => setPesan(e.target.value)} className='w-full text-white font-sweetsans bg-transparent border-[2px] border-[#454F23] px-3 py-2 text-sm outline-none placeholder:text-[#BFC7A4]'></textarea>
                        <button onClick={handleSubmit} className='bg-[#454F23] py-2 text-[18px] font-sweetsans text-white uppercase flex items-center justify-center gap-2'>
                            <Image
                               src="/images/wishes/Kirim.png"
                               alt="Kirim"
                               width={20}
                               height={20}
                               className="object-cover" />
                            Send
                        </button>

                        <div className="w-full mt-8 bg-[#454F23] py-10  px-8 max-h-[580px] overflow-y-auto">
                            {dummyPesan
                            .slice(0, showAll ? dummyPesan.length : 4)
                            .map((item, index) => (
                                <div key={item.id}>

                                    <p className="text-white font-sweetsans font-bold text-[18px] mb-[17px]">
                                        {item.nama}
                                    </p>

                                    <p className="text-white font-sweetsans text-[18px] font-light">
                                        {item.pesan}
                                    </p>

                                    {index !== dummyPesan.length - 1 && (
                                        <div className="border-t border-[#D9D9D9] my-5"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button onClick={() => setShowAll(!showAll)} className='bg-[#454F23] py-2 text-[18px] font-sweetsans text-white uppercase mt-3 flex items-center justify-center gap-2'> 
                         <Image
                            src="/images/wishes/Pesan.png"
                            alt="Kirim"
                            width={20}
                            height={20}
                            className="object-cover" />
                            {showAll ? "Show Less" : "See all message"}
                        </button>
                    </div>
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
    )
}

export default YourWishes