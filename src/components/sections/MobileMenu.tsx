import { X } from "lucide-react";

interface navProps {
  menuOpen: boolean;
  /* Esse código indica que o setMenuOpen é uma função para atualizar um estado do tipo booleano */
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = (props: navProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 fixed top-0 left-0 w-full h-full bg-navBlack backdrop-blur-lg z-40 transition-all duration-300 ease-in-out
        ${
          /* Se o menuOpen for true, exibe a div, e faz a altura da div ocupar a tela inteira, se for false, oculta a div e ganha altura zerada */
          props.menuOpen
            ? "opacity-100 pointer-events-auto h-screen"
            : "opacity-0 pointer-events-none h-0"
        }`}
    >
      {/* BOTÃO X.
        QUANDO CLICADO, IRÁ MUDAR O STATE MENUOPEN PARA FALSO, ASSIM FECHANDO TODO O MOBILEMENU */}
      <button
        onClick={() => props.setMenuOpen(false)}
        className="absolute top-8 right-4 text-white focus:outline-none cursor-pointer"
        /* O QUE FAZ ESSA PROPRIEDADE aria label */
        aria-label="Close menu"
      >
        <X size={30} className="stroke-2" />
      </button>

      {/* HOME */}
      <a
        href="#home"
        /* AO CLICAR EM UM DOS LINKS DO MENU, IRÁ MUDAR O STATE MENUOPEN PARA FALSO, ASSIM FECHANDO TODO O MOBILEMENU */
        onClick={() => props.setMenuOpen(false)}
        className={`text-2xl font-semibold text-white mt-4 transform transition-transform duration-700${
          props.menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-32"
        }`}
      >
        Home
      </a>
      {/* SOBRE */}
      <a
        href="#about"
        onClick={() => props.setMenuOpen(false)}
        className={`text-2xl font-semibold text-white mt-4 transform transition-transform duration-400${
          props.menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-32"
        }`}
      >
        Sobre
      </a>
      {/* PROJETOS */}
      <a
        href="#projects"
        onClick={() => props.setMenuOpen(false)}
        className={`text-2xl font-semibold text-white mt-4 transform transition-transform duration-600 ${
          props.menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-32"
        }`}
      >
        Projetos
      </a>
      {/* CONTATO */}
      <a
        href="#contact"
        onClick={() => props.setMenuOpen(false)}
        className={`text-2xl font-semibold text-white mt-4 transform transition-transform duration-800 ${
          props.menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-32"
        }`}
      >
        Contato
      </a>
    </div>
  );
};

export default MobileMenu;
