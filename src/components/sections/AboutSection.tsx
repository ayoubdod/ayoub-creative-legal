import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Code, Palette, Briefcase, GraduationCap, Award } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Scale,
      title: "Legal Expertise",
      description: "Specialized in business law, GDPR compliance, and AI governance with deep regulatory knowledge."
    },
    {
      icon: Code,
      title: "Tech Innovation",
      description: "Self-taught full-stack developer creating LegalTech solutions and AI compliance platforms."
    },
    {
      icon: Palette,
      title: "Creative Vision",
      description: "Award-winning artist combining legal precision with creative design and visual communication."
    },
    {
      icon: Briefcase,
      title: "Entrepreneurship",
      description: "Founded multiple companies including Justia (LegalTech) and IN DETAIL (Creative Agency)."
    }
  ];

  const skills = [
    "Business Law", "GDPR Compliance", "AI Governance", "Full-Stack Development",
    "Legal Technology", "Data Protection", "Contract Law", "Graphic Design",
    "Project Management", "Strategic Consulting", "Digital Transformation"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            A unique blend of legal expertise, technological innovation, and artistic creativity, 
            dedicated to transforming the legal industry through cutting-edge solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Bio & Education */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="bg-card shadow-elegant hover-lift animate-slide-right">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary">Master in Digital Law</h4>
                    <p className="text-caption text-muted-foreground">University of Law</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Licence en Droit Privé</h4>
                    <p className="text-caption text-muted-foreground">Faculty of Law</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-elegant hover-lift animate-slide-right animation-delay-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">Recognition</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tamsna Painting Competition</span>
                    <Badge variant="secondary">2nd Place</Badge>
                  </div>
                  <p className="text-caption text-muted-foreground">
                    International recognition for artistic excellence in 2018
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="animate-slide-up">
              <p className="text-body mb-6 leading-relaxed">
                I am a multifaceted professional who bridges the gap between traditional legal practice 
                and modern technology. With a Master's in Digital Law and extensive experience in AI 
                compliance, I specialize in helping organizations navigate the complex landscape of 
                legal technology and data protection.
              </p>
              
              <p className="text-body mb-6 leading-relaxed">
                As a self-taught full-stack developer, I've founded several companies including Justia, 
                a comprehensive LegalTech platform, and IN DETAIL, a creative communication agency. 
                My unique background allows me to approach legal challenges with both analytical precision 
                and creative innovation.
              </p>

              <p className="text-body leading-relaxed">
                Beyond the professional realm, I'm a passionate artist who has competed internationally, 
                winning 2nd place at the Tamsna International Painting Competition. This creative foundation 
                informs my approach to problem-solving and design thinking in all my endeavors.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-2 gap-6 animate-slide-up animation-delay-400">
              {highlights.map((highlight, index) => (
                <Card key={highlight.title} className="bg-card shadow-elegant hover-lift group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-shadow">
                        <highlight.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{highlight.title}</h4>
                        <p className="text-caption text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skills */}
            <div className="animate-slide-up animation-delay-600">
              <h3 className="text-lg font-semibold mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}