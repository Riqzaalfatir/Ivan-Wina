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

export default function Home() {
  return (
    <>
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
    </>
  );
}
