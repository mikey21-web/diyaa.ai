'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { fadeSlideInVariant, getSlideInVariant, staggerContainerVariant, staggerItemVariant } from '@/utils/animations';
import { Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  className?: string;
  stagger?: boolean;
  threshold?: number;
}

/**
 * ScrollReveal Component
 * Wrapper component that animates children when they scroll into view
 *
 * @param children - Content to animate
 * @param delay - Initial delay before animation starts (default: 0)
 * @param direction - Direction of slide animation (default: 'up')
 * @param duration - Duration of animation in seconds (default: 0.6)
 * @param className - Additional CSS classes
 * @param stagger - Enable staggering for multiple children (default: false)
 * @param threshold - Visibility threshold (0-1, default: 0.1)
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className = '',
  stagger = false,
  threshold = 0.1,
}) => {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });

  // Get the appropriate variant based on direction
  const slideVariant = getSlideInVariant(direction);

  // Create custom variant with duration
  const customVariant: Variants = {
    hidden: slideVariant.hidden,
    visible: {
      ...slideVariant.visible,
      transition: {
        duration,
        ease: 'easeOut',
        delay,
      },
    },
  };

  // Use stagger variants if multiple children
  const containerVariant = stagger ? staggerContainerVariant : undefined;
  const itemVariant = stagger ? staggerItemVariant : undefined;

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={containerVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            variants={itemVariant}
            style={{ transitionDelay: `${delay + index * 0.1}s` }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={customVariant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};
