import { Clock, Network, Settings, Lock } from "lucide-react";
import dashboardImage from "@/assets/dashboard-mockup.jpg";

const PlatformHighlights = () => {
  const highlights = [
    {
      icon: Clock,
      title: "Automated Analysis",
      description: "Reduce manual deal review from 8–12 hours to minutes.",
      stat: "95% faster"
    },
    {
      icon: Network,
      title: "Network Effect",
      description: "Insights improve as more startups are analyzed → better benchmarking.",
      stat: "10,000+ deals"
    },
    {
      icon: Settings,
      title: "Customizable Dashboards",
      description: "Investor can select preferred metrics and risk weightages.",
      stat: "100% flexible"
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "Ingest private founder data securely → only authorized users see insights.",
      stat: "SOC2 compliant"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Platform Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for modern investors who demand speed, accuracy, and actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white to-ai-surface p-6 rounded-xl border border-border hover:border-ai-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ai-primary to-ai-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">
                          {highlight.title}
                        </h3>
                        <span className="text-sm font-bold text-ai-primary bg-ai-primary/10 px-2 py-1 rounded">
                          {highlight.stat}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img 
                src={dashboardImage} 
                alt="AI Analyst Dashboard with heatmaps and analytics"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ai-primary/10 to-transparent"></div>
            </div>
            
            {/* Floating Metrics */}
            <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg border border-border">
              <div className="text-xs font-medium text-ai-success">Live Updates</div>
              <div className="text-xs text-muted-foreground">3 new deals analyzed</div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg border border-border">
              <div className="text-xs font-medium text-ai-primary">Success Rate</div>
              <div className="text-xs text-muted-foreground">87% accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformHighlights;