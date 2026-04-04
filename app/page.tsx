import Hero from "@/components/sections/Hero"
import CountingDown from "@/components/sections/CountingDown"
import OrderOfEvents from "@/components/sections/OrderOfEvents"
import VenueDetails from "@/components/sections/VenueDetails"
import DressCode from "@/components/sections/DressCode"
import OurStory from "@/components/sections/OurStory"
import Rsvp from "@/components/sections/Rsvp"
import WeddingGift from "@/components/sections/WeddingGift"
import YourWishes from "@/components/sections/YourWishes"
import Faq from "@/components/sections/Faq"
import ThankYou from "@/components/sections/ThankYou"
import Opening from "@/components/popup/Opening"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import WishesCard from "@/components/popup/WishesCard"

export default function Home() {
  return (
    <>

    <Header />
     <Opening />

     <Hero />
     <CountingDown />
     <OrderOfEvents />
     <VenueDetails />
     <DressCode />
     <OurStory />
     <Rsvp />
     <WeddingGift />
     <YourWishes />
     <Faq />
     <ThankYou />

     <WishesCard />

    <Footer />
    </>
  );
}
