import type { Transition, Variants } from "framer-motion";

/** Smooth ease-out curve for scroll reveals */
export const easeSmooth: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const transitionBase: Transition = {
  duration: 0.65,
  ease: easeSmooth,
};

export const viewportReveal = {
  once: true,
  amount: 0.22,
  margin: "-72px 0px -48px 0px",
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionBase,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: easeSmooth },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionBase,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionBase,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeSmooth },
  },
};
