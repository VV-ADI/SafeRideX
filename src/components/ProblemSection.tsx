import { motion } from "framer-motion";
import { AlertTriangle, Eye, Clock } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    stat: "1.35M",
    label: "Annual Road Deaths",
    description: "Road accidents remain one of the leading causes of death globally, with two-wheelers among the most vulnerable.",
  },
  {
    icon: Eye,
    stat: "40%",
    label: "Poor Visibility Crashes",
    description: "A significant portion of motorcycle accidents occur due to lack of visibility, especially at night.",
  },
  {
    icon: Clock,
    stat: "45 min",
    label: "Avg Emergency Response",
    description: "Delayed emergency response after accidents drastically reduces survival chances for injured riders.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-xs uppercase tracking-widest text-primary">The Problem</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
            Roads Are Getting <span className="text-primary">Deadlier</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Traditional helmets protect your head, but they can't call for help, warn you of danger, or keep you visible on the road.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative group rounded-2xl border border-border bg-card p-8 text-center hover:border-glow transition-all duration-500"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:box-glow transition-all duration-500">
                <item.icon size={28} />
              </div>
              <div className="font-display text-4xl font-bold text-primary">{item.stat}</div>
              <div className="mt-2 font-display text-sm uppercase tracking-wider text-foreground">{item.label}</div>
              <p className="mt-4 text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
