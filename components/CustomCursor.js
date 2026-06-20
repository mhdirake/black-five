"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const RING_SIZE = 38;
const RING_SIZE_HOVER = 56;
const DOT_SIZE = 6;
const DOT_SIZE_HOVER = 4;

export default function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const ringX = useSpring(mouseX, { stiffness: 160, damping: 24, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 160, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e) => {
      const el = e.target.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor]'
      );
      setHovering(!!el);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [prefersReducedMotion, mouseX, mouseY, visible]);

  if (prefersReducedMotion) return null;

  const primary = theme.palette.primary.main;

  return (
    <>
      {/* Ring — spring lag */}
      <motion.div
        animate={{
          width: hovering ? RING_SIZE_HOVER : RING_SIZE,
          height: hovering ? RING_SIZE_HOVER : RING_SIZE,
          borderColor: hovering ? primary : "rgba(255,255,255,0.4)",
          backgroundColor: hovering ? `${primary}18` : "transparent",
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: "50%",
          border: "1.5px solid",
          pointerEvents: "none",
          zIndex: 99998,
        }}
      />

      {/* Dot — exact follow */}
      <motion.div
        animate={{
          width: hovering ? DOT_SIZE_HOVER : DOT_SIZE,
          height: hovering ? DOT_SIZE_HOVER : DOT_SIZE,
          backgroundColor: hovering ? primary : "rgba(255,255,255,0.9)",
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
        }}
      />
    </>
  );
}
