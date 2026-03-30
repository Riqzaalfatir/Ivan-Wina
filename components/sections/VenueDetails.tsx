"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"

const VenueDetails = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <>
      <section className='w-full min-h-screen grid grid-cols-1 lg:grid-cols-2'>

        <div className='bg-white flex flex-col items-center justify-center leading-none gap-16 order-2 lg:order-1 py-[75px] md:py-[75px] lg:py-[1px]'>

          {/* CEREMONY */}
          <div className="text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='uppercase font-sweetsans font-bold text-[18px] md:text-[24px] lg:text-[24px] text-[#202F26] mb-[30px]'
            >
              CEREMONY
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='uppercase font-sweetsans font-normal text-[13px] md:text-[18px] lg:text-[18px] text-center text-[#202F26] flex flex-col gap-2 mb-[30px]'
            >
              <p className="font-medium">LOCATION:</p>
              <p className="font-light">GEREJA KATOLIK</p>
              <p className="font-light">SANTO LAURENTIUS</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='font-sweetsans font-normal text-[13px] md:text-[18px] lg:text-[18px] text-center text-[#202F26] flex flex-col gap-2 mb-[55px]'
            >
              <p>JL. Sukajadi No.223,</p>
              <p>Bandung, Jawa Barat</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Link href="https://www.google.com/maps?q=Jl.+Sukajadi+No.223+Bandung+Jawa+Barat" target="_blank" className="uppercase text-white text-[11px] md:text-[18px] lg:text-[18px] font-sweetsans py-2 px-12 bg-[#CB4F35] font-light flex items-center gap-2">
                <Image src="/images/venuedetails/Maps.png" alt="Maps" width={20} height={20} />
                OPEN GOOGLE MAPS
              </Link>
            </motion.div>
          </div>

          {/* RECEPTION */}
          <div className="text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='uppercase font-sweetsans font-bold text-[18px] md:text-[24px] lg:text-[24px] text-[#202F26] mb-[30px]'
            >
              RECEPTION
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='uppercase font-sweetsans font-normal text-[13px] md:text-[18px] lg:text-[18px] text-center text-[#202F26] flex flex-col gap-2 mb-[30px]'
            >
              <p className='font-medium'>LOCATION:</p>
              <p className="font-light">KILOGRAM</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='font-sweetsans font-normal text-[13px] md:text-[18px] lg:text-[18px] text-center text-[#202F26] flex flex-col gap-2 mb-[55px]'
            >
              <p>Cikole, Lembang, Jawa Barat</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Link href="https://www.google.com/maps?q=Cikole+Lembang+Bandung+Jawa+Barat" target="_blank" className="uppercase text-white text-[11px] md:text-[18px] lg:text-[18px] font-sweetsans py-2 px-12 bg-[#CB4F35] font-light flex items-center gap-2">
                <Image src="/images/venuedetails/Maps.png" alt="Maps" width={20} height={20} />
                OPEN GOOGLE MAPS
              </Link>
            </motion.div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-[#202F26] flex items-center justify-center py-20 md:py-20 lg:py-0 order-1 lg:order-2"
        >
          <div className="relative flex items-center justify-center">

            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative w-[200px] md:w-[290px] h-[340px] md:h-[490px]"
            >
              <Image
                src="/images/venuedetails/Venue.jpg"
                alt="venue"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0C1602AB]/60" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute text-white text-[28px] md:text-[46px] font-sweetsans z-10 text-center whitespace-nowrap font-medium"
            >
              VENUE DETAILS
            </motion.h2>

          </div>
        </motion.div>

      </section>

      <div className="border-b border-[#202F26] border-[1.5px]" />
    </>
  )
}

export default VenueDetails