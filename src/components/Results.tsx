import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

const Results = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "347%",
      label: "Average engagement increase",
      description: "Across all social media platforms"
    },
    {
      icon: Users,
      value: "2.4M+",
      label: "Total reach generated",
      description: "For client campaigns"
    },
    {
      icon: DollarSign,
      value: "$1.2M+",
      label: "Revenue attributed",
      description: "To our content strategies"
    },
    {
      icon: Target,
      value: "89%",
      label: "Client retention rate",
      description: "Long-term partnerships built"
    }
  ];

  const caseStudies = [
    {
      client: "Tech Startup",
      challenge: "Low social media engagement",
      solution: "Psychomarketing-driven content strategy",
      result: "450% increase in engagement, 12x follower growth"
    },
    {
      client: "E-commerce Brand",
      challenge: "Poor conversion rates",
      solution: "Guerilla marketing campaign + persuasive copy",
      result: "78% increase in conversions, $340K additional revenue"
    },
    {
      client: "SaaS Company",
      challenge: "Struggling with B2B lead generation",
      solution: "LinkedIn content series + psychological triggers",
      result: "200% more qualified leads, 35% shorter sales cycle"
    }
  ];

  return (
    <section id="results" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Words Hurt & Humans Lie, But Data Does <span className="gradient-text">Neither</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="testimonial-card text-center group hover:scale-105 transition-all duration-300">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit mx-auto mb-4">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{metric.value}</div>
              <div className="font-semibold mb-1">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Case Studies</h3>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="testimonial-card">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{study.client}</h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Result</h4>
                    <p className="text-sm font-medium text-green-400">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
