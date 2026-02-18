import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { YoutubeVideo } from "@/components/YoutubeVideo";

const services = [
  {
    title: "1–2-1 Player Development",
    price: "£30",
    duration: "60 mins",
    description:
      "Intensive individual sessions focused entirely on your specific development needs. Technical refinement, tactical understanding, and personalised feedback to accelerate your progress.",
    features: [
      "Personalised session plan",
      "Video feedback available",
      "Progress tracking",
      "Flexible scheduling",
    ],
  },
  {
    title: "Small Group Development",
    price: "£10",
    duration: "per player",
    description:
      "High-quality training in groups of 3–6 players. Competitive environment with individual attention. Ideal for players who thrive in structured group settings.",
    features: [
      "3–6 players maximum",
      "Position-specific work",
      "Game-realistic scenarios",
      "Team dynamics focus",
    ],
  },
  {
    title: "Elite Team Training",
    price: "£40",
    duration: "per session",
    description:
      "Specialist team sessions designed to develop tactical understanding, team cohesion, and competitive performance. Suitable for established teams and development squads.",
    features: [
      "Full squad sessions",
      "Tactical periodisation",
      "Match preparation",
      "Performance analysis",
    ],
  },
  {
    title: "Player Video Analysis",
    price: "£50",
    duration: "per report",
    description:
      "Comprehensive video breakdown of match or training footage. Detailed written and visual feedback highlighting strengths, areas for improvement, and actionable development points.",
    features: [
      "Match footage analysis",
      "Written report included",
      "Annotated video clips",
      "Development priorities",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function Services() {
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
            Services
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Specialist player development programmes designed for serious 
            improvement. Quality over quantity—every session matters.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="container-academy">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border/50 bg-gradient-to-br from-card to-card/80 p-8 md:p-10 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                {/* Accent gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Price Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-1 text-foreground">
                        {service.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {service.duration}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-foreground/80"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                      >
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button asChild variant="hero-outline" className="w-full">
                    <Link to="/contact">Enquire About This</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="section-spacing">
        <div className="container-academy">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              See Our Coaching in Action
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Watch a glimpse of our training methodology and player development approach.
            </p>
            <YoutubeVideo videoId="OpcYm7_GppE" title="Coach Training Session" />
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-muted/50 section-spacing-sm">
        <div className="container-academy">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              All sessions are by enquiry only to ensure we can deliver the 
              quality you expect. Get in touch to discuss your goals, schedule 
              an initial assessment, and we'll design a development plan 
              tailored to your needs.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
