import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Briefcase, Code, Palette, Users } from "lucide-react";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects", icon: Briefcase },
    { id: "legaltech", label: "LegalTech", icon: Code },
    { id: "creative", label: "Design", icon: Palette },
    { id: "associations", label: "Associations", icon: Users },
  ];

  const projects = [
    {
      id: 1,
      title: "JURE - Legal Practice Management",
      category: "legaltech",
      description: "Comprehensive SaaS platform for legal practice management, featuring case tracking, document management, client portal, and billing automation.",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "AWS"],
      status: "Live Product",
      featured: true,
      image: "/api/placeholder/600/400",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "JURIA - Client Legal Services Portal",
      category: "legaltech",
      description: "Client-facing platform providing legal consultation booking, document submission, case status tracking, and secure communication with legal professionals.",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "Stripe"],
      status: "In Development",
      featured: true,
      image: "/api/placeholder/600/400",
      links: {
        demo: "#"
      }
    },
    {
      id: 3,
      title: "AI Compliance Framework",
      category: "legaltech",
      description: "Comprehensive framework and tools for AI governance, risk assessment, and regulatory compliance tailored for European AI Act requirements.",
      technologies: ["Python", "FastAPI", "Machine Learning", "GDPR Tools"],
      status: "Consulting Project",
      featured: false,
      image: "/api/placeholder/600/400",
      links: {
        demo: "#"
      }
    },
    {
      id: 4,
      title: "IN DETAIL - Brand Identity System",
      category: "creative",
      description: "Complete brand identity and visual communication system for the creative agency, including logo design, brand guidelines, and marketing materials.",
      technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy"],
      status: "Completed",
      featured: true,
      image: "/api/placeholder/600/400",
      links: {
        demo: "#"
      }
    },
    {
      id: 5,
      title: "Legal Marketing Campaigns",
      category: "creative",
      description: "Strategic marketing and visual communication campaigns for legal firms, combining regulatory compliance with engaging design.",
      technologies: ["Graphic Design", "Content Strategy", "Digital Marketing"],
      status: "Ongoing",
      featured: false,
      image: "/api/placeholder/600/400",
      links: {
        demo: "#"
      }
    },
    {
      id: 6,
      title: "Enactus Leadership Program",
      category: "associations",
      description: "Led entrepreneurship and social impact initiatives, mentoring students in business development and sustainable project management.",
      technologies: ["Project Management", "Mentorship", "Social Impact"],
      status: "Leadership Role",
      featured: false,
      image: "/api/placeholder/600/400",
      links: {
        demo: "#"
      }
    },
    {
      id: 7,
      title: "YALDA Cultural Initiative",
      category: "associations",
      description: "Cultural and educational programs promoting legal awareness and artistic expression within the community.",
      technologies: ["Community Organizing", "Education", "Cultural Programming"],
      status: "Active Member",
      featured: false,
      image: "/api/placeholder/600/400",
      links: {
        demo: "#"
      }
    },
    {
      id: 8,
      title: "Plumartistes Art Collective",
      category: "associations",
      description: "Artistic collaboration and exhibition organization, promoting local artists and creative community development.",
      technologies: ["Art Curation", "Event Management", "Community Building"],
      status: "Co-Founder",
      featured: false,
      image: "/api/placeholder/600/400",
      links: {
        demo: "#"
      }
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading mb-4">
            Projects & <span className="bg-gradient-primary bg-clip-text text-transparent">Initiatives</span>
          </h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            A diverse portfolio spanning LegalTech innovation, creative design, 
            and community leadership across professional and artistic domains.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-card shadow-elegant hover-lift group animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-video bg-gradient-card flex items-center justify-center">
                    <div className="text-muted-foreground">
                      {/* Placeholder for project image */}
                      <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                        {project.category === 'legaltech' && <Code className="h-8 w-8" />}
                        {project.category === 'creative' && <Palette className="h-8 w-8" />}
                        {project.category === 'associations' && <Users className="h-8 w-8" />}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === 'Live Product' ? 'default' : 'secondary'}
                      className="bg-background/90 backdrop-blur-sm"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-caption text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    {project.links.demo && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="outline">
                        <Github className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in animation-delay-600">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 ${
                activeFilter === filter.id 
                  ? "bg-gradient-primary shadow-glow" 
                  : "hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              <filter.icon className="h-4 w-4" />
              <span>{filter.label}</span>
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-card shadow-elegant hover-lift group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-video bg-gradient-card flex items-center justify-center">
                  <div className="text-muted-foreground">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      {project.category === 'legaltech' && <Code className="h-6 w-6" />}
                      {project.category === 'creative' && <Palette className="h-6 w-6" />}
                      {project.category === 'associations' && <Users className="h-6 w-6" />}
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge 
                    variant="secondary"
                    className="bg-background/90 backdrop-blur-sm text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-caption text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 2).map(tech => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 2}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {project.links.demo && (
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View
                    </Button>
                  )}
                  {project.links.github && (
                    <Button size="sm" variant="outline">
                      <Github className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <Card className="max-w-2xl mx-auto bg-gradient-card shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-heading mb-4">Interested in Collaboration?</h3>
              <p className="text-body text-muted-foreground mb-6">
                Let's discuss how we can work together on innovative LegalTech solutions, 
                creative projects, or community initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary hover:shadow-glow">
                  Start a Project
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline">
                  View Full Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}