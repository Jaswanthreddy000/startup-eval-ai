import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, BarChart3, TrendingUp, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UploadPage = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const metrics = [
    { label: "ARR Growth", value: "180%", icon: TrendingUp, color: "text-ai-success" },
    { label: "Churn Rate", value: "3.2%", icon: BarChart3, color: "text-ai-warning" },
    { label: "Customer Growth", value: "+120%", icon: Users, color: "text-ai-success" },
    { label: "TAM Estimate", value: "$500M", icon: BarChart3, color: "text-ai-primary" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Upload & Analyze</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload startup pitch decks, call transcripts, and documents for AI-powered analysis.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Upload Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Document Upload
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-ai-primary transition-colors">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Drag and drop your files here</h3>
                  <p className="text-muted-foreground mb-4">
                    Supported formats: PDF, DOCX, TXT (max 10MB)
                  </p>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Browse Files
                  </Button>
                </div>
                
                <div className="mt-6 text-center">
                  <Button 
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="bg-ai-primary hover:bg-ai-primary-dark px-8"
                  >
                    {isAnalyzing ? "Analyzing..." : "Analyze Document"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            {showResults && (
              <Card>
                <CardHeader>
                  <CardTitle>Analysis Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {metrics.map((metric) => {
                      const IconComponent = metric.icon;
                      return (
                        <div key={metric.label} className="flex items-center p-4 bg-ai-surface rounded-lg">
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-subtle">
                            <IconComponent className={`h-6 w-6 ${metric.color}`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{metric.label}</h3>
                            <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button variant="outline" onClick={() => setShowResults(false)}>
                      Analyze Another File
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UploadPage;