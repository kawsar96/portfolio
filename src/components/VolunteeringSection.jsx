export const VolunteeringSection = () => {
  return (
    <section id="volunteering" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Volunteering & <span className="text-primary">Leadership</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Some of my community involvement and leadership contributions.
        </p>

        <div className="bg-card shadow-xs rounded-lg p-6 card-hover">
          <h3 className="text-xl font-semibold mb-1">Coordinator</h3>

          <p className="text-sm text-muted-foreground mb-3">
            Bangladeshi Graduate Student Association (BDGSA) – Concordia
            University
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed">
            In this role, I supported the Bangladeshi graduate student community
            at Concordia University by organizing events, coordinating meetings,
            and assisting in various student engagement activities. I worked
            closely with committee members to manage event logistics, encourage
            participation, and create a welcoming environment for both new and
            returning students.
          </p>
        </div>
      </div>
    </section>
  );
};
