import { motion } from "framer-motion";
import {
  Brain, Bell, Lightbulb, Bluetooth, MapPin, Eye,
  Radio, Sun,
} from "lucide-react";

const features = [
  { icon: Brain, title: "AI Accident Detection", desc: "Advanced sensors and machine learning instantly detect crashes and impacts in real-time." },
  { icon: Bell, title: "Automatic SOS Alerts", desc: "Sends emergency alerts with GPS location to contacts and nearby hospitals within seconds." },
  { icon: Lightbulb, title: "Rear LED Brake Lights", desc: "Built-in LED indicators automatically light up when braking, increasing rear visibility." },
  { icon: Bluetooth, title: "Bluetooth Connectivity", desc: "Take calls, get navigation prompts, and stream music hands-free while riding." },
  { icon: MapPin, title: "Live Location Tracking", desc: "Real-time GPS tracking shared with family for peace of mind on every journey." },
  { icon: Eye, title: "Drowsiness Detection", desc: "AI monitors riding patterns and alerts you when signs of fatigue are detected." },
  { icon: Radio, title: "Helmet-to-Helmet Comms", desc: "Communicate with fellow riders in your group up to 1km range, crystal clear." },
  { icon: Sun, title: "Solar-Assisted Charging", desc: "Integrated solar cells extend battery life, keeping your helmet powered on long rides." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 gradient-radial opacity-50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-display text-xs uppercase tracking-widest text-primary">Features</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
            Intelligence Built <span className="text-primary">Into Every Ride</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Packed with cutting-edge technology to protect, connect, and empower riders.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-glow hover:bg-card transition-all duration-500"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:box-glow transition-all duration-500">
                <f.icon size={24} />
              </div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
