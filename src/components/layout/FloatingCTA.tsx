import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Mail, Calendar, FileText } from "lucide-react";
import { ContactButtonSuite } from "@/components/contact/ContactButtons";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA when user scrolls past hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const actions = [
    {
      icon: Mail,
      label: "Contact",
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        setIsExpanded(false);
      }
    },
    {
      icon: Calendar,
      label: "Book Call",
      action: () => {
        // Handle booking action
        console.log("Book consultation");
        setIsExpanded(false);
      }
    },
    {
      icon: FileText,
      label: "Download CV",
      action: () => {
        // Handle CV download
        console.log("Download CV");
        setIsExpanded(false);
      }
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      {/* Enhanced Contact Menu */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 mb-4 animate-slide-up">
          <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-elegant p-4 min-w-[280px]">
            <h4 className="font-semibold mb-3 text-sm text-center">Quick Contact</h4>
            
            {/* Contact Button Suite */}
            <div className="space-y-2 mb-4">
              <ContactButtonSuite />
            </div>
            
            {/* Traditional Actions */}
            <div className="border-t border-border pt-3 space-y-1">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:bg-primary hover:text-primary-foreground"
                  onClick={action.action}
                >
                  <action.icon className="h-4 w-4 mr-3" />
                  {action.label}
                </Button>
              ))}
            </div>
            
            <div className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border text-center">
              💬 Choose your preferred way to connect
            </div>
          </div>
        </div>
      )}

      {/* Main CTA Button */}
      <Button
        size="lg"
        variant="premium"
        className="rounded-full shadow-lg hover:shadow-glow"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <X className="h-5 w-5" />
        ) : (
          <>
            <MessageSquare className="h-5 w-5 mr-2" />
            <span className="hidden sm:inline">Let's Talk</span>
          </>
        )}
      </Button>
    </div>
  );
}