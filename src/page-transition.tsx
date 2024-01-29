import { motion } from "framer-motion";

const animationsBack = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const animationsForward = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

interface TransitionProps {
  children: JSX.Element;
  isDirectionBack?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageTransition = ({ children, isDirectionBack }: TransitionProps) => {
  return (
    <>
      {/* <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.2 }}
      /> */}
      <motion.div
        variants={isDirectionBack ? animationsBack : animationsForward}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
