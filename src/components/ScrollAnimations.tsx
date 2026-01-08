import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const FadeInOnScroll = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: FadeInOnScrollProps) => {
  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: directionOffset[direction].y,
        x: directionOffset[direction].x,
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const Parallax = ({ children, speed = 0.5, className = "" }: ParallaxProps) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
};

interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
}

export const ScaleOnScroll = ({ children, className = "" }: ScaleOnScrollProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface RotateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const RotateIn = ({ children, className = "", delay = 0 }: RotateInProps) => {
  return (
    <motion.div
      initial={{ rotate: -10, opacity: 0, scale: 0.9 }}
      whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.7,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({ 
  children, 
  className = "",
  staggerDelay = 0.1 
}: StaggerContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            duration: 0.5,
            ease: "easeOut"
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

export const FloatingElement = ({ 
  children, 
  className = "", 
  duration = 3,
  distance = 10
}: FloatingElementProps) => {
  return (
    <motion.div
      animate={{ 
        y: [-distance, distance, -distance],
      }}
      transition={{ 
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface GlowPulseProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export const GlowPulse = ({ 
  children, 
  className = "",
  color = "hsl(346 75% 58%)"
}: GlowPulseProps) => {
  return (
    <motion.div
      animate={{
        boxShadow: [
          `0 0 20px ${color.replace(")", " / 0.3)")}`,
          `0 0 40px ${color.replace(")", " / 0.6)")}`,
          `0 0 20px ${color.replace(")", " / 0.3)")}`,
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
