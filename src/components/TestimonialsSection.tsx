import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Daily Commuter, Mumbai",
    text: "The SOS alert feature saved my friend's life after a crash on the highway. The ambulance reached in 8 minutes. RideSafe is not optional — it's essential.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Delivery Partner, Delhi",
    text: "I ride 10+ hours daily. The drowsiness alert has warned me twice when I was getting too tired. The LED lights also make me feel so much safer at night.",
    rating: 5,
  },
  {
    name: "Karthik R.",
    role: "Biking Enthusiast, Bangalore",
    text: "Helmet-to-helmet communication on group rides is a game changer. Crystal clear audio even at high speeds. Plus the solar charging is genius.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-display text-xs uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
            Riders <span className="text-primary">Trust RideSafe</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl border border-border bg-card p-8 hover:border-glow transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-display text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
