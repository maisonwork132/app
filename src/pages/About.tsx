import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { YoutubeVideo } from "@/components/YoutubeVideo";
import coachImage from "@/assets/IMG_7142.JPG";

const qualifications = [
  { title: "UEFA B Licensed Coach", description: "Advanced coaching qualification" },
  { title: "DBS Checked", description: "Enhanced disclosure verified" },
  { title: "First Aid Qualified", description: "Current certification" },
  { title: "Safeguarding Certified", description: "Child protection trained" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="section-spacing-sm border-b border-border">
        <div className="container-academy">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Specialist coaching built on experience, qualification, 
            and a genuine commitment to player development.
          </motion.p>
        </div>
      </section>

      {/* Coach Profile */}
      <section className="section-spacing">
        <div className="container-academy">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <motion.div
              className="order-1 lg:order-1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="aspect-[4/5] glass-subtle overflow-hidden">
                <motion.img
                  src={coachImage}
                  alt="Professional football coach"
                  className="w-full h-full object-cover grayscale"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="order-2 lg:order-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
              }}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent"
                variants={fadeInUp}
                custom={0}
              >
                The Coach
              </motion.h2>
              <div className="prose prose-lg max-w-none">
                <motion.p
                  className="text-muted-foreground mb-4 leading-relaxed"
                  variants={fadeInUp}
                  custom={0.1}
                >
                  Next Phase Player Development was founded to provide the kind 
                  of specialist, individual-focused coaching that grassroots 
                  players rarely have access to—the same quality of attention 
                  that academy players receive.
                </motion.p>
                <motion.p
                  className="text-muted-foreground mb-4 leading-relaxed"
                  variants={fadeInUp}
                  custom={0.2}
                >
                  With over a decade of coaching experience across grassroots, 
                  development centres, and academy environments, I've seen 
                  firsthand what separates players who progress from those who 
                  plateau. It's rarely just about talent—it's about targeted 
                  development, consistent feedback, and the right environment.
                </motion.p>
                <motion.p
                  className="text-muted-foreground mb-8 leading-relaxed"
                  variants={fadeInUp}
                  custom={0.3}
                >
                  Every session I deliver is built on these principles: clarity 
                  of purpose, high standards, and genuine care for each player's 
                  individual journey. Whether you're looking to improve specific 
                  technical skills, prepare for trials, or simply get better 
                  at the game you love—this is the place to do it.
                </motion.p>
              </div>

              {/* Qualifications */}
              <motion.div
                className="border-t border-border pt-8"
                variants={fadeInUp}
                custom={0.4}
              >
                <h3 className="text-lg font-semibold mb-6">Qualifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {qualifications.map((qual, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-border/50 bg-gradient-to-br from-card to-card/80 p-4 transition-all hover:border-accent/50 hover:shadow-md hover:shadow-accent/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 4, y: -2 }}
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm text-foreground">{qual.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {qual.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Meet the Coach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know the leader behind our training. Our coach brings 
              dedication and experience to every session, committed to developing 
              confident, disciplined athletes and strong individuals both on and 
              off the field.
            </p>
          </motion.div>
          
          {/* Video */}
          <div className="max-w-4xl mx-auto">
            <YoutubeVideo videoId="OpcYm7_GppE" title="Coaching Approach" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing-sm">
        <div className="container-academy text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Ready to Start?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Get in touch to discuss your development goals and find the 
              right programme for you.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Enquire Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
