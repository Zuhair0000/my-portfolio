import { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const COLORS = ["#38BDF8", "#22D3EE", "#818CF8"];
  const color = useMotionValue(COLORS[0]);
  // const backgroundImage = useMotionTemplate`radial-gradient(110% 140% at 50% 0%, #303234 50%, ${color})`;
  const border = useMotionTemplate`1 solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      ref={target}
      style={{ scale, opacity }}
      className="min-h-screen flex items-center justify-center text-white relative overflow-hidden"
    >
      <img src="/bg.png" className="absolute w-full h-full object-cover" />

      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>

      <motion.div
        style={{
          y,
        }}
        className="max-w-6xl mx-3 md:mx-auto px-4 md:px-8 text-center my-40 md:my-7 backdrop-blur-2xl rounded-2xl relative z-10"
      >
        <div data-aos="fade-up">
          <h1 className="text-5xl mt-10 md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
            ZUHAIR AHMED
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Developer & UI/UX Designer creating digital experiences
            that matter
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 transform hover:-translate-y-1"
            >
              View My Work
            </motion.button>
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white/30 hover:border-white text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              Get In Touch
            </motion.button>
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
          className="absolute left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("about")}
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </motion.div>
    </motion.section>
  );
}
