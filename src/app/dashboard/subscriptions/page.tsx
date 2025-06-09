import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { CreditCard, CheckCircle, Zap, ShieldPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SubscriptionsPage() {
  // Dummy data, replace with actual subscription status
  const currentPlan = {
    name: "Pro Plan",
    price: "$49/month",
    status: "Active",
    renewsOn: "November 26, 2024",
    features: [
      "Unlimited Web Scans",
      "5 Mobile Scans/month",
      "AI-Powered Reports",
      "Attack Simulation",
      "Priority Support"
    ]
  };

  const plans = [
    {
      name: "Free Plan",
      price: "$0/month",
      features: ["1 Web Scan/month", "Basic Reports", "Community Support"],
      cta: "Current Plan",
      isCurrent: false,
      icon: <CheckCircle className="h-5 w-5 text-primary" />
    },
    {
      name: "Pro Plan",
      price: "$49/month",
      features: ["Unlimited Web Scans", "5 Mobile Scans/month", "AI-Powered Reports", "Attack Simulation", "Priority Support"],
      cta: "Upgrade to Pro",
      isCurrent: true,
      icon: <Zap className="h-5 w-5 text-primary" />
    },
    {
      name: "Enterprise Plan",
      price: "Custom",
      features: ["Unlimited All Scans", "Advanced Integrations", "Dedicated Support", "Custom SLAs"],
      cta: "Contact Sales",
      isCurrent: false,
      icon: <ShieldPlus className="h-5 w-5 text-primary" />
    }
  ];


  return (
    <>
      <PageHeader
        title="Manage Your Subscription"
        description="View your current plan, billing history, and explore upgrade options."
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1">
            <CardHeader>
                <CardTitle>Current Plan: {currentPlan.name}</CardTitle>
                <CardDescription>Status: <span className="text-green-600 font-semibold">{currentPlan.status}</span>. Renews on {currentPlan.renewsOn}.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    {currentPlan.features.map(feature => (
                        <li key={feature} className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 items-start">
                 <Button variant="outline" className="w-full">Manage Billing</Button>
                 <Button variant="ghost" className="w-full text-destructive hover:text-destructive">Cancel Subscription</Button>
            </CardFooter>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Available Plans</CardTitle>
            <CardDescription>Choose the plan that best fits your security needs.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {plans.filter(plan => plan.name !== currentPlan.name).map((plan) => (
              <Card key={plan.name} className={plan.isCurrent ? "border-primary" : ""}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {plan.icon}
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                  </div>
                  <CardDescription className="text-2xl font-bold">{plan.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.name === "Enterprise Plan" ? "outline" : "default"}>
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
      <EmptyState
        icon={CreditCard}
        title="Billing History"
        description="Your billing history and invoices will be displayed here. This feature is currently under construction."
      />
      </div>
    </>
  );
}
