import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { YoutubeVideo } from "@/components/YoutubeVideo";
import heroImage from "@/assets/hero121.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={heroImage}
            alt="Elite football training session"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-40" />
        </div>

        {/* Content */}
        <div className="container-academy relative z-10 py-20">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent"
              variants={fadeInUp}
              custom={0}
            >
              Next Phase Player Development
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-foreground font-semibold mb-6 tracking-tight"
              variants={fadeInUp}
              custom={0.1}
            >
              Looks like an academy. <span className="text-accent">Runs like a specialist.</span>
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
              variants={fadeInUp}
              custom={0.2}
            >
              Specialist 1-2-1 and small group player development designed to 
              elevate individual technical ability, game intelligence, and 
              competitive edge. Based in Basildon and surrounding areas.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
              custom={0.3}
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/services">View Services</Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/contact">Enquire Now</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-spacing bg-muted/50">
        <div className="container-academy">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              See the Difference
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch how our specialist approach develops players beyond the 
              fundamentals building confidence, creativity, and match-ready skills.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <YoutubeVideo videoId="OpcYm7_GppE" title="Coaching Approach" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing">
        <div className="container-academy">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                num: "01",
                title: "Individual Focus",
                desc: "Every session is tailored to address specific areas of development, ensuring targeted improvement and measurable progress."
              },
              {
                num: "02",
                title: "Qualified Coaching",
                desc: "UEFA B licensed with full safeguarding credentials. Professional standards applied to every session and interaction."
              },
              {
                num: "03",
                title: "Specialist Approach",
                desc: "Not a mass participation programme. Small groups and 121 sessions that prioritise quality over quantity."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center md:text-left group"
                variants={fadeInUp}
                custom={index * 0.1}
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 text-background flex items-center justify-center mb-4 mx-auto md:mx-0 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="text-xl font-bold">{item.num}</span>
                </motion.div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="glass-dark text-background section-spacing-sm">
        <div className="container-academy text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Develop?
            </h2>
            <p className="text-background/70 max-w-xl mx-auto mb-8">
              Limited availability. Get in touch to discuss your development goals 
              and find out how we can help you reach the next phase.
            </p>
            <Button 
              asChild 
              variant="hero-outline" 
              size="xl"
              className="border-background text-background hover:bg-background hover:text-foreground"
            >
              <Link to="/contact">Start Your Journey</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
