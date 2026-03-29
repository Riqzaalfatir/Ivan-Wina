import Image from "next/image"

const DressCode = () => {
    return (
        <>
            <section className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2'>

                <div className="relative w-full min-h-screen overflow-hidden py-10">

                    {/* BACKGROUND IMAGE */}
                    <Image
                        src="/images/dresscode/Prewed1.png"
                        alt="bg"
                        fill
                        className="object-cover object-center blur-xs "

                    />
                    <div className="absolute z-0 inset-0 bg-[#0C1602AB]/50" />

                    {/* CENTER IMAGE */}
                    <div className="relative z-10 flex items-center justify-center min-h-screen">
                        <div className="relative">
                            <Image
                                src="/images/dresscode/Prewed2.png"
                                alt="main"
                                width={520}
                                height={520}
                                className="object-cover"
                            />
                            <div className="absolute z-20 inset-0 bg-black/50" />
                        </div>
                    </div>

                    <h2 className="
    absolute 
    top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    text-white
    text-[28px] md:text-[35px]
    font-sweetsans
    tracking-[6px]
    z-30
    text-center
          whitespace-nowrap
          font-medium

  ">
                        DRESS CODE
                    </h2>

                </div>

                <div className='bg-[#6C7852] flex flex-col items-center justify-center leading-none gap-[79px]'>
                    <div className="text-center leading-none ">
                        <h2 className="font-sweetsans font-medium text-[24px] text-white mb-[30px]">ATTIRE</h2>
                        <p className="font-sweetsans font-light text-[17px] text-white leading-6 mb-[30px] ">We invite guests to dress semi-formal <br /> in “colors of nature”,  <br /> similar to this palette (other shades are welcome)</p>
                        <Image
                            src="/images/dresscode/Warna.png"
                            alt="main"
                            width={350}
                            height={200}
                            className="object-cover mx-auto mb-[35px]"
                        />
                        <p className="font-sweetsans font-light text-[17px] text-white">Please don’t wear any black/white/ivory/batik.</p>
                    </div>
                    <div className="text-center leading-none ">
                        <h2 className="font-sweetsans font-medium text-[24px] text-white mb-[30px]">SHOES</h2>
                        <p className="font-sweetsans  font-light text-[17px] text-white leading-6 mb-[15px] max-w-md">Since the venue is mostly gravel, you may wish to skip high heels and leather-bottomed shoes.Block heels or sturdy flats are recommended for <br /> your comfort.</p>
                        <Image
                            src="/images/dresscode/Sepatu.png"
                            alt="main"
                            width={240}
                            height={200}
                            className="object-cover mx-auto"
                        />
                    </div>
                </div>
            </section>

            <div className="border-b border-[#202F26] border-[1.5px]" />
        </>
    )
}

export default DressCode