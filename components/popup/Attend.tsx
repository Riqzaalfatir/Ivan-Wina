"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PopupProps {
    setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
    waHelpdesk: () => void;
}

const Attend: React.FC<PopupProps> = ({ setOpenPopup, waHelpdesk }) => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }} // 🔥 TAMBAH INI
  transition={{ duration: 0.2 }}
            className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50 transition-300"
       
        >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.40, ease: "easeOut" }}

                
                className="relative w-[290px] h-[310px] md:w-[360px] md:h-[340px] rounded-[10px]
bg-white/50
backdrop-blur-[14.6px] md:backdrop-blur-[25.6px]

border border-black/80
shadow-md
px-[20px] text-center  shadow-black/70"
            >
                {/* CLOSE BUTTON */}
                <button
                    onClick={() => setOpenPopup(false)}
                    className="absolute top-0.5 left-2.5 text-black text-[22px] font-bold"
                >
                    x
                </button>

                {/* TITLE */}
                <h2 className="text-[16px] md:text-[20px] font-sans tracking-[2px] font-bold text-white mb-[19px] pt-[39px]">
                    RSVP CLOSED
                </h2>

                {/* TEXT */}
                <p className="text-[12px] md:text-[14px] text-white leading-relaxed mb-4 font-sans  tracking-[0.5px]">
                    Reservasi telah ditutup. <br />
                    Untuk bantuan atau reservasi manual, <br />
                    silahkan hubungi tim kami.
                </p>

                <p className="text-[12px] md:text-[14px] text-white leading-relaxed mb-6 font-sans  tracking-[0.5px]">
                    Reservations are now closed. <br />
                    For assistance or manual reservations, <br />
                    please contact our team.
                </p>

                {/* BUTTON */}
                <button
                    onClick={waHelpdesk}
                    className='flex mx-auto rounded-full items-center justify-center gap-3 uppercase font-figtree font-medium  text-[12px]  text-white h-[35px] w-[230px] lg:h-[40px] bg-[#CB4F35] tracking-[1px]'                            >
                    <Image
                        src="/images/rsvp/lonceng.svg"
                        alt="wa"
                        width={18}
                        height={23}
                        className="w-[20px] md:w-[28px] object-contain"
                    />

                    Chat helpdesk team
                </button>
            </motion.div>
        </motion.div>
    );
};

export default Attend;