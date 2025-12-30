import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-gray"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <span className="text-xs tracking-widest uppercase">
        Scroll
      </span>
      <motion.div
        className="w-[2px] h-12 bg-gradient-to-b from-brand-primary to-transparent"
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
