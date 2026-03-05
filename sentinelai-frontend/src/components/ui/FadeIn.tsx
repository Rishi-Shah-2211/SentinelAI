import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function FadeIn({ children }: Props) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}