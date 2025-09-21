import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight, Sparkles } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import heroBackground from "@/assets/hero-background.jpg";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-light/20 rounded-full animate-glow"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full animate-glow animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/20 rounded-full animate-glow animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-right">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-light animate-fade-in">
                <Sparkles className="h-5 w-5" />
                <span className="text-caption font-medium tracking-wide uppercase">
                  Multi-Disciplinary Professional
                </span>
              </div>
              
              <h1 className="text-display text-primary-foreground animate-slide-up">
                Ayoub
                <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                  Hammady
                </span>
              </h1>
              
              <div className="text-hero text-primary-foreground/90 animate-slide-up animation-delay-200">
                <span className="block">Jurist • LegalTech Founder</span>
                <span className="block">Full-Stack Developer • Artist</span>
              </div>
            </div>

            <p className="text-subheading text-primary-foreground/80 max-w-lg leading-relaxed animate-slide-up animation-delay-400">
              Bridging law, technology, and creativity to build innovative solutions 
              for the legal industry while exploring the intersection of compliance and AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover-lift group"
              >
                <Download className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Download CV
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover-lift group"
              >
                <Mail className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Contact Me
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20 animate-fade-in animation-delay-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">5+</div>
                <div className="text-caption text-primary-foreground/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">3</div>
                <div className="text-caption text-primary-foreground/70">Companies Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">10+</div>
                <div className="text-caption text-primary-foreground/70">Certifications</div>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative animate-scale-in animation-delay-400">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-secondary rounded-full opacity-20 animate-glow"></div>
              <div className="absolute -inset-2 bg-gradient-primary rounded-full opacity-30"></div>
              
              {/* Portrait Image */}
              <div className="relative rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-glow">
                <img
                  src={heroPortrait}
                  alt="Ayoub Hammady - Professional Portrait"
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary-foreground text-primary px-4 py-2 rounded-full shadow-elegant animate-scale-in animation-delay-1000">
                <span className="text-sm font-semibold">Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}