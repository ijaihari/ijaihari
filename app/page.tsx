import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className=" h-[2000px]">
      <Navbar />
      <HeroSection />
    </div>
  );
}
