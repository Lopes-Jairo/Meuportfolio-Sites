import { useState, useEffect, forwardRef } from "react";

interface DigitandoProps {
  texto: string;
  classesTw?: string; // Estilização do texto
  classeCursor?: string; // Estilização do cursor
}

const Digitando = forwardRef<HTMLHeadingElement, DigitandoProps>(
  ({ texto, classesTw = "", classeCursor = "" }, ref) => {
    const [index, setIndex] = useState(0);
    const [deletando, setDeletando] = useState(false);
    const [mostrarCursor, setMostrarCursor] = useState(true);

    useEffect(() => {
      const velocidade = deletando ? 30 : 80;
      const pausa = index === texto.length ? 2000 : index === 0 ? 500 : 0;

      const timeout = setTimeout(() => {
        setIndex((prev) => (deletando ? prev - 1 : prev + 1));

        if (index === texto.length) setDeletando(true);
        if (index === 0 && deletando) setDeletando(false);
      }, velocidade + pausa);

      return () => clearTimeout(timeout);
    }, [index, deletando, texto]);

    useEffect(() => {
      const intervalo = setInterval(
        () => setMostrarCursor((prev) => !prev),
        500
      );
      return () => clearInterval(intervalo);
    }, []);

    return (
      <h1 ref={ref} className={classesTw}>
        {index > 0 || deletando ? texto.slice(0, index) : ""}
        <span
          className={`${classeCursor} inline-block w-[0.5ch]`}
          style={{ opacity: mostrarCursor ? 1 : 0 }}
        >
          |
        </span>
      </h1>
    );
  }
);

export default Digitando;
