import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Calendar, 
  Briefcase, 
  MessageSquare, 
  Phone,
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

interface ContactButtonProps {
  type: "email" | "consultation" | "project" | "urgent" | "call";
  variant?: "default" | "premium" | "outline" | "glass";
  size?: "sm" | "default" | "lg";
  className?: string;
}

export function ContactButton({ type, variant = "premium", size = "default", className = "" }: ContactButtonProps) {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const contactActions = {
    email: {
      icon: Mail,
      label: "Send Email",
      subject: "General Inquiry",
      message: "Hello Ayoub,\n\nI would like to discuss...",
      toastTitle: "Email client opened"
    },
    consultation: {
      icon: Calendar,
      label: "Book Consultation",
      subject: "Consultation Request",
      message: "Hello Ayoub,\n\nI would like to book a consultation regarding...",
      toastTitle: "Consultation request sent"
    },
    project: {
      icon: Briefcase,
      label: "Discuss Project",
      subject: "Project Collaboration",
      message: "Hello Ayoub,\n\nI have a project opportunity that might interest you...",
      toastTitle: "Project inquiry sent"
    },
    urgent: {
      icon: Clock,
      label: "Urgent Request",
      subject: "URGENT: Immediate Assistance Needed",
      message: "Hello Ayoub,\n\nI need urgent assistance with...",
      toastTitle: "Urgent request sent"
    },
    call: {
      icon: Phone,
      label: "Request Call",
      subject: "Phone Call Request",
      message: "Hello Ayoub,\n\nI would prefer to discuss this over a phone call. My available times are...",
      toastTitle: "Call request sent"
    }
  };

  const handleClick = async () => {
    setIsProcessing(true);
    const action = contactActions[type];
    
    try {
      // Create mailto link
      const mailtoLink = `mailto:hammadyayoub@outlook.com?subject=${encodeURIComponent(action.subject)}&body=${encodeURIComponent(action.message)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show confirmation toast
      toast({
        title: action.toastTitle,
        description: "Your email client should open with a pre-filled message.",
        duration: 4000,
      });

      // Simulate email tracking (for your backend integration)
      console.log("Contact action:", {
        type,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: window.location.href
      });

    } catch (error) {
      console.error("Error opening email client:", error);
      toast({
        title: "Error",
        description: "Please copy this email: hammadyayoub@outlook.com",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setTimeout(() => setIsProcessing(false), 1000);
    }
  };

  const action = contactActions[type];
  const IconComponent = action.icon;

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      disabled={isProcessing}
      className={`group relative overflow-hidden ${className}`}
    >
      {isProcessing ? (
        <CheckCircle className="h-4 w-4 mr-2 animate-pulse" />
      ) : (
        <IconComponent className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
      )}
      {isProcessing ? "Processing..." : action.label}
      
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
    </Button>
  );
}

// Quick action buttons suite
export function ContactButtonSuite() {
  return (
    <div className="flex flex-wrap gap-3">
      <ContactButton type="email" variant="premium" />
      <ContactButton type="consultation" variant="outline" />
      <ContactButton type="project" variant="glass" />
      <ContactButton type="urgent" variant="default" size="sm" />
      <ContactButton type="call" variant="outline" size="sm" />
    </div>
  );
}

// Floating contact widget
export function FloatingContactWidget() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 p-4 bg-card border border-border rounded-lg shadow-lg animate-slide-up">
          <h4 className="font-semibold mb-3 text-sm">Quick Contact</h4>
          <div className="space-y-2">
            <ContactButton type="email" size="sm" className="w-full" />
            <ContactButton type="consultation" variant="outline" size="sm" className="w-full" />
            <ContactButton type="urgent" variant="glass" size="sm" className="w-full" />
          </div>
        </div>
      )}
      
      <Button
        variant="premium"
        size="lg"
        className="rounded-full shadow-glow hover:shadow-glow-lg"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <MessageSquare className="h-5 w-5" />
        ) : (
          <Send className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}