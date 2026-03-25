import { motion } from "framer-motion";
import { Bike, Package, GraduationCap, Mountain } from "lucide-react";

const audiences = [
  { icon: Bike, title: "Daily Commuters", desc: "Stay protected on your everyday ride to work with smart safety features." },
  { icon: Package, title: "Delivery Partners", desc: "Essential safety gear for gig workers spending hours on the road daily." },
  { icon: GraduationCap, title: "Students", desc: "Affordable smart safety for young riders navigating busy campus routes." },
  { icon: Mountain, title: "Biking Enthusiasts", desc: "Advanced tech for adventure riders who push limits on every terrain." },
];

const AudienceSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-display text-xs uppercase tracking-widest text-primary">Who It's For</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
            Built for <span className="text-primary">Every Rider</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center rounded-2xl border border-border bg-card p-8 hover:border-glow transition-all duration-500"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:box-glow transition-all duration-500">
                <a.icon size={28} />
              </div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide">{a.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
