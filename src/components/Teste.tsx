import { motion } from "framer-motion";

const Teste = () => {
  return (
    <motion.div
      style={{ width: 100, height: 100, background: "red" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity }}
    ></motion.div>
  );
};

export default Teste;
