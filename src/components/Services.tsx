import { PenTool, Video, Target, Brain } from "lucide-react";
const Services = () => {
  const services = [{
    icon: PenTool,
    title: "Ghostwriting",
    description: "Utilisation of words to rewire your customers' minds and thus compel them to buy",
    features: ["Social media content", "Educational content", "Video scripts", "Sales scripts", "VSLs"]
  }, {
    icon: Video,
    title: "Script Writing",
    description: "Compelling scripts for long-form and short-form video content",
    features: ["YouTube scripts", "TikTok content", "VSLs", "Educational content", "Sales scripts"]
  }, {
    icon: Target,
    title: "Guerilla Marketing",
    description: "Unconventional marketing strategies that maximize impact on minimal budgets",
    features: ["Viral campaigns", "Mass marketing", "Buzz generation", "Creative stunts"]
  }, {
    icon: Brain,
    title: "Psymarketing",
    description: "Utilise military and intelligence grade tactics in your campaigns",
    features: ["Behavioral triggers", "Persuasion techniques", "Consumer psychology", "Psychological Programming"]
  }];
  return <section id="services" className="bg-secondary/20 py-px">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We <span className="manipulation-word font-bold">Control<div className="urgency-dot"></div></span> Your Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">From paid advertising to ghostwriting; we use psychological triggers to influence specific emotional states that will drive sales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => <div key={index} className="testimonial-card group hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {feature}
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;
