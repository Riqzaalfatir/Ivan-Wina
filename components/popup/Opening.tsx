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
          className="fixed inset-0 z-50 bg-[#6C7852] flex flex-col items-center justify-center px-6 overflow-y-auto"
        >

          <div className="relative mb-5 sm:mb-6 lg:mb-7">
            <Image
              src="/images/hero/Iv&WiWhite 1.png"
              alt="logo"
              width={120}
              height={120}
              className="w-[90px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[90px] lg:w-[120px] lg:h-[70px]"
            />
          </div>

          <div className="relative flex flex-col items-center">

            <div className="relative w-[210px] h-[330px] sm:w-[240px] sm:h-[390px] md:w-[350px] md:h-[500px] lg:w-[250px] lg:h-[390px]">

              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/images/opening/Opening1.jpg"
                  alt="Prewed1"
                  fill
                  className="object-cover scale-150"
                />
              </div>

              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[48px] sm:text-[64px] md:text-[80px] lg:text-[66px] text-[#202F26] z-10 whitespace-nowrap text-center">
                IVAN & WINA
              </h1>

              <h3 className="absolute top-[60%] left-1/2 -translate-x-1/2 text-[14px] sm:text-[18px] md:text-[21px] lg:text-[16px] text-[#202F26] z-10 whitespace-nowrap font-sweetsans font-medium text-center">
                23 MAY 2026
              </h3>

            </div>

          </div>

          <p className='mt-[30px] sm:mt-[30px] md:mt-[30px] lg:mt-[30px] font-sweetsans  text-[14px] sm:text-[18px] md:text-[24px] lg:text-[18px] mb-[5px] text-white'>Dear Mr./ Mrs./ Ms.</p>
          <p className='font-sweetsans text-[18px] sm:text-[18px] md:text-[24px] lg:text-[18px] mb-[26px] lg:mb-[20px] text-white font-bold'>Sela</p>
          <p className="text-center font-sweetsans font-light text-[10px] md:text-[14px] text-white">We sincerely apologize <br />
            for any misspelling of names or titles.</p>

          <button
            onClick={handleOpen}
            className="mt-10 bg-[#CB4F35] text-[#FEFBF0] px-8 py-3 text-[14px] sm:text-[14px] md:text-[18px] lg:text-[18px]  tracking-[2px] uppercase font-sweetsans font-medium hover:opacity-90 transition"
          >
            Open Invitation
          </button>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Opening;