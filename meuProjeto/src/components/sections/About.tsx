import { easeInOut, motion } from "framer-motion";
import { div, span } from "framer-motion/client";
import { slideUpFadeIn } from "../../animations";

const About = () => {
  const skillsFront = [
    {
      tech: "React",
      icon: "bx bxl-react",
    },
    {
      tech: "TypeScript",
      icon: "bx bxl-typescript",
    },
    {
      tech: "Tailwind CSS",
      icon: "bx bxl-tailwind-css",
    },

    {
      tech: "JavaScript",
      icon: "bx bxl-javascript",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-start pt-[10%]"
    >
      {/* Conateiner que engloba todo o about */}
      <div className="max-w-3xl mx-auto px-4">
        {/* Titulo */}
        <motion.h2
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 1.2 }}
          className="text-4xl font-bold mb-8 gradient-text text-center"
        >
          Sobre mim
        </motion.h2>

        {/*Container de Descrição e Skills*/}
        <motion.div
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 1.2, ease: easeInOut }}
          className="flex flex-col justify-center items-center rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all duration-300"
        >
          {/* Descrição */}
          <p className="text-gray-300 mb-6 text-[16px]">
            Desenvolvedor Front-End com foco em <strong>React</strong>,{" "}
            <strong>Typescript</strong> e <strong>Tailwind CSS</strong>.
            Transformo ideias em interfaces digitais responsivas e intuitivas.{" "}
            <br /> Uso ferramentas de <strong>IA</strong> para otimizar a
            codificação, acelerando processos e elevando a qualidade do código.
            Com ênfase em performance e design eficiente, estou sempre atento às
            tendências do mercado, buscando excelência em cada projeto.
          </p>

          {/* Skills container */}
          <div className="flex flex-col gap-4">
            {/* Subcontainer que engloba as skills */}
            <div className="flex flex-col justify-center items-center rounded-xl p-6 hover:translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-myWhite">
                Tecnologias
              </h3>

              {/* Container que engloba todas as skills*/}
              <div className="flex justify-center items-center flex-wrap gap-10">
                {/* Irá iterar o array de skills e estiliza-las cada uma nessa span */}
                {skillsFront.map((skill, index) => (
                  /* Conteiner onde fica armzenado o icone do boxicons e a span com o nome da tecnologia */
                  <motion.div
                    key={index}
                    initial={slideUpFadeIn.initial}
                    whileInView={slideUpFadeIn.animate}
                    transition={{ delay: index * 0.2 }}
                    className="flex flex-col items-center justify-center gap-2 hover:scale-95 active:scale-95 transition-all duration-500"
                  >
                    <i
                      className={`${skill.icon} text-5xl text-secondaryTheme`}
                    ></i>
                    <span className="font-semibold text-myWhite">
                      {skill.tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
