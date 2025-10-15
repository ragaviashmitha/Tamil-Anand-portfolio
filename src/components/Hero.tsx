import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero pt-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      {/* Decorative Lines */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-px bg-gradient-to-l from-primary to-transparent mb-8"
            style={{ width: `${200 + i * 50}px` }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              TAMIL ANAND S
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              HAY! I'M TAMIL
              <br />
              <span className="text-primary text-glow">Accounts Assistant</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              M.Com graduate with 1 year of experience in Accounts, HR, and Banking.
              Skilled in financial analysis, HR management, and customer relations.
              Passionate about contributing effectively to organizational success.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button
                asChild
                size="lg"
                className="gradient-accent font-semibold group"
              >
                <a href="#contact">
                  GET IN TOUCH
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/Tamil-Anand-S/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Image Placeholder */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                <div className="w-32 h-32 rounded-full border-4 border-primary/20 border-t-primary animate-spin" style={{ animationDuration: '8s' }}></div>
              </div>
              <div className="absolute -left-8 bottom-12">
                <div className="w-24 h-24 rounded-full border-4 border-primary/20 border-b-primary animate-spin" style={{ animationDuration: '6s' }}></div>
              </div>
              
              {/* Professional Image Container */}
                <div className="relative h-full flex items-end justify-center">
                  <div className="text-center">
                    <div className="w-[320px] h-[320px] mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                      <img
                        src="src/assets/tamil_anand.png"
                        alt="Professional Photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">Tamil Anand</p>
                  </div>

                </div>

              </div>
            </div>
          </div>

        {/* Logo Ticker */}
        <div className="mt-20 pt-12 border-t border-border overflow-hidden">
          <div className="flex gap-12 animate-marquee">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                <div className="w-6 h-6 rounded bg-primary/20"></div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
