import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import {
  SiExpress,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// Icons mapped to skills
// Icons mapped to skills with brand colors
const skillIcons = {
  PHP: <FaPhp className="w-8 h-8" color="#777BB4" />, // PHP blue
  Laravel: <FaLaravel className="w-8 h-8" color="#FF2D20" />, // Laravel red
  Java: <FaJava className="w-8 h-8" color="#007396" />, // Java blue
  Springboot: <FaJava className="w-8 h-8" color="#6DB33F" />, // Spring green
  JavaScript: <SiJavascript className="w-8 h-8" color="#F7DF1E" />, // JS yellow
  "Node.js": <FaNodeJs className="w-8 h-8" color="#339933" />, // Node green
  Express: <SiExpress className="w-8 h-8" color="#339933" />, // Express black
  MySQL: <SiMysql className="w-8 h-8" color="#4479A1" />, // MySQL blue
  MongoDB: <SiMongodb className="w-8 h-8" color="#47A248" />, // Mongo green
  PostgreSQL: <SiPostgresql className="w-8 h-8" color="#336791" />, // Postgres blue
  SQLite: <SiSqlite className="w-8 h-8" color="#003B57" />, // SQLite blue
  "HTML/CSS": <FaHtml5 className="w-8 h-8" color="#E34F26" />, // HTML orange
  CSS: <FaHtml5 className="w-8 h-8" color="#1572B6" />, // CSS blue
  React: <FaReact className="w-8 h-8" color="#61DAFB" />, // React blue
  TypeScript: <SiTypescript className="w-8 h-8" color="#3178C6" />, // TypeScript blue
  "Tailwind CSS": <SiTailwindcss className="w-8 h-8" color="#06B6D4" />, // Tailwind blue
  "Git/GitHub": <FaGitAlt className="w-8 h-8" color="#F05032" />, // Git orange
  GitHub: <FaGitAlt className="w-8 h-8" color="#181717" />, // GitHub black
  JIRA: <SiJira className="w-8 h-8" color="#0052CC" />, // JIRA blue
  "VS Code": <VscCode className="w-8 h-8" color="#007ACC" />, // VSCode blue
  WordPress: <FaWordpress className="w-8 h-8" color="#21759B" />, // WP blue
  JUnit: <FiCode className="w-8 h-8" color="#25A162" />, // generic green
  Docker: <FaDocker className="w-8 h-8" color="#2496ED" />, // Docker blue
  AWS: <FaAws className="w-8 h-8" color="#FF9900" />, // AWS orange
  Postman: <SiPostman className="w-8 h-8" color="#FF6C37" />, // Postman orange
};

const skills = [
  { name: "PHP", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Springboot", category: "backend" },
  { name: "JavaScript", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "SQLite", category: "backend" },

  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  { name: "Git/GitHub", category: "tools" },
  { name: "JIRA", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "WordPress", category: "tools" },
  { name: "JUnit", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "Postman", category: "tools" },
];

const categories = ["all", "backend", "frontend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-5 rounded-lg shadow-xs card-hover flex flex-col items-center gap-3"
            >
              <div>{skillIcons[skill.name]}</div>

              <h3 className="font-semibold text-md text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
