"use client"

import Image from "next/image";
import { motion } from "framer-motion"

const ThankYou = () => {
  return (
    <section className="bg-[#6C7852]  relative w-full">

      <div className=" flex flex-col items-center text-center px-6 pt-32 pb-6 lg:pb-0">

        <div className="relative flex flex-col items-center">

          <motion.div initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,

            }} className="relative w-[200px] h-[340px] sm:w-[240px] sm:h-[390px] md:w-[430px] md:h-[580px] lg:w-[270px] lg:h-[420px]">

            <Image
              src="/images/hero/Prewed2.jpg"
              alt="Prewed1"
              fill
              className="object-cover"
            />

            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] md:text-[80px] lg:text-[68px] text-[#202F26] z-10 whitespace-nowrap font-sweetsans  font-normal text-center -mt-[72px] md:-mt-[100px] lg:-mt-[100px] pr-[1px] md:pr-[16px] lg:pr-[16px]">
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
          }} className="mt-[30px] md:mt-8 text-[12px] lg:text-[18px] max-w-[200px] md:max-w-[320px] font-light text-white font-sweetsans leading-relaxed mb-[40px] lg:mb-[100px]">
          It would be a joy and honor for us to have you join our celebration and share your blessings.
        </motion.p>

           <motion.footer
            initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.4,
          }}
           className=' lg:-mt-0flex items-center justify-center'>
  <Image
    src="/images/thankyou/logoprovite1.png"
    alt="logo"
    width={0}
    height={0}
    sizes="100vw"
    className="w-[90px] md:w-[140px] lg:w-[150px] h-auto object-contain"
  />
</motion.footer>

      </div>

    </section>
  );
};

export default ThankYou;