import { motion } from "framer-motion";

interface YoutubeVideoProps {
  videoId: string;
  title?: string;
  className?: string;
}

export const YoutubeVideo = ({ videoId, title = "Video", className = "" }: YoutubeVideoProps) => {
  return (
    <motion.div
      className={`w-full aspect-video rounded-lg overflow-hidden shadow-lg ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </motion.div>
  );
};
