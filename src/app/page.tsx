import ActiveProcess from "@/components/Activeprocess";
import Bestfoodyproduct from "@/components/Bestfoodyproduct";
import Blog from "@/components/Blog";
import Chefs from "@/components/Chefs";
import Foodcatr from "@/components/Foodcatr";
import HeroSection from "@/components/Hero";
// import Nav from "@/components/Nav";
import Ourmenu from "@/components/Ourmenu";
import Review from "@/components/Review";
import Testi from "@/components/Testi";
import Whyus from "@/components/Whyus";

export default function Home() {
  return (
    <div className="bg-black">
      {/* <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head> */}
     {/* <Nav/> */}
     <div className="bg-[#0D0D0DF2]">

     <HeroSection/>
     <Bestfoodyproduct/>
    <Foodcatr/>
    <Whyus/>
    <Review/>
    <Ourmenu/>
    <Chefs/>
    <Testi/>
    <ActiveProcess/>
    <Blog/>
     </div>

    </div>
  );
}
