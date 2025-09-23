import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
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
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Building
} from "lucide-react";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
    timeline: "",
    priority: "medium"
  });

  const projectTypes = [
    { 
      id: "legal", 
      label: "Legal Consultation", 
      icon: Briefcase,
      description: "Legal advice, compliance, contract review"
    },
    { 
      id: "legaltech", 
      label: "LegalTech Development", 
      icon: MessageSquare,
      description: "AI solutions, legal software, automation"
    },
    { 
      id: "creative", 
      label: "Creative & Design", 
      icon: MessageSquare,
      description: "Branding, graphic design, artistic projects"
    },
    { 
      id: "consultation", 
      label: "Strategy Consultation", 
      icon: Calendar,
      description: "Business strategy, digital transformation"
    },
    { 
      id: "partnership", 
      label: "Partnership", 
      icon: Building,
      description: "Business partnerships, collaborations"
    },
    { 
      id: "other", 
      label: "Other", 
      icon: MessageSquare,
      description: "General inquiries and custom requests"
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hammadyayoub@outlook.com",
      action: "mailto:hammadyayoub@outlook.com",
      description: "Primary contact for all inquiries"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 6XX XXX XXX",
      action: "tel:+212600000000",
      description: "Available during business hours"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Casablanca, Morocco",
      action: "#",
      description: "GMT+1 timezone"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email content
      const emailData = {
        to: "hammadyayoub@outlook.com",
        subject: `New Contact Request: ${formData.subject}`,
        type: formData.projectType,
        formData: formData,
        timestamp: new Date().toISOString()
      };

      // Simulate email sending (replace with your backend API)
      console.log("Sending email to:", emailData);
      
      // Create confirmation email for user
      const confirmationData = {
        to: formData.email,
        subject: "Thank you for contacting Ayoub Hammady",
        name: formData.name,
        projectType: formData.projectType,
        timestamp: new Date().toISOString()
      };

      console.log("Sending confirmation to:", confirmationData);

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: `Thank you ${formData.name}! I'll get back to you within 24-48 hours.`,
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        projectType: "",
        budget: "",
        timeline: "",
        priority: "medium"
      });

    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly at hammadyayoub@outlook.com",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
                    <label className="text-sm font-medium mb-3 block">Project Type *</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {projectTypes.map((type) => (
                        <label
                          key={type.id}
                          className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                            formData.projectType === type.id
                              ? "border-primary bg-primary/5 shadow-md"
                              : "border-border hover:border-primary/50 hover:bg-primary/2"
                          }`}
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={type.id}
                            checked={formData.projectType === type.id}
                            onChange={handleInputChange}
                            className="sr-only"
                            required
                          />
                          <type.icon className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-medium text-sm">{type.label}</div>
                            <div className="text-xs text-muted-foreground mt-1">{type.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="transition-all duration-200 focus:scale-105"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="transition-all duration-200 focus:scale-105"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company (Optional)</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="transition-all duration-200 focus:scale-105"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone (Optional)</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+212 6XX XXX XXX"
                        className="transition-all duration-200 focus:scale-105"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject *</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your project or inquiry"
                      required
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Budget Range (Optional)</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-border rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under €5,000</option>
                        <option value="5k-15k">€5,000 - €15,000</option>
                        <option value="15k-50k">€15,000 - €50,000</option>
                        <option value="50k-plus">€50,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Timeline (Optional)</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-border rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="6-months">Within 6 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Priority Level */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Priority Level</label>
                    <div className="flex gap-4">
                      {[
                        { value: "low", label: "Low", color: "text-green-600" },
                        { value: "medium", label: "Medium", color: "text-yellow-600" },
                        { value: "high", label: "High", color: "text-red-600" }
                      ].map((priority) => (
                        <label
                          key={priority.value}
                          className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                            formData.priority === priority.value
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="priority"
                            value={priority.value}
                            checked={formData.priority === priority.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`w-3 h-3 rounded-full mr-2 ${
                            priority.value === "low" ? "bg-green-500" :
                            priority.value === "medium" ? "bg-yellow-500" : "bg-red-500"
                          }`} />
                          <span className={`text-sm font-medium ${priority.color}`}>
                            {priority.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please provide details about your project, requirements, timeline, and any specific questions you have..."
                      rows={6}
                      required
                      className="transition-all duration-200 focus:scale-105 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="premium"
                    className="w-full group relative overflow-hidden"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="h-5 w-5 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2 transition-transform group-hover:translate-x-1" />
                        Send Message
                      </>
                    )}
                    
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                  </Button>

                  {/* Form Footer */}
                  <div className="text-center text-xs text-muted-foreground">
                    <p>🔒 Your information is secure and will only be used to respond to your inquiry.</p>
                    <p>⚡ Typical response time: 24-48 hours | Urgent requests: 2-4 hours</p>
                  </div>
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
                        <div className="text-xs text-muted-foreground mt-1">{method.description}</div>
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