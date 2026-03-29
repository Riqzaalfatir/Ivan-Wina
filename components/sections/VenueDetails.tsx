import Link from "next/link"
import Image from "next/image"

const VenueDetails = () => {
  return (
    <>
    <section className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2'>

        <div className='bg-[#6C7852] flex flex-col items-center justify-center leading-none gap-16'>

          <div className="text-center">
            <h2 className='uppercase font-sweetsans font-bold text-[24px] text-white mb-[30px]'>WEDDING</h2>
            <div className='uppercase font-sweetsans font-normal text-[18px] text-center text-white flex flex-col gap-2 mb-[30px]'>
                <p className="font-medium">LOCATION:</p>
                <p className="font-light">GEREJA KATOLIK</p>
                <p className="font-light">SANTO LAURENTIUS</p>
            </div>
            <div className='font-sweetsans font-normal text-[18px] text-center text-white flex flex-col gap-2 mb-[55px]'>
                <p>JL. Sukajadi No.223,</p>
                <p>Bandung, Jawa Barat</p>
            </div>
            <Link href="https://www.google.com/maps?q=Jl.+Sukajadi+No.223+Bandung+Jawa+Barat" target="_blank" className="uppercase  text-white text-[18px] font-sweetsans py-2 px-12 bg-[#CB4F35] font-light flex items-center gap-2">
              <Image src="/images/venuedetails/Maps.png" alt="Maps" width={20} height={20}/>
                  OPEN GOOGLE MAPS
            </Link>
        </div>

          <div className="text-center">
            <h2 className='uppercase font-sweetsans font-bold text-[24px] text-white mb-[30px]'>RECEPTION</h2>
            <div className='uppercase font-sweetsans font-normal text-[18px] text-center text-white flex flex-col gap-2 mb-[30px]'>
                <p className='font-medium'>LOCATION:</p>
                <p className="font-light">KILOGRAM</p>
            </div>
            <div className='font-sweetsans font-normal text-[18px] text-center text-white flex flex-col gap-2 mb-[55px]'>
                <p>Cikole, Lembang, Jawa Barat</p>
            </div>
            <Link href="https://www.google.com/maps?q=Cikole+Lembang+Bandung+Jawa+Barat" target="_blank" className="uppercase  text-white text-[18px] font-sweetsans py-2 px-12 bg-[#CB4F35] font-light flex items-center gap-2">
              <Image src="/images/venuedetails/Maps.png" alt="Maps" width={20} height={20}/>
                  OPEN GOOGLE MAPS
            </Link>
        </div>
        </div>


       <div className="bg-[#202F26] flex items-center justify-center">

  {/* WRAPPER */}
  <div className="relative flex items-center justify-center">

    {/* IMAGE */}
    <div className="relative w-[220px] md:w-[290px] h-[340px] md:h-[490px]">
      <Image
        src="/images/venuedetails/KilogramCaffe.png"
        alt="venue"
        fill
        className="object-contain"
      />

        <div className="absolute inset-0 bg-[#0C1602AB]/50" />
    </div>

    {/* TEXT */}
    <h2 className="
      absolute 
      text-white
      text-[20px] md:text-[36px]
      tracking-[6px]
      font-sweetsans
      z-10
      text-center
      whitespace-nowrap
      font-medium
    ">
      VENUE DETAILS

    </h2>

  </div>

</div>
    </section>

        <div className="border-b border-[#202F26] border-[1.5px]" />
  </>

  )
}

export default VenueDetails