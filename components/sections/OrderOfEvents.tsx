import Image from "next/image"

const OrderOfEvents = () => {
    return (
        <section className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2'>

            {/* LEFT */}
            <div className="relative w-full h-full flex items-center justify-center">

                <Image
                    src="/images/orderofevents/Gedung.png"
                    alt="Gedung"
                    fill
                    className="object-cover object-[50%_70%]"
                    priority
                />

                <div className="absolute inset-0 bg-black/40" />

                <h2 className="relative z-10 font-sweetsans text-white text-[46px] text-center font-medium ">
                    ORDER OF<span className="block">EVENTS</span>
                </h2>

            </div>

            {/* RIGHT */}
            <div className="bg-[#6C7852] flex flex-col items-center justify-center gap-[50px]">
                <div className="text-white text-center leading-none">
                    <h3 className="font-sweetsans font-bold text-[45px] mb-[10px]">09.00 WIB</h3>
                    <h4 className="font-sweetsans font-medium  text-[24px] mb-[17px]">CEREMONY</h4>
                    <p className="font-sweetsans font-normal text-[16px] text-slate-100">The Sacrament. The vows</p>
                </div>
                <div className="text-white text-center leading-none">
                    <h3 className="font-sweetsans font-bold text-[45px] mb-[10px]">13.00 WIB</h3>
                    <h4 className="font-sweetsans font-medium text-[24px] mb-[17px]">TEA PAI</h4>
                    <p className="font-sweetsans font-normal text-[16px] text-slate-100">The tradition. The honor.</p>
                </div>
                <div className="text-white text-center leading-none">
                    <h3 className="font-sweetsans font-bold text-[45px] mb-[10px]">12.00 WIB</h3>
                    <h4 className="font-sweetsans font-medium text-[24px] mb-[17px]">WEDDING RECEPTION</h4>
                    <p className="font-sweetsans text-[14px] mb-[20px] font-light italic text-slate-100">Followed by the Reception</p>

                    <p className="font-sweetsans font-light text-[18px] text-slate-50">The celebration. The joy.</p>
                </div>
            </div>

        </section>
    )
}

export default OrderOfEvents