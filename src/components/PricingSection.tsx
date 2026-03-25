import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "SafeRideX Core",
    price: "₹4,999",
    desc: "Essential smart safety",
    features: [
      "AI Accident Detection",
      "Automatic SOS Alerts",
      "Rear LED Brake Lights",
      "Bluetooth Audio",
      "12h Battery Life",
    ],
    popular: false,
  },
  {
    name: "SafeRideX Pro",
    price: "₹7,999",
    desc: "Complete protection suite",
    features: [
      "Everything in Core",
      "Live GPS Tracking",
      "Drowsiness Detection",
      "Helmet-to-Helmet Comms",
      "Solar-Assisted Charging",
      "24h Battery Life",
    ],
    popular: true,
  },
  {
    name: "SafeRideX App+",
    price: "₹99/mo",
    desc: "Premium app subscription",
    features: [
      "Advanced Ride Analytics",
      "Family Dashboard",
      "Route Safety Scoring",
      "Insurance Discounts",
      "Priority Support",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-display text-xs uppercase tracking-widest text-primary">Pricing</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
            Invest in Your <span className="text-primary">Safety</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A fraction of the cost of a hospital visit. Priceless peace of mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl border p-8 transition-all duration-500 ${
                plan.popular
                  ? "border-primary/50 bg-background box-glow"
                  : "border-border bg-card hover:border-glow"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-display uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
              <div className="mt-6">
                <span className="font-display text-4xl font-bold text-primary">{plan.price}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full mt-8"
              >
                {plan.price.includes("/") ? "Subscribe" : "Pre-Order"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
