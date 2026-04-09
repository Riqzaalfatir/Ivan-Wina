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
            className="fixed inset-0 bg-[#E9E9E9]/70 backdrop-blur-sm flex items-center justify-center z-50 transition-300"

        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.40, ease: "easeOut" }}


                className="relative w-[290px] h-[320px] md:w-[360px] md:h-[340px] lg:w-[410px] lg:h-[530px] rounded-xl lg:rounded-2xl bg-white backdrop-blur-[14.6px] md:backdrop-blur-[25.6px]  shadow-md px-[20px] text-center  shadow-black/50"
            >

                <button
                    onClick={() => setOpenPopup(false)}
                    className="absolute top-0.5 left-2.5 lg:top-0.5 lg:left-3 text-[22px] md:text-[25px] font-bold text-[#727271]"
                >
                    x
                </button>

                <h2 className="text-[16px] md:text-[30px] lg:text-[20px] font-sans tracking-[2px] font-extrabold text-[#727271] mb-[19px] pt-[39px] md:pt-[20px] lg:pt-[88px]">
                    RSVP CLOSED
                </h2>

                <p className="text-[12px] md:text-[16px] lg:text-[17px] font-medium text-[#727271] leading-relaxed mb-4 font-sans  tracking-[0.5px] lg:pt-8">
                    Reservasi telah ditutup. <br />
                    Untuk bantuan atau reservasi manual, <br />
                    silahkan hubungi tim kami.
                </p>

                <p className="text-[12px] md:text-[16px] lg:text-[17px] font-medium text-[#727271] leading-relaxed mb-6 lg:mb-14 font-sans  tracking-[0.5px]">
                    Reservations are now closed. <br />
                    For assistance or manual reservations, <br />
                    please contact our team.
                </p>

                <button
                    onClick={waHelpdesk}
                    className='flex mx-auto rounded-full items-center justify-center gap-3 uppercase font-figtree font-medium bg-[#404040]  text-[12px] md:text-[13px]  text-[#FEFBF0] h-[35px] w-[200px] md:h-[42px] md:w-[220px] '                            >
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