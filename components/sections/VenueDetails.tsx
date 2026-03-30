"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"

const VenueDetails = () => {
  const fadeUp : Variants =  {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
ease: [0.25, 1, 0.5, 1]      }
    }
  }

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  return (
    <>
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className='w-full min-h-screen grid grid-cols-1 lg:grid-cols-2'
    >

        <motion.div
          className='bg-white flex flex-col items-center justify-center leading-none gap-16 order-2 lg:order-1 py-[75px] md:py-[75px] lg:py-[1px]'
        >

          <motion.div variants={fadeUp} className="text-center">
            <motion.h2 variants={fadeUp} className='uppercase font-sweetsans font-bold text-[18px] md:text-[24px] lg:text-[24px] text-[#202F26] mb-[30px]'>CEREMONY</motion.h2>
            <motion.div variants={fadeUp} className='uppercase font-sweetsans font-normal text-[13px] md:text-[18px] lg:text-[18px] text-center text-[#202F26] flex flex-col gap-2 mb-[30px]'>
                <motion.p variants={fadeUp} className="font-medium">LOCATION:</motion.p>
                <motion.p variants={fadeUp} className="font-light">GEREJA KATOLIK</motion.p>
                <motion.p variants={fadeUp} className="font-light">SANTO LAURENTIUS</motion.p>
            </motion.div>
            <motion.div variants={fadeUp} className='font-sweetsans font-normal  text-[13px] md:text-[18px] lg:text-[18px] text-center text-[#202F26] flex flex-col gap-2 mb-[55px]'>
                <motion.p variants={fadeUp}>JL. Sukajadi No.223,</motion.p>
                <motion.p variants={fadeUp}>Bandung, Jawa Barat</motion.p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link href="https://www.google.com/maps?q=Jl.+Sukajadi+No.223+Bandung+Jawa+Barat" target="_blank" className="uppercase  text-white  text-[11px] md:text-[18px] lg:text-[18px] font-sweetsans py-2 px-12 bg-[#CB4F35] font-light flex items-center gap-2">
                <Image src="/images/venuedetails/Maps.png" alt="Maps" width={20} height={20}/>
                    OPEN GOOGLE MAPS
              </Link>
            </motion.div>
        </motion.div>

          <motion.div variants={fadeUp} className="text-center">
            <motion.h2 variants={fadeUp} className='uppercase font-sweetsans font-bold text-[18px] md:text-[24px] lg:text-[24px] text-[#202F26] mb-[30px]'>RECEPTION</motion.h2>
            <motion.div variants={fadeUp} className='uppercase font-sweetsans font-normal text-[13px] md:text-[18px] lg:text-[18px] text-center text-[#202F26] flex flex-col gap-2 mb-[30px]'>
                <motion.p variants={fadeUp} className='font-medium'>LOCATION:</motion.p>
                <motion.p variants={fadeUp} className="font-light">KILOGRAM</motion.p>
            </motion.div>
            <motion.div variants={fadeUp} className='font-sweetsans font-normal text-[13px] md:text-[18px] lg:text-[18px] text-center text-[#202F26] flex flex-col gap-2 mb-[55px]'>
                <motion.p variants={fadeUp}>Cikole, Lembang, Jawa Barat</motion.p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link href="https://www.google.com/maps?q=Cikole+Lembang+Bandung+Jawa+Barat" target="_blank" className="uppercase  text-white text-[11px] md:text-[18px] lg:text-[18px] font-sweetsans py-2 px-12 bg-[#CB4F35] font-light flex items-center gap-2">
                <Image src="/images/venuedetails/Maps.png" alt="Maps" width={20} height={20}/>
                    OPEN GOOGLE MAPS
              </Link>
            </motion.div>
        </motion.div>
        </motion.div>


       <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1 }}
         className="bg-[#202F26] flex items-center justify-center py-20 md:py-20 lg:py-0  order-1 lg:order-2"
       >

  {/* WRAPPER */}
  <div className="relative flex items-center justify-center">

    {/* IMAGE */}
    <motion.div
      initial={{ scale: 1.1 }}
      whileInView={{ scale: 1 }}
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

    {/* TEXT */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="
      absolute 
      text-white
      text-[28px] md:text-[46px]
      font-sweetsans
      z-10
      text-center
      whitespace-nowrap
      font-medium
    ">
      VENUE DETAILS
    </motion.h2>

  </div>

</motion.div>
    </motion.section>

        <div className="border-b border-[#202F26] border-[1.5px]" />
  </>

  )
}

export default VenueDetails