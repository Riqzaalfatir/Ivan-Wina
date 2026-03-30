import Image from "next/image"

const Hero = () => {
    return (
        <>
            <section id="hero" className='w-full min-h-screen grid grid-cols-1 lg:grid-cols-2'>

                {/* LEFT */}
                <div className="bg-white flex flex-col items-center justify-center px-6 relative min-h-screen lg:min-h-0">

                    {/* ✅ GAMBAR PUTIH ATAS */}
                     <div className="relative mb-5 sm:mb-6 lg:mb-7">
                                <Image
                                  src="/images/hero/Iv&WiWhite 3.png"
                                  alt="logo"
                                  width={120}
                                  height={120}
                                  className="w-[90px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[100px] lg:w-auto lg:h-auto"
                                />
                    </div>

                    {/* ✅ WRAPPER OVERLAP */}
                    <div className="relative flex flex-col items-center">

                        {/* TEXT OVERLAY */}
                        <div className="relative w-[230px] h-[370px] sm:w-[240px] sm:h-[390px] md:w-[430px] md:h-[580px] lg:w-[270px] lg:h-[420px]">

                            {/* IMAGE */}
                            <Image
                                src="/images/hero/Prewed2.jpg"
                                alt="Prewed1"
                                fill
                                className="object-cover"
                            />

                            {/* TEXT */}
                            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[49px] md:text-[98px] lg:text-[72px] text-[#202F26] z-10 whitespace-nowrap font-sweetsans font-normal text-center -mt-[60px] md:-mt-[100px] lg:-mt-[70px] pr-[1px] md:pr-[16px] lg:pr-[16px]">
                                IVAN & WINA
                            </h1>

                        </div>

                    </div>

                    {/* TANGGAL */}
                    <p className="mt-[30px] text-[#202F26] tracking-widest text-[14px] md:text-[22px] lg:text-[18px] font-sweetsans font-medium">
                        23 MAY 2026
                    </p>

                </div>

                {/* RIGHT */}
                <div className="relative w-full h-[70vh] lg:h-full">
                    <Image
                        src="/images/hero/Prewed3.jpg"
                        alt="Prewed2"
                        fill
                        className="object-cover object-[50%_70%]"
                        priority
                    />
                </div>


            </section>


            <div className="border-b border-[#454F2340]/20 border-[1.5px]" />
        </>
    )
}

export default Hero