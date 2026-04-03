import { Variants } from 'framer-motion';

/**
 * Fade in animation variant
 * Simple opacity transition from hidden to visible
 */
export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/**
 * Slide in animation variants by direction
 * Combines fade with slide movement
 */
export const slideInVariantMap: Record<'up' | 'down' | 'left' | 'right', Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
};

/**
 * Scale in animation variant
 * Combines fade with scale transformation
 */
export const scaleInVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

/**
 * Container variant for staggering children
 * Animates children with a delay between each
 */
export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

/**
 * Item variant for use inside stagger container
 * Standard fade in with smooth timing
 */
export const staggerItemVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Helper function to get slide variant by direction
 * @param direction - Direction of slide animation
 * @returns Framer Motion variant object
 */
export const getSlideInVariant = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up'
): Variants => {
  return slideInVariantMap[direction];
};

/**
 * Combined fade + slide variant
 * Used as default for ScrollReveal component
 */
export const fadeSlideInVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Transition settings for smooth animations
 */
export const transitionSettings = {
  fast: { duration: 0.3, ease: 'easeOut' },
  normal: { duration: 0.5, ease: 'easeOut' },
  slow: { duration: 0.8, ease: 'easeOut' },
};
