import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border bg-card/80 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display text-xl font-bold tracking-wider">
              Safe<span className="text-primary">RideX</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              AI-powered helmets making every ride safer. Because life doesn't come with a respawn.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-primary mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-primary mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> hello@saferidex.ai</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Bangalore, India</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-primary mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">Get launch updates and early-bird pricing.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex gap-2"
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border"
              />
              <Button variant="default" size="default" type="submit">
                Join
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 SafeRideX. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
