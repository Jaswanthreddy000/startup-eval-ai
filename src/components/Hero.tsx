import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/ai-analyst-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-ai-surface to-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                AI Analyst for{" "}
                <span className="bg-gradient-to-r from-ai-primary to-ai-secondary bg-clip-text text-transparent">
                  Startup Evaluation
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform startup data into actionable deal notes in minutes. AI-powered analysis, 
                benchmarking, and collaboration tools for investors.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-ai-primary hover:bg-ai-primary-dark text-white font-semibold px-8 py-6 text-lg group"
              >
                Upload Deck
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-ai-primary text-ai-primary hover:bg-ai-primary hover:text-white px-8 py-6 text-lg group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8">
              <div className="text-sm text-muted-foreground">
                Trusted by 500+ investors
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-ai-success rounded-full"></div>
                <span className="text-sm text-muted-foreground">99.9% uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-ai-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">SOC2 compliant</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="AI Assistant analyzing startup data"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ai-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg border border-border">
              <div className="text-sm font-medium text-ai-success">Deal Score: 8.7/10</div>
              <div className="text-xs text-muted-foreground">High Growth Potential</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg border border-border">
              <div className="text-sm font-medium text-ai-primary">Analysis Complete</div>
              <div className="text-xs text-muted-foreground">2.3 minutes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;