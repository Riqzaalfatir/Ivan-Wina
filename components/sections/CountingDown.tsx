"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"

type CountdownProps = {
  days: number
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}

const Countdown = dynamic(() => import("react-countdown"), {
  ssr: false,
})

const CountingDown = () => {
  const tanggalTarget = new Date("2026-04-09T00:00:00+07:00")

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownProps)  => {
    if (completed) {
      return (

        // COUNTDOWN APABILA WAKTU TELAH HABIS: 00
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex items-center text-center mb-[60px] md:mb-[60px] lg:mb-[75px] gap-[45px] md:gap-[55px] lg:gap-[55px] "
        >
          <div className="flex flex-col gap-1.5 md:gap-1">
            <motion.h4 initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }} className="text-white font-medium font-sweetsans text-[32px] md:text-[64px] leading-none">00</motion.h4>
            <p className="text-white font-medium  font-sweetsans text-[10px] md:text-[23px] lg:text-[18px] leading-none uppercase">DAYS</p>
          </div>
          <div className="flex flex-col gap-1.5 md:gap-1">
            <motion.h4 initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }} className="text-white font-medium font-sweetsans text-[32px] md:text-[64px] leading-none">00</motion.h4>
            <p className="text-white font-medium  font-sweetsans text-[10px] md:text-[23px] lg:text-[18px] leading-none uppercase">Hours</p>
          </div>
          <div className="flex flex-col gap-1.5 md:gap-1">
            <motion.h4 initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }} className="text-white font-medium font-sweetsans text-[32px] md:text-[64px] leading-none">00</motion.h4>
            <p className="text-white font-medium  font-sweetsans text-[10px] md:text-[23px] lg:text-[18px] leading-none uppercase">Minutes</p>
          </div>
          <div className="flex flex-col gap-1.5 md:gap-1">
            <motion.h4 initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }} className="text-[#202F26] font-medium font-sweetsans text-[32px] md:text-[64px] leading-none">00</motion.h4>
            <p className="text-white font-medium  font-sweetsans text-[10px] md:text-[23px] lg:text-[18px] leading-none uppercase">Seconds</p>
          </div>
        </motion.div>
      )
    }

    return (

      // COUNTDOWN APABILA MASIH TERSEDIA
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="flex items-center  text-center mb-[60px] md:mb-[60px] lg:mb-[75px] gap-[45px] md:gap-[55px] lg:gap-[55px]"
      >
        <div className="flex flex-col gap-1.5 md:gap-1">
          <motion.h4 key={days} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }} className="text-white font-medium font-sweetsans text-[32px] md:text-[64px] leading-none tabular-nums">
            {days.toString().padStart(2, "0")}
          </motion.h4>
          <p className="text-white font-medium  font-sweetsans text-[10px] md:text-[23px] lg:text-[18px] leading-none uppercase">DAYS</p>
        </div>

        <div className="flex flex-col gap-1.5 md:gap-1">
          <motion.h4 key={hours} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }} className="text-white font-medium font-sweetsans text-[32px] md:text-[64px] leading-none tabular-nums">
            {hours.toString().padStart(2, "0")}
          </motion.h4>
          <p className="text-white font-medium  font-sweetsans text-[10px] md:text-[23px] lg:text-[18px] leading-none uppercase">Hours</p>
        </div>

        <div className="flex flex-col gap-1.5 md:gap-1">
          <motion.h4 key={minutes} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }} className="text-white font-medium font-sweetsans text-[32px] md:text-[64px] leading-none tabular-nums">
            {minutes.toString().padStart(2, "0")}
          </motion.h4>
          <p className="text-white font-medium  font-sweetsans text-[10px] md:text-[23px] lg:text-[18px] leading-none uppercase">Minutes</p>
        </div>

        <div className="flex flex-col gap-1.5 md:gap-1">
          <motion.h4 key={seconds} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }} className="text-white font-medium font-sweetsans text-[32px] md:text-[64px] leading-none tabular-nums">
            {seconds.toString().padStart(2, "0")}
          </motion.h4>
          <p className="text-white font-medium  font-sweetsans text-[10px] md:text-[23px] lg:text-[18px] leading-none uppercase">Seconds</p>
        </div>
      </motion.div>
    )
  }
  

  return (
    <>
      <section id="counting" className='w-full bg-[#6C7852] py-[75px] md:py-[145px] lg:py-[145px]'>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center">

            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className='uppercase font-sweetsans font-bold text-white text-[28px] md:text-[51px] lg:text-[46px] mb-[38px] md:mb-[60px] lg:mb-[60px]'
            >
              COUNTING DOWN
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
            >
              <Countdown date={tanggalTarget} renderer={renderer} />
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}

              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}

              href="https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding%20Ivan%20%26%20Partner&dates=20260409T030000Z/20260409T060000Z&details=Join%20our%20wedding%20celebration&location=Jakarta"
              target="_blank"
              rel="noopener noreferrer"

              className="uppercase font-normal text-white text-[12px] md:text-[23px] lg:text-[18px] font-sweetsans h-[29px] w-[200px] md:h-[40px] md:w-[326px] flex items-center justify-center bg-[#CB4F35]"
            >
              MARK YOUR CALENDAR
            </motion.a>

          </div>
        </div>
      </section>

    </>
  )
}

export default CountingDown