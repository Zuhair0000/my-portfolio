import { useEffect } from "react";
import { Code, Palette, Smartphone } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionWrap from "./SectionWrap";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <SectionWrap
      id="about"
      title="What I Do"
      text="I create responsive and engaging websites while designing intuitive user interfaces that enhance user experiences. My work blends web development with UI/UX design, focusing on functionality, aesthetics, and delivering seamless digital solutions tailored to users' needs."
      className="bg-gray-50"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        <div
          className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-10 h-10 text-white" />
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

        <div
          className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Palette className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              UX/UI Design
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I design intuitive and visually appealing interfaces, focusing on
              user needs and enhancing usability.
            </p>
          </div>
        </div>

        <div
          className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              App Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I develop cross-platform mobile applications using React Native,
              creating native-like experiences for both iOS and Android
              platforms.
            </p>
          </div>
        </div>
      </div>
    </SectionWrap>
  );
}
