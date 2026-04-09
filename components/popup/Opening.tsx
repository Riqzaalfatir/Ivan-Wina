  "use client";

  import { useState, useEffect } from "react";
  import Image from "next/image";
  import { motion, AnimatePresence } from "framer-motion";

  const Opening = ({ namaTamu = "Sela" }) => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
      document.body.style.overflow = "hidden";
    }, []);

    const handleOpen = () => {
      setOpen(false);
      document.body.style.overflow = "auto";
    };

    return (
      <AnimatePresence mode="wait" >
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // 🔥 TAMBAH INI
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm  md:backdrop-blur-md flex justify-center items-start md:items-center pt-32 md:pt-0 px-4"
          >
            {/* CARD POPUP */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97, y: 30 }} // 🔥 keluar turun dikit

              transition={{
                duration: open ? 0.6 : 1.5, // masuk lebih lama, keluar lebih pelan
                ease: "easeOut"
              }}

              className="bg-[#F4F1ED] rounded-xl md:rounded-2xl overflow-hidden w-[290px] h-[430px] md:w-[406px] md:h-[520px] shadow-xl flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[182px] md:h-[220px] overflow-hidden">
                <Image
                  src="/images/opening/Opening1.jpg"
                  alt="prewed"
                  fill
                  className="object-cover object-[50%_67%] md:object-[50%_70%] scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col items-center text-center px-4 pt-[21px] md:pt-[25px] pb-[30px] md:pb-[0px] flex-1 leading-none">
                <p className="text-[12px] md:text-[14px] text-[#202F26] font-sweetsans font-medium ">
                  THE WEDDING OF
                </p>

                <h1 className="text-[28px] md:text-[36px] text-[#202F26] pt-[14px] md:pt-[10px]">
                  IVAN & WINA
                </h1>

                <p className="text-[12px] md:text-[14px] text-[#202F26] font-sweetsans font-medium pt-[19px] md:pt-[22px]">
                  Dear Mr. / Mrs. / Ms.
                </p>

                <p className="text-[14px] md:text-[18px] font-medium font-sweetsans text-[#202F26] pt-[11px] md:pt-[13px]">
                  {namaTamu}
                </p>

                <p className="text-[9px] md:text-[12px]  text-[#202F26] font-sweetsans pt-[16px] md:pt-[23px]">
                  We sincerely apologize <br />
                  for any misspelling of names or titles.
                </p>

                <button
                  onClick={handleOpen}
                  className="bg-[#CB4F35] text-white w-[184px] h-[30px] md:w-[220px] md:h-[40px] rounded-full uppercase font-sweetsans font-medium text-[12px] md:text-[18px] mt-[15px] md:mt-[23px]"
                >
                  Open Invitation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )
        }
      </AnimatePresence >
    );
  };

  export default Opening;