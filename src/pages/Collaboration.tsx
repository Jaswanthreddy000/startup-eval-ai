import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Bell, ExternalLink, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CollaborationPage = () => {
  const comments = [
    {
      id: 1,
      author: "Sarah Chen",
      role: "Senior Partner",
      message: "Strong metrics across the board. Team has solid track record in fintech.",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: "Mike Rodriguez",
      role: "Principal",
      message: "Concerned about the high CAC in current market conditions. Need to dive deeper into unit economics.",
      timestamp: "4 hours ago"
    },
    {
      id: 3,
      author: "Emily Watson",
      role: "Associate",
      message: "Market opportunity looks promising. TAM estimates seem conservative based on recent industry reports.",
      timestamp: "1 day ago"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "update",
      message: "Founder updated Q3 metrics",
      timestamp: "5 minutes ago",
      urgent: false
    },
    {
      id: 2,
      type: "alert",
      message: "New competitor analysis available",
      timestamp: "1 hour ago",
      urgent: true
    },
    {
      id: 3,
      type: "comment",
      message: "Sarah Chen added a comment on risk assessment",
      timestamp: "3 hours ago",
      urgent: false
    }
  ];

  const integrations = [
    { name: "Notion", status: "Connected", icon: "📝" },
    { name: "Salesforce CRM", status: "Connected", icon: "🔗" },
    { name: "Slack", status: "Not Connected", icon: "💬" },
    { name: "Airtable", status: "Connected", icon: "📊" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Team Collaboration</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-time collaboration, comments, and notifications for your investment team.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Live Comments */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Live Comments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="p-4 bg-ai-surface rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-ai-primary rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-sm">{comment.author}</span>
                            <Badge variant="secondary" className="text-xs">{comment.role}</Badge>
                            <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                          </div>
                          <p className="text-sm text-foreground">{comment.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4">
                    <textarea 
                      className="w-full p-3 border border-border rounded-lg bg-background text-sm"
                      rows={3}
                      placeholder="Add a comment..."
                    />
                    <Button className="mt-2 bg-ai-primary hover:bg-ai-primary-dark" size="sm">
                      Post Comment
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Real-time Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Real-time Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-center gap-3 p-3 bg-ai-surface rounded-lg">
                      <div className={`w-2 h-2 rounded-full ${notification.urgent ? 'bg-destructive' : 'bg-ai-success'}`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                      </div>
                      {notification.urgent && (
                        <Badge variant="destructive" className="text-xs">Urgent</Badge>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* CRM/Notion Integration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  CRM & Tool Integrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {integrations.map((integration) => (
                    <div key={integration.name} className="p-4 bg-ai-surface rounded-lg text-center">
                      <div className="text-2xl mb-2">{integration.icon}</div>
                      <h3 className="font-semibold text-sm mb-1">{integration.name}</h3>
                      <Badge 
                        variant={integration.status === "Connected" ? "default" : "secondary"}
                        className={integration.status === "Connected" ? "bg-ai-success text-white" : ""}
                      >
                        {integration.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Manage Integrations
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

export default CollaborationPage;