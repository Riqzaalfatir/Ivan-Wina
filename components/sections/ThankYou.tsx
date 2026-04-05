"use client"

import Image from "next/image";
import { motion } from "framer-motion"

const ThankYou = () => {
  return (
    <section className="relative w-full h-screen">

      <div className=" bg-[#6C7852] flex flex-col items-center text-center px-6 pt-24 h-screen">

        <div className="relative flex flex-col items-center">

          <motion.div initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,

            }} className="relative w-[230px] h-[370px] sm:w-[240px] sm:h-[390px] md:w-[430px] md:h-[580px] lg:w-[270px] lg:h-[420px]">

            <Image
              src="/images/hero/Prewed2.jpg"
              alt="Prewed1"
              fill
              className="object-cover"
            />

            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] md:text-[98px] lg:text-[72px] text-[#202F26] z-10 whitespace-nowrap font-sweetsans  font-normal text-center -mt-[60px] md:-mt-[100px] lg:-mt-[70px] pr-[1px] md:pr-[16px] lg:pr-[16px]">
              SEE YOU SOON
            </h1>

          </motion.div>

        </div>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }} className="mt-8 text-[12px] lg:text-[18px] max-w-[200px] md:max-w-[320px] font-light text-white font-sweetsans leading-relaxed mb-0">
          It would be a joy and honor for us to have you join our celebration and share your blessings.
        </motion.p>

      </div>

    </section>
  );
};

export default ThankYou;