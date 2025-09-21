import { 
  FileText, 
  BarChart3, 
  Target, 
  Thermometer, 
  TrendingUp, 
  Shield, 
  Users, 
  Bell 
} from "lucide-react";

const Capabilities = () => {
  const capabilities = [
    {
      icon: FileText,
      title: "Smart Data Ingestion",
      description: "Auto-extract metrics from pitch decks, transcripts, emails.",
      color: "text-ai-primary"
    },
    {
      icon: BarChart3,
      title: "Structured Deal Notes",
      description: "ARR, churn, TAM, customer growth summarized automatically.",
      color: "text-ai-secondary"
    },
    {
      icon: Target,
      title: "Sector & Geo Benchmarking",
      description: "Compare startup performance against peers (SaaS India vs US, FinTech, HealthTech, etc.)",
      color: "text-ai-accent"
    },
    {
      icon: Thermometer,
      title: "Deal Heatmap",
      description: "Visual scoring of Market, Team, Traction, Risk.",
      color: "text-ai-primary"
    },
    {
      icon: TrendingUp,
      title: "Predictive Success Score",
      description: "Likelihood of Series A/B success.",
      color: "text-ai-success"
    },
    {
      icon: Shield,
      title: "Red Team Analysis",
      description: "AI evaluates risks, flags hidden issues.",
      color: "text-ai-warning"
    },
    {
      icon: Users,
      title: "Collaborative Workflow",
      description: "Live comments, notifications, CRM/Notion integration.",
      color: "text-ai-secondary"
    },
    {
      icon: Bell,
      title: "Real-Time Alerts",
      description: "Instant updates when founders submit new metrics or risks detected.",
      color: "text-ai-accent"
    }
  ];

  return (
    <section className="py-20 bg-ai-surface/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Capabilities & How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI-powered tools that transform how investors analyze and evaluate startups
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-subtle hover:shadow-medium transition-all duration-300 border border-border group hover:border-ai-primary/20"
              >
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-ai-primary/10 to-ai-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-6 w-6 ${capability.color}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;