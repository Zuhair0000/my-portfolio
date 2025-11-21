import React from "react";
import SectionWrap from "./SectionWrap.js";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiFigma,
  SiPostman,
  SiTensorflow,
  SiKeras,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { BsLayoutTextWindow } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { VscCloud } from "react-icons/vsc";

interface TechItem {
  name: string;
  category: string;
  color: string;
  icon?: React.ReactNode;
}

const TechStack: React.FC = () => {
  const techStack: TechItem[] = [
    {
      name: "JavaScript",
      category: "Frontend",
      color: "from-yellow-400 to-yellow-600",
      icon: <SiJavascript size={30} />,
    },
    {
      name: "TypeScript",
      category: "Frontend",
      color: "from-blue-400 to-blue-600",
      icon: <SiTypescript size={30} />,
    },
    {
      name: "React.js",
      category: "Frontend",
      color: "from-cyan-400 to-cyan-600",
      icon: <SiReact size={30} />,
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      color: "from-teal-400 to-teal-600",
      icon: <SiTailwindcss size={30} />,
    },
    {
      name: "HTML5",
      category: "Frontend",
      color: "from-orange-400 to-orange-600",
      icon: <SiHtml5 size={30} />,
    },
    {
      name: "CSS3",
      category: "Frontend",
      color: "from-blue-300 to-blue-500",
      icon: <SiCss3 size={30} />,
    },
    {
      name: "Responsive Design",
      category: "Frontend",
      color: "from-purple-400 to-purple-600",
      icon: <BsLayoutTextWindow size={30} />,
    },

    {
      name: "Node.js",
      category: "Backend",
      color: "from-green-400 to-green-600",
      icon: <SiNodedotjs size={30} />,
    },
    {
      name: "Express.js",
      category: "Backend",
      color: "from-gray-400 to-gray-600",
      icon: <SiExpress size={30} />,
    },
    {
      name: "REST APIs",
      category: "Backend",
      color: "from-indigo-400 to-indigo-600",
      icon: <AiOutlineApi size={30} />,
    },
    {
      name: "Authentication (JWT, bcrypt)",
      category: "Backend",
      color: "from-rose-400 to-rose-600",
      icon: <MdSecurity size={30} />,
    },

    {
      name: "MySQL",
      category: "Database",
      color: "from-amber-400 to-amber-600",
      icon: <SiMysql size={30} />,
    },

    {
      name: "Docker",
      category: "DevOps",
      color: "from-sky-400 to-sky-600",
      icon: <SiDocker size={30} />,
    },
    {
      name: "Docker Compose",
      category: "DevOps",
      color: "from-sky-300 to-sky-500",
      icon: <SiDocker size={30} />,
    },
    {
      name: "GitHub Actions",
      category: "DevOps",
      color: "from-gray-300 to-gray-500",
      icon: <SiGithubactions size={30} />,
    },
    {
      name: "AWS",
      category: "Cloud",
      color: "from-orange-300 to-orange-500",
      icon: <VscCloud size={30} />,
    },
    {
      name: "Render / Cloud Hosting",
      category: "Cloud",
      color: "from-purple-300 to-purple-500",
      icon: <VscCloud size={30} />,
    },

    {
      name: "Git & GitHub",
      category: "Tools",
      color: "from-gray-500 to-gray-700",
      icon: <SiGithubactions size={30} />,
    },
    {
      name: "Postman",
      category: "Tools",
      color: "from-orange-400 to-orange-600",
      icon: <SiPostman size={30} />,
    },
    {
      name: "Figma",
      category: "Tools",
      color: "from-pink-300 to-pink-500",
      icon: <SiFigma size={30} />,
    },

    {
      name: "Machine Learning (Learning)",
      category: "AI",
      color: "from-emerald-400 to-emerald-600",
      icon: <SiTensorflow size={30} />,
    },
    {
      name: "Deep Learning (Learning)",
      category: "AI",
      color: "from-fuchsia-400 to-fuchsia-600",
      icon: <SiKeras size={30} />,
    },
    {
      name: "Model Deployment (Learning)",
      category: "AI",
      color: "from-red-400 to-red-600",
      icon: <FaServer size={30} />,
    },
  ];

  return (
    <SectionWrap
      id="stack"
      title="My Tech Stack"
      text="These are the technologies and tools I use to build modern, scalable, and responsive web applications. Each one represents a skill I’ve honed through hands-on experience and projects."
      className="bg-white"
    >
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] text-center">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className={`
              rounded-2xl p-4 text-white font-semibold
              bg-gradient-to-br ${tech.color}
              shadow-md hover:shadow-lg hover:scale-[1.02]
              transition-transform duration-300 ease-out
              flex flex-col items-center gap-2
            `}
          >
            {tech.icon && <div>{tech.icon}</div>}
            <p className="text-lg">{tech.name}</p>
            <p className="text-sm opacity-80">{tech.category}</p>
          </div>
        ))}
      </div>
    </SectionWrap>
  );
};

export default TechStack;
