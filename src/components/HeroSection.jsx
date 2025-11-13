import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">
        {/* Left Side - Text */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Kawsar
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Ahmed
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
            Software Developer with 3 years of experience in real estate,
            e-commerce, and education. Master's in Software Engineering from
            Concordia University. Skilled in Laravel, Node.js, JavaScript, Java,
            and React, with a focus on building user-centered, efficient
            applications.
          </p>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="/Kawsar_Ahmed_CV.pdf"
              download="Kawsar_Ahmed_CV.pdf"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side - Floating Circular Photo Card */}
        <div className="flex justify-center md:justify-end animate-fade-in-delay-5">
          <div className="relative rounded-full border-4 border-primary/40 shadow-xl hover:shadow-primary/40 transition-all duration-500 animate-float">
            <div className="bg-card/50 backdrop-blur-sm p-2 rounded-full">
              <img
                src="/images/kawsar.png" // 👈 replace with your image path
                alt="Kawsar Ahmed"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-primary/30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
