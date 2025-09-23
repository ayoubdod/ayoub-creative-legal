import { useState } from "react";
import { ContactButton, ContactButtonSuite } from "./ContactButtons";
import { ContactSection } from "../sections/ContactSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  Calendar, 
  Clock, 
  TrendingUp,
  Users,
  MessageSquare,
  BarChart3
} from "lucide-react";

// Contact analytics dashboard for internal use
export function ContactAnalytics() {
  const [timeRange, setTimeRange] = useState("7d");
  
  const mockStats = {
    totalContacts: 47,
    responseRate: 94.7,
    avgResponseTime: "6.2 hours",
    conversionRate: 31.9,
    popularTypes: [
      { type: "LegalTech", count: 18, percentage: 38 },
      { type: "Legal Consultation", count: 12, percentage: 26 },
      { type: "Creative Design", count: 9, percentage: 19 },
      { type: "Strategy", count: 8, percentage: 17 }
    ]
  };

  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Contact Analytics</h1>
            <p className="text-muted-foreground">Monitor and manage your contact requests</p>
          </div>
          <div className="flex gap-2">
            {["7d", "30d", "90d"].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange(range)}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Contacts</p>
                  <p className="text-2xl font-bold">{mockStats.totalContacts}</p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-500" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+12% from last period</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Response Rate</p>
                  <p className="text-2xl font-bold">{mockStats.responseRate}%</p>
                </div>
                <Mail className="h-8 w-8 text-green-500" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">Excellent</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Response Time</p>
                  <p className="text-2xl font-bold">{mockStats.avgResponseTime}</p>
                </div>
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-muted-foreground">Target: &lt;24h</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                  <p className="text-2xl font-bold">{mockStats.conversionRate}%</p>
                </div>
                <BarChart3 className="h-8 w-8 text-purple-500" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">Above average</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Project Types */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Popular Project Types</h3>
            <div className="space-y-4">
              {mockStats.popularTypes.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{item.type}</Badge>
                    <span className="text-sm text-muted-foreground">{item.count} requests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Contact Actions</h3>
            <p className="text-muted-foreground mb-6">
              Use these buttons to test different contact flows and email templates.
            </p>
            <ContactButtonSuite />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Simple contact test interface
export function ContactTester() {
  const { toast } = useToast();
  const [testResults, setTestResults] = useState<string[]>([]);

  const runContactTest = async (type: string) => {
    toast({
      title: "Testing contact flow",
      description: `Simulating ${type} contact...`,
    });

    // Simulate backend test
    setTimeout(() => {
      const result = `✅ ${type} test completed at ${new Date().toLocaleTimeString()}`;
      setTestResults(prev => [result, ...prev.slice(0, 4)]);
      
      toast({
        title: "Test completed",
        description: "Check console for email template output",
      });
    }, 1500);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Contact System Tester</h3>
        <p className="text-muted-foreground mb-6">
          Test different contact flows and email templates for development.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button 
            variant="outline" 
            onClick={() => runContactTest("Email Flow")}
          >
            <Mail className="h-4 w-4 mr-2" />
            Test Email
          </Button>
          <Button 
            variant="outline" 
            onClick={() => runContactTest("Consultation")}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Test Consultation
          </Button>
          <Button 
            variant="outline" 
            onClick={() => runContactTest("Urgent Request")}
          >
            <Clock className="h-4 w-4 mr-2" />
            Test Urgent
          </Button>
          <Button 
            variant="outline" 
            onClick={() => runContactTest("Project Inquiry")}
          >
            <Users className="h-4 w-4 mr-2" />
            Test Project
          </Button>
        </div>

        {testResults.length > 0 && (
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-medium mb-2">Test Results:</h4>
            <div className="space-y-1 text-sm">
              {testResults.map((result, index) => (
                <div key={index} className="text-muted-foreground">
                  {result}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}