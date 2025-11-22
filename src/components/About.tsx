import { useEffect, type ReactNode } from "react";
import { Code, Cpu, Palette, ServerCog, Smartphone } from "lucide-react";
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
      className="relative bg-gradient-to-br from-blue-500 to-purple-600 h-90 rounded-2xl"
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
      text="I build responsive and engaging websites, crafting intuitive user interfaces that elevate the user experience. My work combines full-stack web development, ensuring functionality, performance, and visual appeal. With expertise in React.js + Typescript, Node.js, MySQL, and modern tools like Tailwind CSS, Docker, cloud services, and AI / ML experimentation I deliver seamless, scalable digital solutions tailored to real-world needs."
      className="bg-gray-50"
    >
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
                React.js and TypeScript, delivering seamless user experiences.
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
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ServerCog className="w-10 h-10 text-white transform transition-transform duration-500 group-hover:rotate-180" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                DevOps & Deployment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I streamline deployment pipelines and maintain scalable
                infrastructure using Docker, Docker Compose, GitHub Actions,
                AWS, and cloud hosting solutions.
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
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500  rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-10 h-10 text-white transform transition-transform duration-500 group-hover:rotate-180" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI / ML (Learning)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I experiment with Machine Learning, Deep Learning, and Model
                Deployment to expand my skills beyond traditional web
                development.
              </p>
            </div>
          </div>
        </TiltCard>
      </div>
    </SectionWrap>
  );
}
