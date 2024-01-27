import { motion } from "framer-motion";

const TimerBackdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 h-[100%] w-[100%] backdrop flex items-center justify-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default TimerBackdrop;
