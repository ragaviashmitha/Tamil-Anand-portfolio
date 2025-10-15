import { Briefcase, FileText, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const projects = [
   
    {
      title: "Agricultural Cooperative",
      category: "Internship",
      description: "Primary Agricultural Society",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Research Analysis",
      category: "Academic Project",
      description: "Newspaper Reading Behaviour Study",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            MY WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            EXP<span className="text-primary text-glow">ERIEANCE</span>
          </h2>
        </div>



        {/* Experience Details */}
        <div className="mt-20 max-w-4xl mx-auto space-y-6">
          <Card className="gradient-card border border-primary/20 rounded-2xl p-8 shadow-glass">
            <div className="flex gap-6">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center">
                  <Briefcase className="h-8 w-8" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Accounts & HR Assistant</h3>
                <p className="text-primary font-semibold mb-2">
                  CAG Construction Equipment Pvt. Ltd.
                </p>
                <p className="text-muted-foreground mb-4">June 2024 - Present</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Maintained accurate financial records and documentation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Managed accounts payable and receivable processes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>Prepared comprehensive financial reports for management</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

       <div className="text-center mb-16 mt-20">
  <h2 className="text-4xl md:text-5xl font-bold mb-4">
    INTERNSHIP<span className="text-primary text-glow"> & </span>PROJECTS
  </h2>
</div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group gradient-card border border-primary/20 rounded-2xl overflow-hidden shadow-glass hover:shadow-hover transition-all hover:-translate-y-2 cursor-pointer"
            >
                
              <div className="p-6">
                <p className="text-xs text-primary font-semibold uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
               
              </div>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Experience;
