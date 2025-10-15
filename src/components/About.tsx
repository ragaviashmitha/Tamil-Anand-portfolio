import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import tamilPhoto from "@/assets/tamil.png";


const About = () => {
  const stats = [
    { value: "280+", label: "Google Review" },
    { value: "15+", label: "Years Experience" },
    { value: "49+", label: "Awards Winning" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20">
        <div className="w-48 h-48 rounded-full border-4 border-primary/20 border-l-primary animate-spin" style={{ animationDuration: '10s' }}></div>
      </div>
      <div className="absolute right-0 top-1/4 opacity-10">
        <div className="w-64 h-64 rounded-full border-4 border-primary/20 border-r-primary animate-spin" style={{ animationDuration: '12s' }}></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Professional Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              
              {/* Glass Card with Image */}
                   <div className="relative h-full flex items-end justify-center">
                  <div className="text-center">
                    <div className="w-[320px] h-[320px] mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                      <img
                        src={tamilPhoto}
                        alt="Professional Photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">Tamil Anand</p>
                  </div>

                </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              ABOUT US
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              As a dedicated M.Com graduate, I bring a strong foundation in finance, 
              accounting, and human resource management. My professional journey has 
              equipped me with hands-on experience in financial record-keeping, accounts 
              management, and HR operations.
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              I am passionate about leveraging my analytical skills and knowledge of modern 
              tools like Tally ERP, Advanced Excel, and Power BI to drive organizational 
              growth and efficiency in the finance sector.
            </p>

           

            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Pollachi, Coimbatore - 642002</span>
            </div>

            <Button className="gradient-accent font-semibold group">
              <a href="#contact" className="flex items-center">
                GET IN TOUCH
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
