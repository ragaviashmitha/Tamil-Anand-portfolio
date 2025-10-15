import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TA</span>
              </div>
              <span className="text-lg font-bold">TAMIL ANAND S</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Accounts Assistant
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/Tamil-Anand-S/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary border border-primary/20 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tamil Anand S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
