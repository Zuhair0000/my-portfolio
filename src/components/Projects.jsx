import { useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionWrap from "./SectionWrap";
import HomePage from "../assets/Home.png";
import souqyemen from "../assets/souqyemen.png";
import carwash from "../assets/carwash.png";
import mini_ecommerce from "../assets/mini_ecommerce.png";
import ToDoApp from "../assets/todo.jpeg";
import narrativeStudio from "../assets/Narrative.png";

const projects = [
  {
    id: 1,
    title: "SouqYemen - Local E-Commerce Platform",
    description:
      "A full-stack local e-commerce platform for small businesses in Yemen. Features include customer and seller registration, role-based authentication, product listings, cart and checkout system, admin approval for sellers, promotional posts, and PayPal/mobile wallet payments.",
    image: souqyemen,
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
    technologies: ["React", "Node.js", "MySQL", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/Zuhair0000/mini-ecommerce",
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Simple To-Do Mobile App",
    description:
      "A mobile app built with React Native that allows users to manage tasks easily. Users can add new tasks, mark them as done, and delete them when no longer needed. Designed to practice the fundamentals of mobile development and state management.",
    image: ToDoApp,
    technologies: ["React Native"],
    githubUrl: "https://github.com/Zuhair0000/Simple-ToDo-App",
    category: "Mobile App",
  },
  {
    id: 6,
    title: "Narrative Studio - AI Story Generator",
    description:
      "A full-stack AI-powered story generation platform that allows users to create unique stories using OpenAI's API. Includes JWT-based authentication, credit-based usage system, PayPal integration for purchasing credits, and real-time credit updates. Built with a focus on smooth UX and secure backend operations.",
    image: narrativeStudio,
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
];

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

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
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
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
    </SectionWrap>
  );
}
