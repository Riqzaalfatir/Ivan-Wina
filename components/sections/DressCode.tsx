"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const DressCode = () => {


  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <>
      <section id="dresscode" className='w-full min-h-screen grid grid-cols-1 lg:grid-cols-2'>

        {/* KIRI */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full min-h-[70vh] lg:min-h-screen overflow-hidden"
        >

          {/* GAMBAR UNTUK MOBILE */}
          <Image
            src="/images/dresscode/newp 1.jpg"
            alt="bg"
            fill
            sizes="100vw"
            className="lg:hidden object-cover object-center "
          />

          {/* GAMBAR UNTUK DEKSTOP */}
          <Image
            src="/images/dresscode/Prewed1.png"
            alt="bg"
            fill
            sizes="100vw"
            className="hidden lg:block object-cover object-center "
          />

          {/* OVERLAY DEKSTOP */}
          <div className="hidden lg:block absolute z-0 inset-0 bg-[#0C1602AB]/50" />


          <div className="relative z-10 flex items-center justify-center min-h-[70vh] lg:min-h-screen p-8">
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative"
            >

              {/* GAMBAR UNTUK MOBILE */}
              <Image
                src="/images/dresscode/Dresscode.jpg"
                alt="main"
                width={520}
                height={520}
                className="lg:hidden object-cover"
              />

              {/* GAMBAR UNTUK DEKSTOP */}
              <motion.div className="relative z-10">

                <Image
                  src="/images/dresscode/Prewed2.png"
                  alt="main"
                  width={520}
                  height={520}
                  className="hidden lg:block object-cover"
                />
                <div className="absolute z-20 inset-0 bg-black/50" />


              </motion.div>

              {/* OVERLAY MOBILE */}
              <div className="lg:hidden absolute z-20 inset-0 bg-black/50" />
            </motion.div>
          </div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white text-[28px] md:text-[40px] lg:text-[46px] font-sweetsans  text-center whitespace-nowrap font-medium z-10"
            >
              DRESS CODE
            </motion.h2>
          </div>

        </motion.div>


        {/* KANAN */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delayChildren: 0.2 }} // ⬅️ ini bikin napas dulu

          className='bg-white lg:bg-[#D9D9D9]  flex flex-col items-center justify-center leading-none gap-[79px] py-[75px] md:py-[75px] lg:py-[1px]'
        >

          <motion.div initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }} className="text-center leading-none ">
            <h2 className="font-sweetsans font-medium text-[28px] md:text-[29px] lg:text-[24px] text-[#202F26] mb-[40px] md:mb-[30px] lg:mb-[30px]">
              ATTIRE
            </h2>
            <p className="font-sweetsans font-light text-[12px] md:text-[17px] lg:text-[17px] text-[#202F26] leading-6 mb-[20px] md:mb-[30px] lg:mb-[30px] ">
              We kindly encourage our guests <br />
              to wear these colors for our special day
            </p>
            <Image
              src="/images/dresscode/Warna.png"
              alt="main"
              width={400}
              height={200}
              className="object-cover mx-auto mb-[35px] w-[280px] md:w-[300px]"
            />
            <p className="font-sweetsans font-light text-[12px] md:text-[17px] lg:text-[17px] text-[#202F26]">
              Please don’t wear any black/white/ivory/batik.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }} className="text-center leading-none ">
            <h2 className="font-sweetsans font-medium text-[28px] md:text-[24px] lg:text-[29px] text-[#202F26] mb-[40px] md:mb-[30px] lg:mb-[30px]">
              SHOES
            </h2>
            <p className="font-sweetsans font-light text-[12px] md:text-[17px] lg:text-[17px] text-[#202F26] leading-6 mb-[15px] max-w-xs md:max-w-lg">
              Since the venue is mostly gravel, you may wish to <br /> skip high heels and leather-bottomed shoes.<br />
              Block heels or sturdy flats are recommended for <br /> your comfort.
            </p>
            <Image
              src="/images/dresscode/Sepatu.png"
              alt="main"
              width={240}
              height={200}
              className="object-cover mx-auto hidden"
            />
          </motion.div>

        </motion.div>
      </section>

    </>
  )
}

export default DressCode