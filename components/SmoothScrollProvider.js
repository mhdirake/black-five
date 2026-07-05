"use client";

import { useEffect } from "react";

const SCROLL_EASE = 0.09;
const WHEEL_MULTIPLIER = 1.05;
const STOP_THRESHOLD = 0.5;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getMaxScroll() {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}

function shouldIgnoreWheel(event) {
  const target = event.target;

  if (!(target instanceof Element)) return false;

  return Boolean(
    target.closest("textarea, input, select, [contenteditable='true'], [data-native-scroll]")
  );
}

function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || window.innerWidth < 900) {
      return undefined;
    }

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let animationFrame = null;
    let isAnimating = false;

    const setTarget = (value) => {
      targetY = clamp(value, 0, getMaxScroll());
    };

    const stopAnimation = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = null;
      isAnimating = false;
    };

    const tick = () => {
      currentY += (targetY - currentY) * SCROLL_EASE;

      if (Math.abs(targetY - currentY) <= STOP_THRESHOLD) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        stopAnimation();
        return;
      }

      window.scrollTo(0, currentY);
      animationFrame = requestAnimationFrame(tick);
    };

    const startAnimation = () => {
      if (isAnimating) return;

      isAnimating = true;
      animationFrame = requestAnimationFrame(tick);
    };

    const handleWheel = (event) => {
      // scroll is locked while the hero intro animation is running
      if (document.body.classList.contains("intro-active")) {
        event.preventDefault();
        return;
      }

      if (event.ctrlKey || shouldIgnoreWheel(event)) return;

      event.preventDefault();
      currentY = window.scrollY;
      setTarget(targetY + event.deltaY * WHEEL_MULTIPLIER);
      startAnimation();
    };

    const handleResize = () => {
      setTarget(targetY);
    };

    const handleKeyDown = () => {
      targetY = window.scrollY;
      currentY = window.scrollY;
      stopAnimation();
    };

    const handleAnchorClick = (event) => {
      const link = event.target.closest?.("a[href^='#']");

      if (!link) return;

      const hash = link.getAttribute("href");
      const target = hash && hash !== "#" ? document.querySelector(hash) : null;

      if (!target) return;

      event.preventDefault();

      const scrollPaddingTop = Number.parseFloat(
        window.getComputedStyle(document.documentElement).scrollPaddingTop
      ) || 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - scrollPaddingTop;

      currentY = window.scrollY;
      setTarget(targetTop);
      startAnimation();

      window.history.pushState(null, "", hash);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleAnchorClick);

    return () => {
      stopAnimation();
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return children;
}

export default SmoothScrollProvider;
