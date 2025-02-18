import { useState, useEffect } from "react";
import Digitando from "../Digitando";
import { motion } from "framer-motion";
import {
  slideRight,
  slideLeft,
  slideDownFadeIn,
  slideUpFadeIn,
  pulseIn,
} from "../../animations";

/* Armazena o componente numa classe motion para o componente aceitar as propriedades do motion */
const MotionDigitando = motion(Digitando);

const Home = () => {
  const timeDuration = 1.5;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Sub-container que engloba toda a home */}
      <div className="text-center z-10 px-4">
        {/* Titulo Meu Nome */}
        <motion.h1
          initial={slideRight.initial}
          whileInView={slideRight.animate}
          transition={{ duration: timeDuration, delay: 0.25 }}
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
        >
          Jairo Lopes
        </motion.h1>

        {/* Container de descrição e digitando */}
        <div id="description" className="mb-8">
          {/* usando o componente embutido na classe motion para usar as animações */}
          <MotionDigitando
            initial={pulseIn.initial}
            whileInView={pulseIn.animate}
            transition={{ duration: 2, delay: 0.8 }}
            texto="Desenvolvedor Front-End"
            classesTw="text-myWhite font-semibold text-3xl mb-8 max-w-lg mx-auto min-h-[30px]"
            classeCursor="font-medium text-myWhite"
          />

          <motion.p
            initial={slideDownFadeIn.initial}
            whileInView={slideDownFadeIn.animate}
            transition={{ duration: timeDuration, delay: 0.25 }}
            className="text-gray-300 text-lg max-w-lg mx-auto"
          >
            Desenvolvedor Frontend com foco em <strong>React</strong>,{" "}
            <strong>Tailwind CSS</strong> e <strong>TypeScript</strong>, criando
            interfaces elegantes, responsivas e de alto desempenho,
            desenvolvendo componentes reutilizáveis e aplicando animações
            envolventes com <strong>Framer Motion</strong> para experiências
            dinâmicas.
          </motion.p>
        </div>

        {/* CONTAINER ONDE FICA OS LINKS DE VER PROJETOS E CONTATO */}
        <div className=" flex justify-center space-x-4">
          {/* PROJETOS LINK */}
          <motion.a
            initial={slideRight.initial}
            whileInView={slideRight.animate}
            transition={{ duration: timeDuration, delay: 0.25 }}
            href="#projects"
            className="btn-hover2"
          >
            <span className="relative z-10">Ver Projetos</span>
          </motion.a>

          {/* CONTATO LINK */}
          <motion.a
            initial={slideLeft.initial}
            whileInView={slideLeft.animate}
            transition={{ duration: timeDuration, delay: 0.25 }}
            href="#contact"
            className="btn-hover"
          >
            <span className="relative z-10">Contato</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Home;
