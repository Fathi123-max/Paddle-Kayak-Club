import { motion } from "framer-motion";
import { MapPin, ParkingCircle, Users, Navigation } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-28 bg-slate-50/70 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Where to find us</span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mt-3 mb-4">
            Location & Map
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We meet every Saturday & Sunday at 6 AM at{" "}
            <strong className="text-foreground">Al Mamzar Beach Park, Dubai.</strong>{" "}
            Here's how to find us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-3"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg border border-border/50">
              <iframe
                title="Al Mamzar Beach Park, Dubai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.272016543!2d55.3430!3d25.2990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d3a7c4e3b1f%3A0xa1a1a1a1a1a1a1a1!2sAl%20Mamzar%20Beach%20Park!5e0!3m2!1sen!2sae!4v1699999999999!5m2!1sen!2sae"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Al+Mamzar+Beach+Park+Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 text-sm text-primary font-semibold hover:underline"
            >
              <Navigation className="w-4 h-4" />
              Open in Google Maps
            </a>
          </motion.div>

          {/* How to Find Us */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <h3 className="text-2xl font-display font-bold text-foreground">How to Find Us</h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-border/50">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">The Address</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Al Mamzar Beach Park, Al Mamzar, Dubai, UAE. Look for the main entrance on Al Mamzar Corniche Road.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-border/50">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center shrink-0">
                  <ParkingCircle className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Parking</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Parking is available inside the park (small entry fee). Arrive by 5:45 AM to park easily before the group gathers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-border/50">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Where We Meet</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We usually gather at <strong className="text-foreground">Beach 2</strong> near the water's edge. Look for the boards and the friendly faces — you can't miss us. Exact spot confirmed in WhatsApp the evening before.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-5 border border-primary/10">
                <p className="text-sm text-primary font-medium leading-relaxed">
                  🌅 <strong>Pro tip:</strong> Arrive 10–15 minutes early for the best parking spot and to soak up the pre-sunrise magic. You won't regret it.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
