export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Education
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A strong academic foundation in software engineering has shaped how I
          approach problem-solving, architecture, and system design.
        </p>

        <div className="space-y-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold">
              Master of Engineering, Software Engineering
            </h3>
            <p className="text-muted-foreground mt-1">
              Concordia University, Montreal, Canada
            </p>
            <p className="text-sm text-muted-foreground mt-1">2022 - 2024</p>
            <p className="mt-4 text-foreground">
              Focused on software design, data management, and web application
              development. Completed projects in requirements engineering,
              scalable system architecture, and full-stack application design.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold">
              Bachelor of Science, Computer Science & Engineering
            </h3>
            <p className="text-muted-foreground mt-1">
              American International University - Bangladesh (AIUB)
            </p>
            <p className="text-sm text-muted-foreground mt-1">2016 - 2020</p>
            <p className="mt-4 text-foreground">
              Developed a strong foundation in algorithms, software development,
              and database systems while leading multiple team-based coding
              projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
