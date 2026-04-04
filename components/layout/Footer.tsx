import Image from "next/image"

const Footer = () => {
  return (
    <footer className='w-full -mt-20 bg-[#6C7852] flex items-center justify-center'>
           <Image
                src="/images/thankyou/logoprovite1.png"
                alt="logo"
                width={100}
                height={30}
                className="object-contain pt-10 md:pt-20 mt-auto"
              />
      
    </footer>
  )
}

export default Footer