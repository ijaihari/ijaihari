import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="h-fit">
      <Navbar />
      <HeroSection />
    </div>
  );
}
