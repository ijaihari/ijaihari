import { TbExternalLink } from "react-icons/tb";
import { FaFilePdf, FaLinkedin, FaGithub } from "react-icons/fa6";
export function HeroSection() {
  return (
    <section className="flex items-center justify-center h-screen mx-auto">
      <div className="flex flex-col items-center justify-center py-20 leading-tight">
        <a href="" ><p className="flex items-center justify-center gap-1 pb-8 text-md font-semibold italic tracking-[-1px] underline text-black">Checkout my latest project <TbExternalLink /></p></a>
        <h2 className="font-bold text-4xl text-black tracking-[-2.5px]">Hello World, I'm JAI HARI</h2>
        <h1 className="font-bold text-[120px] pb-4 tracking-[-6px] gradient-text">A Data Analyst</h1>
        <h2 className="text-gray-600 text-lg pb-6 font-semibold tracking-tight italic">"I uncover patterns, build visual stories, and help transform data into confident decisions"</h2>
        <div className="grid grid-cols-3 gap-4 py-6 text-md">
          <a href="https://www.jaihari.dev" target="_blank"><button className="hero-links"><FaFilePdf /> Resume</button></a>
          <a href="https://www.linkedin.com/in/jaihari/" target="_blank"><button className="hero-links"><FaLinkedin/>LinkedIn</button></a>
          <a href="https://github.com/ijaihari" target="_blank"><button className="hero-links"><FaGithub/>GitHub</button></a>
        </div>
      </div>
    </section>
  );
}
