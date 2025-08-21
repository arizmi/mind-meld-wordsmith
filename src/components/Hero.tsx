import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="hero-text">
            <span className="block mb-4 font-semibold">Most marketing fails because it's <span className="poo-word">shit</span>.</span>
            <span className="block font-semibold">Start using <span className="psychology-word font-bold">psychology<div className="urgency-dot"></div></span> to <span className="manipulation-word font-bold">manipulate<div className="urgency-dot"></div></span> buying.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We use declassified government & military psychological manipulation techniques to drive traffic & increase sales.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="service-badge">
              <div className="w-2 h-2 rounded-full bg-red-500 record-blink"></div>
              Psymarketing
            </div>
            <div className="service-badge">
              <div className="w-2 h-2 rounded-full bg-red-500 record-blink"></div>
              Paid Advertising
            </div>
            <div className="service-badge">
              <div className="w-2 h-2 rounded-full bg-red-500 record-blink"></div>
              Ghostwriting
            </div>
            <div className="service-badge">
              <div className="w-2 h-2 rounded-full bg-red-500 record-blink"></div>
              Guerilla Marketing
            </div>
          </div>

          <div className="space-y-6">
            <Button size="lg" className="glow-button font-semibold py-6 text-lg animate-glow-pulse px-[25px]">RESTRICTED ACCESS</Button>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <span>4.9/5 from 127 clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
