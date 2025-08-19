import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-gold flex items-center justify-center">
                <span className="text-background font-bold text-sm">CC</span>
              </div>
              <span className="text-xl font-bold">ContentCraft Pro</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming businesses through expert content writing, guerilla marketing, and psymarketing strategies that convert.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Content Writing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Script Writing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Guerilla Marketing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Psymarketing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 ContentCraft Pro. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
