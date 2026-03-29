"use client"

import Link from "next/link"
import dynamic from "next/dynamic"

// ✅ PINDAH KE SINI (LUAR COMPONENT)
const Countdown = dynamic(() => import("react-countdown"), {
  ssr: false,
})

const CountingDown = () => {
  const tanggalTarget = new Date("2026-04-05T00:00:00")

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return (
        <div className="flex items-center text-center mb-[75px] gap-[55px]">
          <div className="flex flex-col gap-0">
            <h4 className="text-white font-medium font-sweetsans text-[54px] leading-none">00</h4>
            <p className="text-white font-bold font-sweetsans text-[18px] leading-none uppercase">DAYS</p>
          </div>
          <div className="flex flex-col gap-0">
            <h4 className="text-white font-medium font-sweetsans text-[54px] leading-none">00</h4>
            <p className="text-white font-bold font-sweetsans text-[18px] leading-none uppercase">Hours</p>
          </div>
          <div className="flex flex-col gap-0">
            <h4 className="text-white font-medium font-sweetsans text-[54px] leading-none">00</h4>
            <p className="text-white font-bold font-sweetsans text-[18px] leading-none uppercase">Minutes</p>
          </div>
          <div className="flex flex-col gap-0">
            <h4 className="text-white font-medium font-sweetsans text-[54px] leading-none">00</h4>
            <p className="text-white font-bold font-sweetsans text-[18px] leading-none uppercase">Seconds</p>
          </div>
        </div>
      )
    }

    return (
      <div className="flex items-center text-center mb-[75px] gap-[55px]">
        <div className="flex flex-col gap-0">
          <h4 className="text-white font-medium font-sweetsans text-[54px] leading-none tabular-nums">
            {days.toString().padStart(2, "0")}
          </h4>
          <p className="text-white font-bold font-sweetsans text-[18px] leading-none uppercase">DAYS</p>
        </div>
        <div className="flex flex-col gap-0">
          <h4 className="text-white font-medium font-sweetsans text-[54px] leading-none tabular-nums">
            {hours.toString().padStart(2, "0")}
          </h4>
          <p className="text-white font-bold font-sweetsans text-[18px] leading-none uppercase">Hours</p>
        </div>
        <div className="flex flex-col gap-0">
          <h4 className="text-white font-medium font-sweetsans text-[54px] leading-none tabular-nums">
            {minutes.toString().padStart(2, "0")}
          </h4>
          <p className="text-white font-bold font-sweetsans text-[18px] leading-none uppercase">Minutes</p>
        </div>
        <div className="flex flex-col gap-0">
          <h4 className="text-white font-medium font-sweetsans text-[54px] leading-none tabular-nums">
            {seconds.toString().padStart(2, "0")}
          </h4>
          <p className="text-white font-bold font-sweetsans text-[18px] leading-none uppercase">Seconds</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className='w-full bg-[#6C7852] py-[145px]'>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className='uppercase font-sweetsans font-bold text-white text-[46px] mb-[60px]'>
              COUNTING DOWN
            </h2>

            {/* ✅ SEKARANG AMAN */}
            <Countdown date={tanggalTarget} renderer={renderer} />

            <Link href="#" className="uppercase font-normal text-white text-[18px] font-sweetsans py-2 px-14 bg-[#CB4F35]">
              MARK YOUR CALENDAR
            </Link>
          </div>
        </div>
      </section>

      <div className="border-b border-[#202F26] border-[1.5px]" />
    </>
  )
}

export default CountingDown