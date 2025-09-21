import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Github,
  Send,
  Calendar,
  Briefcase,
  MessageSquare
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: ""
  });

  const projectTypes = [
    { id: "legal", label: "Legal Consultation", icon: Briefcase },
    { id: "legaltech", label: "LegalTech Development", icon: MessageSquare },
    { id: "creative", label: "Creative Design", icon: MessageSquare },
    { id: "consultation", label: "Strategy Consultation", icon: Calendar },
    { id: "other", label: "Other", icon: MessageSquare }
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ayoub.hammady@example.com",
      action: "mailto:ayoub.hammady@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 6XX XXX XXX",
      action: "tel:+212600000000"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Casablanca, Morocco",
      action: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/ayoub-hammady",
      color: "text-blue-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/ayoub.hammady",
      color: "text-pink-600"
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/ayoub-hammady",
      color: "text-gray-900 dark:text-gray-100"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative legal solutions, creative projects, 
            or strategic consulting? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-right">
            <Card className="bg-card shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Project Type Selection */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Project Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {projectTypes.map((type) => (
                        <label
                          key={type.id}
                          className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                            formData.projectType === type.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={type.id}
                            checked={formData.projectType === type.id}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <type.icon className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">{type.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your project"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me more about your project, timeline, and requirements..."
                      rows={6}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow group"
                    size="lg"
                  >
                    <Send className="h-5 w-5 mr-2 transition-transform group-hover:translate-x-1" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-slide-right animation-delay-200">
            {/* Contact Methods */}
            <Card className="bg-card shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.action}
                      className="flex items-center p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 group-hover:shadow-glow transition-shadow">
                        <method.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">{method.label}</div>
                        <div className="text-caption text-muted-foreground">{method.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-6">Connect Online</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
                    >
                      <social.icon className={`h-6 w-6 mb-2 ${social.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-xs font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-primary shadow-glow">
              <CardContent className="p-6 text-primary-foreground">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    variant="secondary"
                    className="w-full justify-start bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Consultation
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-full justify-start bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
                  >
                    <Briefcase className="h-4 w-4 mr-2" />
                    Send Project Brief
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-full justify-start bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    General Inquiry
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-card shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Availability</h3>
                  <Badge variant="default" className="bg-success">
                    Available
                  </Badge>
                </div>
                <p className="text-caption text-muted-foreground mb-4">
                  Currently accepting new projects and consultations. 
                  Typical response time: 24-48 hours.
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div>🕒 Business Hours: 9:00 - 18:00 (GMT+1)</div>
                  <div>🌍 Time Zone: Morocco (GMT+1)</div>
                  <div>🗣️ Languages: French, English, Arabic</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}