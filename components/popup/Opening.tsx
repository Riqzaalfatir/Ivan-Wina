"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Opening = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const handleOpen = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-[#6C7852] flex flex-col items-center justify-center px-6"
        >

          {/* LOGO ATAS */}
         <div className="relative mb-5 sm:mb-6 lg:mb-7">
  <Image
    src="/images/hero/Iv&WiWhite 3.png"
    alt="logo"
    width={130}
    height={130}
    className="w-[90px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-auto lg:h-auto"
  />
</div>

          {/* WRAPPER */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-[190px] h-[330px] sm:w-[240px] sm:h-[390px] md:w-[240px] md:h-[390px] lg:w-[240px] lg:h-[390px]">

              <Image
                src="/images/hero/Prewed1.png"
                alt="Prewed1"
                fill
                className="object-cover"
              />

              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[48px]  sm:text-[64px] md:text-[64px] lg:text-[64px] text-[#202F26] z-10 whitespace-nowrap font-sweetsans text-center -mt-[30px] sm:-mt-[30px] md:-mt-[30px] lg:-mt-[30px] pr-[0px] sm:pr-[16px] md:pr-[16px] lg:pr-[16px]">
                IVAN & WINA
              </h1>

              <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18px] sm:text-[18px]  md:text-[18px] lg:text-[18px] text-[#202F26] z-10 whitespace-nowrap font-sweetsans font-medium text-center mt-[20px] sm:mt-[20px] md:mt-[20px] lg:mt-[20px]">
                23 MAY 2026
              </h3>

            </div>
          </div>

          {/* TANGGAL */}
          <p className='mt-[30px] sm:mt-[30px] md:mt-[30px] lg:mt-[30px] font-sweetsans font-light text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] text-white mb-[5px]'>Dear Mr./ Mrs./ Ms.</p>
          <p className='font-sweetsans font-normal text-[18px] text-white mb-[18px]'>Sela</p>
          <p className="text-center text-white font-sweetsans font-light text-[12px] md:hidden">We sincerely apologize <br />
          for any misspelling of names or titles.</p>

          {/* BUTTON */}
          <button
            onClick={handleOpen}
            className="mt-10 bg-white text-[#202F26] px-8 py-3 text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px]  tracking-[2px] uppercase font-sweetsans font-medium hover:opacity-90 transition"
          >
            Open Invitation
          </button>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Opening;