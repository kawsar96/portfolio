import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm open to new opportunities and collaborations. Feel free to reach
          out if you're looking for a passionate developer to join your team.
        </p>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 space-y-6 sm:space-y-0">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-primary" />
              <a
                href="mailto:kr96ahmed@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                kr96ahmed@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6 text-primary" />
              <a
                href="tel:+15147156904"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +1 514 715 6904
              </a>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-muted-foreground">
                Montreal, Quebec, Canada
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-10">
            <h4 className="text-lg font-medium mb-4">Let’s Connect</h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/kawsar-ahmed-a922a128a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/ahmed____kawsar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/evil017"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
