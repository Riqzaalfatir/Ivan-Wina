"use client"
import { useState } from "react"


const WeddingGift = () => {
  const rekBca = "1234567891011"
  const rekMandiri = "1234567891011"

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)

    setTimeout(() => {
      setCopied(null)
    }, 2000)
  }

  const [copied, setCopied] = useState<string | null>(null)

  return (
    <>
    <section id="gift" className='w-full min-h-screen bg-white flex items-center'>
      <div className="max-w-4xl mx-auto px-4 w-auto md:w-full py-30">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          <h2 className='uppercase font-sweetsans font-medium text-[34px] md:text-[46px] lg:text-[46px] tracking-[4px] text-[#202F26] mb-8'>
            Wedding Gift
          </h2>

          <p className='text-[#202F26] text-[14px] md:text-[23px] lg:text-[18px] font-sweetsans font-light max-w-sm leading-[22px] mb-5'>
            Your presence and prayers <br />
            are the greatest blessing to us.
          </p>

          <p className='text-[#202F26]  text-[14px] md:text-[23px] lg:text-[18px] font-sweetsans font-light max-w-[250px]  md:max-w-[400px] lg:max-w-[340px] leading-[22px] mb-14'>
            Should you wish to honor us with a gift,
            please find the details below
            for your convenience.
          </p>
        </div>

        {/* LIST BANK */}
        <div className="max-w-md mx-auto space-y-10">

          {/* ITEM 1 */}
          <div>
            <div className="flex items-center justify-between text-[#202F26]">
              <div>
                <p className="uppercase font-sweetsans font-light tracking-[2px] text-[12px] md:text-[22px] lg:text-[17px]">BCA</p>
                <p className="text-[12px] md:text-[22px] lg:text-[17px] font-sweetsans font-light tracking-[1px]">{rekBca}</p>
                <p className="text-[12px] md:text-[22px] lg:text-[17px] font-sweetsans font-light">PROVITE</p>
              </div>

              <button onClick={() => handleCopy(rekBca, "bca")}
                className="text-[12px] md:text-[22px] lg:text-[17px] font-sweetsans tracking-[2px] border-b border-[#202F26] pb-[2px] hover:opacity-70"
              >
                {copied === "bca" ? "COPIED" : "COPY"}
              </button>
            </div>

            <div className="border-b border-[#202F26] mt-4"></div>
          </div>

          {/* ITEM 2 */}
          <div>
            <div className="flex items-center justify-between text-[#202F26]">
              <div>
                <p className="uppercase font-sweetsans font-light tracking-[2px] text-[12px] md:text-[22px] lg:text-[17px]">MANDIRI</p>
                <p className="text-[12px] md:text-[22px] lg:text-[17px] font-sweetsans font-light tracking-[1px]">{rekMandiri}</p>
                <p className="text-[12px] md:text-[22px] lg:text-[17px] font-sweetsans font-light">PROVITE</p>
              </div>

              <button onClick={() => handleCopy(rekMandiri, "mandiri")}
                className="text-[12px] md:text-[22px] lg:text-[17px] font-sweetsans tracking-[2px] border-b border-[#202F26] pb-[2px] hover:opacity-70"
              >
                {copied === "mandiri" ? "COPIED" : "COPY"}
              </button>
            </div>

            <div className="border-b border-[#202F26] mt-4"></div>
          </div>

        </div>
      </div>
    </section>

        <div className=" border-b border-[#454F2340]/20 border-[1.5px]" />
        </>
  )
}

export default WeddingGift