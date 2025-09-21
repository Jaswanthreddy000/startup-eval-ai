import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DealNotesPage = () => {
  const heatmapData = [
    { category: "Market", score: 85, color: "bg-ai-success" },
    { category: "Team", score: 92, color: "bg-ai-success" },
    { category: "Traction", score: 78, color: "bg-ai-warning" },
    { category: "Risk", score: 65, color: "bg-destructive" }
  ];

  const benchmarkData = [
    {
      metric: "ARR Growth",
      startup: "180%",
      peer: "125%",
      sector: "98%",
      status: "above"
    },
    {
      metric: "Churn Rate",
      startup: "3.2%",
      peer: "5.1%",
      sector: "7.8%",
      status: "above"
    },
    {
      metric: "CAC Payback",
      startup: "14 months",
      peer: "18 months",
      sector: "24 months",
      status: "above"
    },
    {
      metric: "Net Revenue Retention",
      startup: "112%",
      peer: "108%",
      sector: "103%",
      status: "above"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Deal Notes & Benchmarking</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analysis and peer comparison for informed investment decisions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Performance Heatmap */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Heatmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  {heatmapData.map((item) => (
                    <div key={item.category} className="text-center">
                      <div className={`w-24 h-24 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <span className="text-white font-bold text-lg">{item.score}%</span>
                      </div>
                      <h3 className="font-semibold text-foreground">{item.category}</h3>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benchmark Table */}
            <Card>
              <CardHeader>
                <CardTitle>Sector Benchmark Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold">Metric</th>
                        <th className="text-left py-3 px-4 font-semibold">This Startup</th>
                        <th className="text-left py-3 px-4 font-semibold">Peer Average</th>
                        <th className="text-left py-3 px-4 font-semibold">Sector Average</th>
                        <th className="text-left py-3 px-4 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {benchmarkData.map((row, index) => (
                        <tr key={index} className="border-b border-border hover:bg-ai-surface">
                          <td className="py-3 px-4 font-medium">{row.metric}</td>
                          <td className="py-3 px-4 font-semibold text-ai-primary">{row.startup}</td>
                          <td className="py-3 px-4">{row.peer}</td>
                          <td className="py-3 px-4">{row.sector}</td>
                          <td className="py-3 px-4">
                            <Badge variant="secondary" className="bg-ai-success/10 text-ai-success">
                              Above Average
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Investment Decision</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="bg-ai-success hover:bg-ai-success/90 text-white">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Approve
                  </Button>
                  <Button variant="destructive">
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Monitor
                  </Button>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Notes & Comments</h3>
                  <textarea 
                    className="w-full p-3 border border-border rounded-lg bg-background"
                    rows={4}
                    placeholder="Add your investment notes and comments here..."
                  />
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

export default DealNotesPage;