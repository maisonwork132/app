import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Instagram, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    playerAge: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = new URLSearchParams();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("playerAge", formData.playerAge);
      payload.append("message", formData.message);
      // Optional: subject for the email
      payload.append("_subject", "Website enquiry Phase Elite");
      // Disable Formsubmit's captcha (they may still require verification on first use)
      payload.append("_captcha", "false");

      const resp = await fetch(
        "https://formsubmit.co/CoachWard1993@outlook.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: payload.toString(),
        }
      );

      if (resp.ok || (resp.status >= 200 && resp.status < 400)) {
        toast({
          title: "Enquiry Submitted",
          description: "Thank you for your interest. We'll be in touch soon.",
        });
        setFormData({ name: "", email: "", playerAge: "", message: "" });
      } else {
        throw new Error(`Form submit failed: ${resp.status}`);
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Submission Failed",
        description:
          "There was a problem sending your enquiry. Please try again or email CoachWard1993@outlook.com directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Header */}
      <section className="section-spacing-sm border-b border-border">
        <div className="container-academy">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Interested in specialist player development? Get in touch to 
            discuss your goals and availability.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-spacing">
        <div className="container-academy">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
              }}
            >
              <motion.h2
                className="text-xl font-semibold mb-6"
                variants={fadeInUp}
                custom={0}
              >
                Send an Enquiry
              </motion.h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div className="space-y-2" variants={fadeInUp} custom={0.1}>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass-subtle border-border/50 focus:border-foreground/50 transition-colors"
                  />
                </motion.div>

                <motion.div className="space-y-2" variants={fadeInUp} custom={0.15}>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-subtle border-border/50 focus:border-foreground/50 transition-colors"
                  />
                </motion.div>

                <motion.div className="space-y-2" variants={fadeInUp} custom={0.2}>
                  <Label htmlFor="playerAge">Player Age</Label>
                  <Input
                    id="playerAge"
                    name="playerAge"
                    type="text"
                    value={formData.playerAge}
                    onChange={handleChange}
                    placeholder="e.g., 12"
                    className="glass-subtle border-border/50 focus:border-foreground/50 transition-colors"
                  />
                </motion.div>

                <motion.div className="space-y-2" variants={fadeInUp} custom={0.25}>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your development goals, current level, and what you're looking for..."
                    className="glass-subtle border-border/50 focus:border-foreground/50 transition-colors resize-none"
                  />
                </motion.div>

                <motion.div variants={fadeInUp} custom={0.3}>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="lg:pl-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
              }}
            >
              <motion.h2
                className="text-xl font-semibold mb-6"
                variants={fadeInUp}
                custom={0}
              >
                Get in Touch
              </motion.h2>
              
              <div className="space-y-6 mb-10">
                <motion.a
                  href="tel:+447000000000"
                  className="flex items-start gap-4 group"
                  variants={fadeInUp}
                  custom={0.1}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 glass-subtle flex items-center justify-center flex-shrink-0 group-hover:bg-muted/80 transition-colors">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      07586437691 
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://instagram.com/coach_hward"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                  variants={fadeInUp}
                  custom={0.15}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 glass-subtle flex items-center justify-center flex-shrink-0 group-hover:bg-muted/80 transition-colors">
                    <Instagram className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Instagram</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      @coach_hward
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-start gap-4"
                  variants={fadeInUp}
                  custom={0.2}
                >
                  <div className="w-10 h-10 glass-subtle flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Location</p>
                    <p className="text-muted-foreground">
                      Basildon & surrounding areas
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Availability Notice */}
              <motion.div
                className="glass p-6"
                variants={fadeInUp}
                custom={0.25}
              >
                <h3 className="font-semibold mb-2">Limited Availability</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sessions are by enquiry only to maintain quality and personal 
                  attention. We'll respond to your message within 48 hours to 
                  discuss availability and next steps.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
