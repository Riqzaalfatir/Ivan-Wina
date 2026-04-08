import Image from "next/image"


type HeroProps = {
  menuOpen: boolean
}

const Hero = ({ menuOpen }: HeroProps) => {
  return (
    <>
      <section id="hero" className='w-full bg-[#6C7852]  min-h-screen grid grid-cols-1 lg:grid-cols-2'>

        {/* KIRI */}
        <div className={`flex flex-col items-center px-6 lg:px-0 h-screen pt-28 lg:pt-0 md:justify-center transition-all lg:transition-none duration-700 lg:duration-0
           ${menuOpen ? "translate-y-16 lg:translate-y-0" : "translate-y-0"}`}
        >

          <div className="relative mb-8 sm:mb-6 lg:mb-7">
            <Image
              src="/images/hero/Iv&WiWhite 1.png"
              alt="logo"
              width={120}
              height={120}
              className="w-[95px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[100px] lg:w-[120px] lg:h-[70px]"
            />
          </div>

          <div className="relative flex flex-col items-center">

            <div className="relative w-[190px] h-[330px] sm:w-[240px] sm:h-[390px] md:w-[350px] md:h-[500px] lg:w-[250px] lg:h-[390px]  md:mt-0">

              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/images/opening/Opening1.jpg"
                  alt="Prewed1"
                  fill
                  className="object-cover scale-150"
                />
              </div>

              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[48px] sm:text-[64px] md:text-[80px] lg:text-[72px] text-[#202F26] z-10 whitespace-nowrap text-center">
                IVAN & WINA
              </h1>

            </div>

          </div>

          <p className="mt-[30px] text-white tracking-widest text-[14px] md:text-[22px] lg:text-[18px] font-sweetsans font-medium">
            23 MAY 2026
          </p>

        </div>


        {/* KANAN */}
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

      <div className="border-b border-[#454F23]/85 border-[1px]" />
    </>
  )
}

export default Hero