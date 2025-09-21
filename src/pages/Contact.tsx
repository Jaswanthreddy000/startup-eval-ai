import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github,
  Send
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@aianalyst.com",
      link: "mailto:hello@aianalyst.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Innovation Drive, San Francisco, CA 94105",
      link: null
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your startup evaluation process? Contact our team for a personalized demo.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@company.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Investment Firm" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your startup evaluation process and how we can help..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full bg-ai-primary hover:bg-ai-primary-dark">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-ai-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-5 w-5 text-ai-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{item.label}</h3>
                            {item.link ? (
                              <a 
                                href={item.link} 
                                className="text-muted-foreground hover:text-ai-primary transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{item.value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.href}
                            className="w-10 h-10 bg-ai-primary/10 rounded-lg flex items-center justify-center hover:bg-ai-primary hover:text-white transition-colors"
                            aria-label={social.label}
                          >
                            <IconComponent className="h-5 w-5" />
                          </a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-ai-primary to-ai-secondary text-white">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">Schedule a Demo</h3>
                    <p className="text-white/90 mb-4">
                      See how AI Analyst can transform your investment process in just 30 minutes.
                    </p>
                    <Button variant="secondary" className="bg-white text-ai-primary hover:bg-white/90">
                      Book Demo Call
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;