export const ease = {
  standard: [0.22, 1, 0.36, 1] as const,
  outSoft: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
};

export const duration = {
  micro: 0.15,
  button: 0.16,
  windowOpen: 0.42,
  windowClose: 0.3,
  page: 0.55,
  hero: 1.1,
  reveal: 0.65,
};

export const windowVariants = {
  initial: { opacity: 0, scale: 0.97, y: 10 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: duration.windowOpen, ease: ease.standard },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: 6,
    transition: { duration: duration.windowClose, ease: ease.inOut },
  },
};

export const staggerContainer = (stagger = 0.06, delay = 0) => ({
  animate: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: ease.standard },
  },
};
