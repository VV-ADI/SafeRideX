import { motion } from "framer-motion";
import { Cpu, Smartphone, Wifi } from "lucide-react";

const steps = [
  {
    icon: Cpu,
    step: "01",
    title: "Smart Sensors",
    desc: "Accelerometer, gyroscope, and pressure sensors continuously monitor riding conditions and detect anomalies.",
  },
  {
    icon: Wifi,
    step: "02",
    title: "AI Processing",
    desc: "Onboard microcontroller processes sensor data using machine learning algorithms to distinguish crashes from normal events.",
  },
  {
    icon: Smartphone,
    step: "03",
    title: "Mobile App Integration",
    desc: "Connects to the SafeRideX app via Bluetooth for SOS dispatch, live tracking, ride analytics, and emergency contacts.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-display text-xs uppercase tracking-widest text-primary">How It Works</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
            Technology That <span className="text-primary">Saves Lives</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative text-center"
            >
              <div className="mx-auto mb-6 relative">
                <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-2xl border border-primary/30 bg-background box-glow">
                  <s.icon size={32} className="text-primary" />
                </div>
                <div className="absolute -top-3 -right-3 font-display text-xs font-bold bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">
                  {s.step}
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
