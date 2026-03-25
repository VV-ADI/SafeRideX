import { motion } from "framer-motion";
import { Car, Shield, Globe } from "lucide-react";

const visions = [
  {
    icon: Car,
    title: "Smart Vehicle Integration",
    desc: "Future helmets will communicate directly with smart vehicles, enabling V2X (Vehicle-to-Everything) technology for collision prevention.",
  },
  {
    icon: Shield,
    title: "Insurance Benefits",
    desc: "Partner with insurance companies to offer lower premiums for SafeRideX users, rewarding safer riding behavior with tangible savings.",
  },
  {
    icon: Globe,
    title: "AI Road Safety Ecosystem",
    desc: "Aggregate anonymized data from millions of riders to build real-time road safety maps and predictive hazard warnings.",
  },
];

const FutureVisionSection = () => {
  return (
    <section className="py-24 relative bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-display text-xs uppercase tracking-widest text-primary">Future Vision</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
            The Road <span className="text-primary">Ahead</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            SafeRideX is not just a helmet — it's the foundation of a connected, intelligent road safety ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {visions.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl border border-border bg-background p-8 hover:border-glow transition-all duration-500"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <v.icon size={24} />
              </div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureVisionSection;
