"use client";
import { MotionConfig, motion } from "framer-motion";

// Respects prefers-reduced-motion and adds one page-load transition.
export default function Shell({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        {children}
      </motion.div>
    </MotionConfig>
  );
}
