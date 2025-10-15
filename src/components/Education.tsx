import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Master of Commerce (M.Com)",
      institution: "SNMV College of Arts and Science, Coimbatore",
      period: "2022 - 2024",
      percentage: "81.6%",
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "SNMV College of Arts and Science, Coimbatore",
      period: "2019 - 2022",
      percentage: "78%",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            EDUCATION
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ACADEMIC <span className="text-primary text-glow">BACKGROUND</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="gradient-card border border-primary/20 rounded-2xl p-8 shadow-glass hover:shadow-hover transition-all hover:-translate-y-1"
            >
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-primary font-semibold uppercase">{edu.period}</span>
                    <span className="text-accent font-semibold">Grade: {edu.percentage}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
