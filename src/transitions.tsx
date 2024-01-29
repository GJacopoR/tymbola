import { motion } from "framer-motion";

// const animations = {
//   initial: { opacity: 0, x: 100 },
//   animate: { opacity: 1, x: 0 },
//   exit: { opacity: 0, x: -100 },
// };

// interface TransitionProps {
//   children: JSX.Element;
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transition = (OgComponent: any) => {
  return () => (
    <>
      <OgComponent />
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
      />
      {/* <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div> */}
    </>
  );
};

export default transition;
