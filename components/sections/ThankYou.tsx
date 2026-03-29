import Image from "next/image";

const ThankYou = () => {
  return (
    <section className="relative w-full h-screen">

      {/* BACKGROUND IMAGE */}
      <Image
            src="/images/thankyou/BgThankyou.jpg"
        alt="background"
        fill
        className="object-cover object-[50%_48%]"
        priority
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center h-full text-center text-white px-4">

        <h2 className="text-[46px] tracking-[2px] font-sweetsans mb-1 pt-[90px]">
          THANK YOU
        </h2>

        <p className="text-[18px] max-w-md  font-sweetsans font-light text-slate-100 leading-relaxed">
          It would be a joy and honor for us to have you join our
          celebration and share your blessings.
        </p>

        {/* LOGO */}
        <div className="absolute bottom-6">
          <Image
            src="/images/thankyou/logoprovite.png"
            alt="Provite Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default ThankYou;