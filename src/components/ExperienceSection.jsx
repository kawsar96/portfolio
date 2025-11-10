export const ExperienceSection = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "B.A.N.G.L.A",
      period: "Montreal | Sep 2024 - Present",
      description:
        "Developing content-rich magazine applications, improving delivery speed and administrative control for cultural organizations.",
      responsibilities: [
        "Developed a content-rich magazine platform using Node.js (Express), improving article delivery speed and admin control features.",
        "Minimized page load time by 40% by applying lazy loading and optimized image delivery.",
        "Designed and integrated RESTful APIs for dynamic content management and user interactions.",
        "Collaborated with designers and content managers to ensure seamless UI/UX and content publishing workflow.",
      ],
    },
    {
      role: "Software Developer (Contract-based)",
      company: "Furnitex",
      period: "Dhaka | Sep 2024 - Jan 2025",
      description:
        "Developing scalable and modular backend solutions for e-commerce platforms, focusing on performance and user experience.",
      responsibilities: [
        "Engineered an e-commerce platform using Spring Boot, delivering a scalable, modular backend architecture.",
        "Reduced server response time by 35% by optimizing controller logic and SQL queries, resulting in a smoother user experience.",
        "Developed product recommendation and search features using SQL and caching strategies. ",
        "Collaborated in Agile sprints, performing code reviews and deploying updates via Docker and AWS EC2. ",
      ],
    },
    {
      role: "Web Developer",
      company: "Digital IT Gallery",
      period: "Dhaka | Dec 2020 - Dec 2021",
      description:
        "Built dynamic web applications and platforms for rental and e-commerce services, focusing on responsive design and optimized backend performance.",
      responsibilities: [
        "Increased user engagement by 25% by building a dynamic rental platform with Laravel and JavaScript, featuring responsive layouts and AI-driven recommendations.",
        "Optimized MySQL search queries, improving performance by 40%.",
        "Boosted e-commerce customer retention by 20% by enhancing WordPress features and streamlining user journeys.",
        "Developed and deployed the company's website 50% faster using Laravel, achieving page load times under 2 seconds.",
        "Reduced development time by 30% with Git version control and thorough documentation.",
        "Created responsive UIs with HTML, CSS, and JavaScript, increasing user engagement by 20%.",
        "Delivered 99% bug-free code through testing with Selenium, JUnit, Postman, and UAT.",
      ],
    },
    {
      role: "Web Developer",
      company: "Furnitex",
      period: "Dhaka | Mar 2020 - Nov 2020",
      description:
        "Maintained and enhanced company websites and digital presence, improving engagement and ensuring responsive design.",
      responsibilities: [
        "Enhanced corporate and management websites, increasing engagement by 15% through design improvements and analytics-based adjustments.",
        "Developed front-end features using HTML, CSS, and JavaScript, ensuring responsiveness across devices.",
        "Coordinated social media strategies using Meta Business Suite and Google Ads, boosting visibility and engagement.",
      ],
    },
    {
      role: "Web Application Developer",
      company: "Innovation IT Institute",
      period: "Dhaka | Sep 2019 - Feb 2020",
      description:
        "Developed internal management systems and company website with Laravel and PHP, focusing on user-centric design and seamless functionality.",
      responsibilities: [
        "Built internal management systems and company website using Laravel and PHP, focusing on user-centric design and seamless functionality.",
        "Developed web applications with PHP and MySQL, ensuring robust database interactions.",
        "Improved administrative efficiency by 50% through a student management system with Laravel and MySQL.",
        "Reduced revision cycles by 25% using Agile methodology and JIRA for requirement gathering.",
        "Performed extensive testing and debugging, increasing user satisfaction by 20% with smooth deployments.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-secondary relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="gradient-border p-6 rounded-xl card-hover transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-xl font-semibold">
                  {exp.role} —{" "}
                  <span className="text-primary">{exp.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>
              <p className="mt-3 text-muted-foreground text-left">
                {exp.description}
              </p>

              {/* Left-aligned bullet points */}
              <ul className="list-disc mt-4 pl-5 space-y-1 text-left text-muted-foreground">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
