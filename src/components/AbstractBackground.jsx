import { motion } from "framer-motion";

export default function AbstractBackground({ variant = "left" }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Soft gradient field */}
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 w-[900px] h-[600px] blur-[120px] opacity-40 ${
          variant === "left"
            ? "-left-72 bg-gradient-to-br from-brand-primary/40 via-cyan-400/20 to-transparent"
            : "-right-72 bg-gradient-to-bl from-brand-primary/40 via-cyan-400/20 to-transparent"
        }`}
        style={{ willChange: "transform" }}
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Geometric accent */}
      <motion.div
        className={`absolute top-0 h-full w-[2px] opacity-30 ${
          variant === "left"
            ? "left-24 bg-gradient-to-b from-transparent via-brand-primary to-transparent"
            : "right-24 bg-gradient-to-b from-transparent via-brand-primary to-transparent"
        }`}
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
