import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { UserPlus, Mail, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ai-surface to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-ai-primary to-ai-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <span className="font-bold text-2xl text-foreground">AI Analyst</span>
          </div>
          <p className="text-muted-foreground">Create your account</p>
        </div>

        <Card className="shadow-large">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <UserPlus className="h-5 w-5" />
              Sign Up
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="firstName" 
                      placeholder="John"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@company.com"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Create a strong password"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    placeholder="Confirm your password"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="text-sm">
              <label className="flex items-start space-x-2">
                <input type="checkbox" className="rounded border-border mt-0.5" />
                <span className="text-muted-foreground">
                  I agree to the{" "}
                  <a href="#" className="text-ai-primary hover:underline">Terms of Service</a>
                  {" "}and{" "}
                  <a href="#" className="text-ai-primary hover:underline">Privacy Policy</a>
                </span>
              </label>
            </div>

            <Button className="w-full bg-ai-primary hover:bg-ai-primary-dark">
              <UserPlus className="h-4 w-4 mr-2" />
              Create Account
            </Button>

            <Separator />

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link to="/login" className="text-ai-primary hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>© 2024 AI Analyst Platform. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;