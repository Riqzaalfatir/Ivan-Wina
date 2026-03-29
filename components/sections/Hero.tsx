import Image from "next/image"

const Hero = () => {
    return (
        <>
            <section className='w-full h-screen grid grid-cols-1 md:grid-cols-2'>

                {/* LEFT */}
                <div className="bg-[#6C7852] flex flex-col items-center justify-center px-6 relative">

                    {/* ✅ GAMBAR PUTIH ATAS */}
                    <div className="relative mb-7">
                        <Image
                            src="/images/hero/Iv&WiWhite 3.png"
                            alt="logo"
                            width={145}
                            height={145}
                            className=""
                        />
                    </div>

                    {/* ✅ WRAPPER OVERLAP */}
                    <div className="relative flex flex-col items-center">

                        {/* TEXT OVERLAY */}
                        <div className="relative w-[270px] h-[420px]">

                            {/* IMAGE */}
                            <Image
                                src="/images/hero/Prewed1.png"
                                alt="Prewed1"
                                fill
                                className="object-cover"
                            />

                            {/* TEXT */}
                            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] md:text-[72px] text-[#202F26] z-10 whitespace-nowrap font-sweetsans font-normal text-center -mt-[30px] pr-[16px]">
                                IVAN & WINA
                            </h1>

                        </div>

                    </div>

                    {/* TANGGAL */}
                    <p className="mt-[30px] text-white tracking-widest text-[18px] font-sweetsans font-medium">
                        23 MAY 2026
                    </p>

                </div>

                {/* RIGHT */}
                <div className="relative w-full h-full">
                    <Image
                        src="/images/hero/Prewed2.png"
                        alt="Prewed2"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>


            </section>


            <div className="border-b border-[#202F26] border-[1.5px]" />
        </>
    )
}

export default Hero