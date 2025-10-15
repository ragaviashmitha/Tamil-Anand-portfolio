import { 
  Calculator, 
  FileSpreadsheet, 
  Brain, 
  Users, 
  MessageCircle, 
  Coins,
  BarChart3,
  FileText,
  TrendingUp
} from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const services = [
    {
      icon: Calculator,
      title: "TALLY ERP",
      description: "Expert financial management and accounting software proficiency",
    },
    {
      icon: FileSpreadsheet,
      title: "ADVANCED EXCEL",
      description: "Complex data analysis and financial modeling expertise",
    },
    {
      icon: Users,
      title: "HR MANAGEMENT",
      description: "Comprehensive human resource operations and employee relations",
    },
    {
      icon: Brain,
      title: "ANALYTICAL SKILLS",
      description: "Strategic thinking and data-driven decision making",
    },
    {
      icon: BarChart3,
      title: "POWER BI",
      description: "Business intelligence and data visualization capabilities",
    },
    {
      icon: TrendingUp,
      title: "ACCOUNTS MANAGEMENT",
      description: "Accounts payable/receivable and financial reporting",
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary text-glow">SKILLS</span> 
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group gradient-card border border-primary/20 rounded-2xl p-8 shadow-glass hover:shadow-hover transition-all hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="relative">
                <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors uppercase">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Professional <span className="text-primary">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Diploma in Computer Professional - INET Technologies",
              "Net Banking Add-on Course - Bharathiar University",
              "CRM & HRM - Infosys Springboard",
              "Advanced Excel & Power BI - Great Learning",
            ].map((cert, index) => (
              <Card
                key={index}
                className="gradient-card border border-primary/20 rounded-xl p-4 shadow-glass hover:shadow-hover transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium">{cert}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
