import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-gold flex items-center justify-center">
              <span className="text-background font-bold text-sm">CC</span>
            </div>
            <span className="text-xl font-bold">ContentCraft Pro</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#results" className="text-muted-foreground hover:text-foreground transition-colors">
              Results
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>

          <Button className="glow-button bg-gradient-gold hover:bg-gradient-gold/90 text-background font-semibold">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;