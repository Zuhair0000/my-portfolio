import { useEffect, type ReactNode } from "react";
import { Code, Palette, Smartphone } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionWrap from "./SectionWrap.js";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function TiltCard({ children }: { children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement | null>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const heigth = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / heigth - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative bg-gradient-to-br from-blue-500 to-purple-600 h-80 rounded-2xl"
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <SectionWrap
      id="about"
      title="What I Do"
      text="I build responsive and engaging websites, crafting intuitive user interfaces that elevate the user experience. My work combines full-stack web development with thoughtful UI/UX design, ensuring functionality, performance, and visual appeal. With expertise in React.js, Node.js, MySQL, and modern tools like Tailwind CSS, Docker, and AWS, I deliver seamless, scalable digital solutions tailored to real-world needs — from local e-commerce platforms to mobile service-booking systems."
      className="bg-gray-50"
    >
      <div className="grid md:grid-cols-2  gap-8 lg:gap-12">
        <TiltCard>
          <div
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(75px)",
            }}
            className="absolute inset-4 group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              style={{
                transform: "translateZ(75px)",
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-10 h-10 text-white transform transition-transform duration-500  group-hover:rotate-360" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Web Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I build responsive and dynamic websites using modern tools like
                React.js and JavaScript to deliver seamless user experiences.
              </p>
            </div>
          </div>
        </TiltCard>

        <TiltCard>
          <div
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(75px)",
            }}
            className="absolute inset-4 group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-10 h-10 text-white transform transition-transform duration-500  group-hover:rotate-360" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                UX/UI Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I design intuitive and visually appealing interfaces, focusing
                on user needs and enhancing usability.
              </p>
            </div>
          </div>
        </TiltCard>
      </div>
    </SectionWrap>
  );
}
