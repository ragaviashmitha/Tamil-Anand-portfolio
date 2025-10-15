import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "9025833982",
      href: "tel:9025833982",
    },
    {
      icon: Mail,
      label: "Email",
      value: "tamilanandsam@gmail.com",
      href: "mailto:tamilanandsam@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Tamil Anand S",
      href: "https://www.linkedin.com/in/Tamil-Anand-S/",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pollachi, Coimbatore - 642002",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            CONTACT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GET <span className="text-primary text-glow">IN TOUCH</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or questions. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="gradient-card border border-primary/20 rounded-2xl p-6 shadow-glass hover:shadow-hover transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center shrink-0">
                  <contact.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm uppercase text-primary mb-2">
                    {contact.label}
                  </h3>
                  {contact.href ? (
                    <Button
                      asChild
                      variant="link"
                      className="h-auto p-0 text-foreground hover:text-primary text-base"
                    >
                      <a
                        href={contact.href}
                        target={contact.label === "LinkedIn" ? "_blank" : undefined}
                        rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                      >
                        {contact.value}
                      </a>
                    </Button>
                  ) : (
                    <p className="text-muted-foreground">{contact.value}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="gradient-card border border-primary/20 rounded-2xl p-12 shadow-glass max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to <span className="text-primary">collaborate?</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Let's discuss how I can contribute to your organization's success in Accounts Assistant.
            </p>
            <Button
              asChild
              size="lg"
              className="gradient-accent font-semibold uppercase"
            >
              <a href="mailto:tamilanandsam@gmail.com">
                START A CONVERSATION
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
