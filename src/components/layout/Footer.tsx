import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Heart, Scale, Code, Palette } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Art Gallery", href: "#art" },
    { label: "Contact", href: "#contact" }
  ];

  const specialties = [
    { icon: Scale, label: "Legal Tech" },
    { icon: Code, label: "Development" },
    { icon: Palette, label: "Art & Design" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Ayoub Hammady
            </h3>
            <p className="text-body text-muted-foreground mb-6 leading-relaxed">
              Bridging law, technology, and creativity to build innovative solutions 
              for the legal industry while exploring the intersection of compliance and AI.
            </p>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty, index) => (
                <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                  <specialty.icon className="h-3 w-3" />
                  <span>{specialty.label}</span>
                </Badge>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-caption text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-caption text-muted-foreground">
              <li>Legal Consultation</li>
              <li>AI Compliance</li>
              <li>LegalTech Development</li>
              <li>Creative Design</li>
              <li>Strategic Consulting</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-caption text-muted-foreground">
            © {currentYear} Ayoub Hammady. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-caption text-muted-foreground mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>in Morocco</span>
          </div>
        </div>
      </div>
    </footer>
  );
}