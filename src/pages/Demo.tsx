import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  FileText, 
  BarChart3, 
  Users, 
  Target, 
  Play,
  Calendar,
  Video
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DemoPage = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze startup data and generate insights automatically.",
      status: "Live"
    },
    {
      icon: FileText,
      title: "Automated Deal Notes",
      description: "Generate comprehensive deal notes from pitch decks, transcripts, and documents in minutes.",
      status: "Live"
    },
    {
      icon: BarChart3,
      title: "Benchmarking Tools",
      description: "Compare startups against sector peers and industry averages with real-time data.",
      status: "Live"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time comments, notifications, and workflow management for investment teams.",
      status: "Live"
    },
    {
      icon: Target,
      title: "Predictive Success Score",
      description: "ML-powered predictions for Series A/B success likelihood based on historical data.",
      status: "Beta"
    },
    {
      icon: Brain,
      title: "Red Team Analysis",
      description: "AI evaluates potential risks and flags hidden issues in startup investments.",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Platform Features & Demo</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive suite of AI-powered tools for startup evaluation and investment analysis.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Demo Video Section */}
            <Card className="bg-gradient-to-br from-ai-primary to-ai-secondary text-white">
              <CardContent className="p-12 text-center">
                <div className="max-w-2xl mx-auto">
                  <Video className="h-16 w-16 mx-auto mb-6 opacity-90" />
                  <h2 className="text-3xl font-bold mb-4">See AI Analyst in Action</h2>
                  <p className="text-lg opacity-90 mb-8">
                    Watch how our platform transforms startup evaluation from hours to minutes with AI-powered analysis.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-ai-primary hover:bg-white/90">
                    <Play className="h-5 w-5 mr-2" />
                    Watch Demo Video
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div>
              <h2 className="text-2xl font-bold text-center mb-8">Platform Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <Card key={index} className="hover:shadow-medium transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-ai-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-ai-primary" />
                          </div>
                          <Badge 
                            variant={feature.status === "Live" ? "default" : feature.status === "Beta" ? "secondary" : "outline"}
                            className={
                              feature.status === "Live" 
                                ? "bg-ai-success text-white" 
                                : feature.status === "Beta"
                                ? "bg-ai-warning text-white"
                                : "border-ai-neutral text-ai-neutral"
                            }
                          >
                            {feature.status}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Demo CTA Section */}
            <Card>
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to See the Platform in Action?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Schedule a personalized demo with our team to see how AI Analyst can transform your startup evaluation process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-ai-primary hover:bg-ai-primary-dark">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Demo Call
                  </Button>
                  <Button variant="outline">
                    <Play className="h-4 w-4 mr-2" />
                    Try Interactive Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DemoPage;