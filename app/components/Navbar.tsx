"use client";

export function Navbar() {
  return (
    <div className="w-fit fixed left-1/2  -translate-x-1/2 translate-y-1/2 flex items-center text-sm backdrop-blur-sm bg-[#ffffff3e] shadow-sm z-999
     text-black font-semibold border border-gray-400 px-1 py-1 rounded-full gap-1">

      <a href="#home" className="nav-btn">Home</a>
      <a href="#about" className="nav-btn">About me</a>
      <a href="#skills" className="nav-btn">Skills</a>
      <a href="#projects" className="nav-btn">Projects</a>
      <a href="#achievements" className="nav-btn">Achievements</a>
      <a href="#contact" className="nav-btn">Contact</a>
    </div>
  );
}
