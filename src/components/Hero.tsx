import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="hero-text">
            <span className="block">95% of content fails.</span>
            <span className="block gradient-text">Master the psychology of persuasion.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your business with expert content writing, guerilla marketing, and psychomarketing strategies that convert.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="service-badge">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              Content Writing
            </div>
            <div className="service-badge">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Script Writing
            </div>
            <div className="service-badge">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              Guerilla Marketing
            </div>
            <div className="service-badge">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              Psychomarketing
            </div>
          </div>

          <div className="space-y-6">
            <Button 
              size="lg" 
              className="glow-button-gold bg-gradient-gold hover:bg-gradient-gold/90 text-background font-semibold px-8 py-6 text-lg animate-glow-pulse-gold"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span>4.9/5 from 127 clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;