import Image from "next/image";

const ThankYou = () => {
  return (
    <section className="relative w-full h-screen">

      <div className="lg:hidden bg-[#6C7852] flex flex-col items-center text-center px-6 pt-20 h-screen">

        {/* MOBILE */}
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
                                   <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[42px] md:text-[98px] lg:text-[72px] text-[#202F26] z-10 whitespace-nowrap font-sweetsans font-normal text-center -mt-[60px] md:-mt-[100px] lg:-mt-[70px] pr-[1px] md:pr-[16px] lg:pr-[16px]">
                                       SEE YOU SOON
                                   </h1>
       
                               </div>
       
                           </div>

        {/* DESC */}
        <p className="mt-6 text-[12px] max-w-[330px] text-white font-sweetsans leading-relaxed mb-0">
          It would be a joy and honor for us to have you join our celebration and share your blessings.
        </p>

        {/* LOGO */}
        <Image
          src="/images/thankyou/logoprovite.png"
          alt="logo"
          width={100}
          height={30}
          className="object-contain pt-0 mt-auto"
        />

      </div>

      {/* DEKSTOP */}
      <div className="hidden lg:block relative w-full h-screen">

        <Image
          src="/images/thankyou/BgThankyou.jpg"
          alt="background"
          fill
          className="object-cover object-[50%_48%]"
          priority
        />

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 flex flex-col items-center h-full text-center text-white px-4">

          <h2 className="text-[46px] tracking-[2px] font-sweetsans mb-1 pt-[90px]">
            THANK YOU
          </h2>

          <p className="text-[18px] max-w-md font-sweetsans font-light text-slate-100 leading-relaxed">
            It would be a joy and honor for us to have you join our
            celebration and share your blessings.
          </p>

          <div className="absolute bottom-6">
            <Image
              src="/images/thankyou/logoprovite.png"
              alt="Provite Logo"
              width={120}
              height={40}
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default ThankYou;