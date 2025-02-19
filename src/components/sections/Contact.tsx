import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import { slideUpFadeIn } from "../../animations";
import { easeInOut, motion } from "framer-motion";

const Contact = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (nome === "" || email === "" || mensagem === "") {
      alert("Preencha todos os campos!");
      return;
    }

    /* CONFIGURANDO O EMAILJS */
    const templateParams = {
      from_name: nome,
      from_email: email,
      message: mensagem,
    };

    emailjs
      .send(
        "service_c384sav",
        "template_3a4qd4o",
        templateParams,
        "NChENVlj8_NFLEaU0"
      )
      .then(
        (resposta) => {
          console.log(`${resposta.status}, ${resposta.text}`);
          setEnviado(true);
          setNome("");
          setEmail("");
          setMensagem("");
        },
        (erro) => {
          console.log(erro);
          alert("Ocorreu um erro ao enviar a mensagem!");
        }
      );
    /* FIM DA CONFIGURAÇÃO DO EMAILJS */
  }

  /* IRÁ ACOMPANHAR O ESTADO DA VARIÁVEL enviado, SE ELA MUDAR PARA TRUE, IRÁ  DEPOIS DE 2 SEGUNDOS MUDA-LA PARA FALSE*/
  useEffect(() => {
    if (enviado) {
      const timer = setTimeout(() => {
        setEnviado(false);
      }, 2000);

      return () => clearTimeout(timer); // Cleanup para evitar problemas de memória
    }
  }, [enviado]);

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center pt-[10%] pb-20"
    >
      {/* Div que engloba todo o CONTACT */}
      <div className="relative px-4 w-150">
        {/* TITULO */}
        <motion.h2
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 1.2, ease: easeInOut }}
          className="text-center text-3xl font-bold mb-16 gradient-text"
        >
          Contato
        </motion.h2>

        <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
          {/* CONTAINER ONDE FICA O INPUT DE NOME */}
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 1.2, ease: easeInOut }}
            className="relative"
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              required
              className="input-style"
            />
          </motion.div>

          {/* CONTAINER ONDE FICA O INPUT DE EMAIL */}
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 1.2, ease: easeInOut, delay: 0.3 }}
            className="relative"
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemplo@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="input-style"
            />
          </motion.div>

          {/* CONTAINER ONDE FICA A TEXTAREA */}
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 1.2, ease: easeInOut, delay: 0.1 }}
            className="relative"
          >
            <textarea
              id="msg"
              name="msg"
              placeholder="Sua mensagem..."
              onChange={(e) => setMensagem(e.target.value)}
              value={mensagem}
              required
              rows={5}
              className="input-style resize-none"
            />
          </motion.div>

          <motion.button
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.8 }}
            type="submit"
            className="w-full btn-submit"
          >
            Enviar
          </motion.button>
        </form>

        {/* Renderiza a mensagem de sucesso caso o formulário tenha sido enviado */}
        {enviado && (
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 2.2 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             text-center bg-secondaryTheme text-white font-bold rounded-lg shadow-lg p-7"
          >
            Mensagem enviada com sucesso!
          </motion.span>
        )}
      </div>
    </section>
  );
};

export default Contact;
