import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="testimonial-card">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Content?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join successful businesses that have revolutionized their marketing with psychological insights and guerilla tactics.
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              <Button 
                size="lg" 
                className="glow-button bg-gradient-gold hover:bg-gradient-gold/90 text-background font-semibold py-6"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 py-6"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Free Content Audit
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                No long-term contracts
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Results in 30 days
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                Money-back guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;