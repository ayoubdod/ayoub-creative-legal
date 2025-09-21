import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ExternalLink } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "Holpag",
      position: "Legal Counsel",
      period: "2023 - Present",
      location: "Morocco",
      type: "Full-time",
      description: "Leading compliance initiatives, M&A transactions, and AI Privacy Impact Assessments (AIPD). Specializing in regulatory compliance and strategic legal advisory for tech companies.",
      highlights: [
        "AI Compliance & GDPR Implementation",
        "M&A Due Diligence & Contract Negotiation",
        "Privacy Impact Assessments (AIPD)",
        "Corporate Legal Strategy"
      ],
      technologies: ["Legal Tech", "GDPR", "AI Governance", "Contract Management"]
    },
    {
      company: "Justia",
      position: "Founder & CEO",
      period: "2022 - Present",
      location: "Morocco",
      type: "Entrepreneurship",
      description: "Founded and developed comprehensive LegalTech platforms JURE and JURIA, revolutionizing legal practice management and client services through innovative technology solutions.",
      highlights: [
        "Built JURE: Legal Practice Management Platform",
        "Developed JURIA: Client Portal & Legal Services",
        "End-to-end product development & strategy",
        "Team leadership & business development"
      ],
      technologies: ["Full-Stack Development", "SaaS", "Legal Tech", "Product Management"]
    },
    {
      company: "Independent Consultant",
      position: "AI Governance & Compliance Specialist",
      period: "2021 - Present",
      location: "Remote",
      type: "Consulting",
      description: "Providing specialized consulting on AI governance, regulatory compliance, and digital transformation for various organizations across different industries.",
      highlights: [
        "AI Risk Assessment & Mitigation",
        "GDPR & Data Protection Consulting",
        "Legal Technology Implementation",
        "Training & Workshop Facilitation"
      ],
      technologies: ["AI Ethics", "Risk Management", "Data Protection", "Legal Consulting"]
    },
    {
      company: "IN DETAIL",
      position: "Founder & Creative Director",
      period: "2020 - Present",
      location: "Morocco",
      type: "Creative Agency",
      description: "Established branding and communication agency combining legal expertise with creative design, serving clients across legal and corporate sectors.",
      highlights: [
        "Brand Strategy & Visual Identity",
        "Legal Marketing & Communication",
        "Creative Campaign Development",
        "Client Relationship Management"
      ],
      technologies: ["Graphic Design", "Brand Strategy", "Creative Direction", "Marketing"]
    },
    {
      company: "Yanvision",
      position: "Legal & Business Development",
      period: "2019 - 2021",
      location: "Morocco",
      type: "Contract",
      description: "Supported business expansion and legal operations while developing expertise in technology law and startup ecosystems.",
      highlights: [
        "Business Development Strategy",
        "Legal Operations Support",
        "Contract Review & Negotiation",
        "Startup Ecosystem Engagement"
      ],
      technologies: ["Business Law", "Startup Legal", "Operations", "Strategy"]
    },
    {
      company: "Lexologia",
      position: "Legal Research Associate",
      period: "2018 - 2019",
      location: "Morocco",
      type: "Research",
      description: "Conducted comprehensive legal research and analysis, contributing to publications and legal documentation in various practice areas.",
      highlights: [
        "Legal Research & Analysis",
        "Case Law Documentation",
        "Regulatory Compliance Research",
        "Legal Writing & Publications"
      ],
      technologies: ["Legal Research", "Legal Writing", "Regulatory Analysis", "Documentation"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            A progressive career path combining legal expertise with technological innovation 
            and entrepreneurial leadership across diverse industries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.company} className="relative animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-glow"></div>
                  
                  <Card className="ml-20 bg-card shadow-elegant hover-lift group">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Company Info */}
                        <div className="md:col-span-1">
                          <div className="flex items-center mb-2">
                            <Building className="h-5 w-5 text-primary mr-2" />
                            <h3 className="text-lg font-bold text-primary">{exp.company}</h3>
                          </div>
                          
                          <h4 className="font-semibold text-foreground mb-3">{exp.position}</h4>
                          
                          <div className="space-y-2 text-caption text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              {exp.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {exp.location}
                            </div>
                          </div>
                          
                          <Badge 
                            variant="secondary" 
                            className="mt-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          >
                            {exp.type}
                          </Badge>
                        </div>

                        {/* Description & Highlights */}
                        <div className="md:col-span-2">
                          <p className="text-body text-muted-foreground mb-4 leading-relaxed">
                            {exp.description}
                          </p>
                          
                          <div className="mb-4">
                            <h5 className="font-medium mb-2">Key Achievements</h5>
                            <ul className="space-y-1">
                              {exp.highlights.map((highlight, i) => (
                                <li key={i} className="text-caption text-muted-foreground flex items-start">
                                  <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2">Technologies & Skills</h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge 
                                  key={tech} 
                                  variant="outline" 
                                  className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <Card className="max-w-2xl mx-auto bg-gradient-card shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-heading mb-4">Want to Learn More?</h3>
              <p className="text-body text-muted-foreground mb-6">
                Explore my detailed professional background, certifications, and project portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow transition-shadow group"
                >
                  Download Full CV
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Schedule a Consultation
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}