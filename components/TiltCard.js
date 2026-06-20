"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

export default function TiltCard({ children, maxTilt = 10, scale = 1.03 }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 180, damping: 22 });
  const y = useSpring(rawY, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(y, [-1, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(x, [-1, 1], [-maxTilt, maxTilt]);

  const handleMouseMove = (e) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2));
    rawY.set((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  if (prefersReducedMotion) return <>{children}</>;

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        height: "100%",
      }}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
