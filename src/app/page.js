import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/navBar";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className=" relative w-screen min-h-screen md:min-h-[100vh]">
        <Image
          src='/images/Hero_photo.jpg'
          alt="hero photo"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority />
        <div className=" absolute h-screen  top-0 left-0 w-full z-20 ">
          <NavBar />
          <HeroSection />
        </div>
      </div>
      <div>
        <div>product view</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
}
