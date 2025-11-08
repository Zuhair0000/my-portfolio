import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionWrap from "./SectionWrap.js";
import HomePage from "../assets/Home.png";
import souqyemen from "../assets/souqyemen.png";
import carwash from "../assets/carwash.png";
import mini_ecommerce from "../assets/mini_ecommerce.png";
import narrativeStudio from "../assets/Narrative.png";
import souq1 from "../assets/souqYemen/souq1.png";
import souq2 from "../assets/souqYemen/souq2.png";
import souq3 from "../assets/souqYemen/souq3.png";
import souq4 from "../assets/souqYemen/souq4.png";
import blog1 from "../assets/blogApp/blog1.png";
import blog2 from "../assets/blogApp/blog2.png";
import blog3 from "../assets/blogApp/blog3.png";
import blog4 from "../assets/blogApp/blog4.png";
import ecommerce2 from "../assets/miniEcommerce/ecommerce-2.png";
import ecommerce3 from "../assets/miniEcommerce/ecommerce-3.png";
import ecommerce4 from "../assets/miniEcommerce/ecommerce-4.png";
import ecommerce5 from "../assets/miniEcommerce/ecommerce-5.png";
import ecommerce6 from "../assets/miniEcommerce/ecommerce-6.png";
import ecommerce7 from "../assets/miniEcommerce/ecommerce-7.png";
import narrative1 from "../assets/narrative/narrative1.png";
import narrative2 from "../assets/narrative/narrative2.png";
import narrative3 from "../assets/narrative/narrative3.png";
import narrative4 from "../assets/narrative/narrative4.png";
import carwash1 from "../assets/carwash/carwash1.png";
import carwash2 from "../assets/carwash/carwash2.png";
import carwash3 from "../assets/carwash/carwash3.png";
import carwash4 from "../assets/carwash/carwash4.png";
import carwash5 from "../assets/carwash/carwash5.png";
import carwash6 from "../assets/carwash/carwash6.png";
import carwash7 from "../assets/carwash/carwash7.png";
import hive1 from "../assets/hiveContent/hive1.png";
import hive2 from "../assets/hiveContent/hive2.png";
import hive3 from "../assets/hiveContent/hive3.png";
import hive4 from "../assets/hiveContent/hive4.png";
import hive5 from "../assets/hiveContent/hive5.png";
import hive6 from "../assets/hiveContent/hive6.png";

const projects = [
  {
    id: 1,
    title: "SouqYemen - Local E-Commerce Platform",
    description:
      "A full-stack local e-commerce platform for small businesses in Yemen. Features include customer and seller registration, role-based authentication, product listings, cart and checkout system, admin approval for sellers, promotional posts, and PayPal/mobile wallet payments.",
    image: souqyemen,
    images: [souq1, souq2, souq3, souq4],
    technologies: [
      "React",
      "Node.js",
      "MySQL",
      "JWT",
      "Tailwind CSS",
      "Socket.io",
    ],
    githubUrl: "https://github.com/Zuhair0000/souqyemen",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Car Wash Management System",
    description:
      "A complete management system for car wash businesses with booking management, customer database, service tracking, and invoice generation. Includes role-based dashboards for admins, staff, and customers.",
    image: carwash,
    images: [
      carwash1,
      carwash2,
      carwash3,
      carwash4,
      carwash5,
      carwash6,
      carwash7,
    ],
    technologies: ["React", "Node.js", "MySQL", "CSS"],
    githubUrl: "https://github.com/Zuhair0000/auto-detailing-app",
    category: "Full Stack",
  },

  {
    id: 3,
    title: "Simple Blog App",
    description:
      "A full-stack blog application with JWT-based authentication, blog post CRUD functionality, and a public feed for reading posts. Built to practice MERN-style development concepts.",
    image: HomePage,
    images: [blog1, blog2, blog3, blog4],
    technologies: ["React", "Node.js", "MySQL", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/Zuhair0000/Simple_Blog_App",
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Mini e-commerce",
    description:
      "A full-stack mini e-commerce application with JWT-based authentication, product CRUD functionality, and an admin dashboard for managing products. Built to practice React, Node.js, and MySQL full-stack development.",
    image: mini_ecommerce,
    images: [
      ecommerce2,
      ecommerce3,
      ecommerce4,
      ecommerce5,
      ecommerce6,
      ecommerce7,
    ],
    technologies: ["React", "Node.js", "MySQL", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/Zuhair0000/mini-ecommerce",
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Narrative Studio - AI Story Generator",
    description:
      "A full-stack AI-powered story generation platform that allows users to create unique stories using OpenAI's API. Includes JWT-based authentication, credit-based usage system, PayPal integration for purchasing credits, and real-time credit updates. Built with a focus on smooth UX and secure backend operations.",
    image: narrativeStudio,
    images: [narrative1, narrative2, narrative3, narrative4],
    technologies: [
      "React",
      "Node.js",
      "MySQL",
      "JWT",
      "Tailwind CSS",
      "OpenAI API",
      "PayPal API",
    ],
    githubUrl: "https://github.com/Zuhair0000/Narrative-Studio",
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Hive Content",
    description:
      "A full-stack AI-powered content generation platform that allows users to create unique content using Gemini's API. Includes JWT-based authentication, credit-based usage system, PayPal integration for purchasing credits, and real-time credit updates. Built with a focus on smooth UX and secure backend operations.",
    image: hive1,
    images: [hive1, hive2, hive3, hive4, hive5, hive6],
    technologies: [
      "React",
      "Node.js",
      "MySQL",
      "JWT",
      "Tailwind CSS",
      "Gemini API",
    ],
    githubUrl: "https://github.com/Zuhair0000/Content-Plan-Generator",
    category: "Full Stack",
  },
];

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  technologies: string[];
  githubUrl: string;
  category: string;
};

export default function Projects() {
  const [formData, setFormData] = useState<Project | null>(null);
  const [isOpen, setIsopen] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  const handleModal = (
    e: React.MouseEvent<HTMLDivElement | null>,
    item: Project
  ) => {
    e.preventDefault();
    setIsopen(true);
    setFormData({ ...item });
  };
  const handleCloseModal = () => {
    setIsopen(false);
    setFormData(null);
  };

  return (
    <SectionWrap
      id="projects"
      title="My Projects"
      text="Here are some of my recent projects that showcase my skills in web development, UI/UX design, and problem-solving. Each project represents a unique challenge and learning experience."
      className="bg-white"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-gray-100"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={(e) => handleModal(e, project)}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <a
                    href={project.githubUrl}
                    className="flex-1 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600  text-white px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 hover:animate-pulse"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  className="flex-1 bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Github className="w-4 h-4" />
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div
        className="text-center mt-12"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <a
          href="https://github.com/Zuhair0000"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
        >
          View All Projects
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center bg-black/70 justify-center backdrop-blur-2xl overflow-auto py-10 text-white">
          <div className="relative border p-6 sm:p-8 border-white w-[85%] my-auto rounded-2xl">
            <div className="flex overflow-x-auto gap-4  hide-scrollbar">
              {formData?.images.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  className="w-full sm:w-auto h-50 sm:h-120 object-cover rounded-2xl flex-shrink-0"
                />
              ))}
            </div>
            <div className="text-center my-5">
              <h1 className="text-3xl font-bold mb-5">{formData?.title}</h1>
              <p className="text-lg">{formData?.description}</p>
              <div className="flex flex-wrap gap-2 my-4 justify-center items-center">
                {formData?.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 hover:animate-pulse"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center sm:space-x-3 gap-3 pt-4">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2.5 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </SectionWrap>
  );
}
