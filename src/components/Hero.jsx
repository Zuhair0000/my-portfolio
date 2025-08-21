import { useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400/10 via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center relative z-10">
        <div data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
            ZUHAIR AHMED
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Developer, App Developer & UI/UX Designer creating
            digital experiences that matter
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white/30 hover:border-white text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/Zuhair0000"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/zuhairhassan52/"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("about")}
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
}
