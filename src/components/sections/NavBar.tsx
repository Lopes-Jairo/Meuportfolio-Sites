import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Menu } from "lucide-react";

interface navProps {
  menuOpen: boolean;

  /* Esse código indica que o setMenuOpen é uma função para atualizar um estado do tipo booleano */
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar = (props: navProps) => {
  useEffect(() => {
    /* O scroll da pagina recebe hidden se menuOpen for true, e recebe nada se for false */
    document.body.style.overflow = props.menuOpen ? "hidden" : "";
  }, [props.menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-navBlack backdrop-blur-lg border-white/10">
      <div className="max-w-5xl mx-auto px-4 p-3">
        <div className="flex justify-between items-center h-16">
          {/* LOGO NOME*/}
          <a
            id="logo"
            href="#home"
            className="flex gap-2 font-mono text-xl font-bold text-white"
          >
            <span className="block text-mainTheme animate-bounce text-2xl">
              {"<"}
            </span>
            <p className="animate-pulse">Portfólio</p>
            <span
              className="block text-secondaryTheme text-2xl animate-bounce"
              style={{ animationDelay: "500ms" }}
            >
              {"/>"}
            </span>
          </a>

          {/* CONTAINER DO ICONE HAMBURGUER*/}
          <div
            id="burger-zip"
            /* Quando a tela for maior ou igual a 768px, essa div será oculta */
            className="w-7 h-5 cursor-pointer z-40 md:hidden"
            /* Quando esse container for clicado, setMenuOpen altera o valor de menuOpen para o valor oposto */
            onClick={() => props.setMenuOpen((prev) => !prev)}
          >
            {/* ICONE HAMBURGUER*/}
            <Menu size={30} />
          </div>

          {/*CONTAINER DO MENU */}
          <div className="hidden md:flex items-center space-x-8 font-extrabold">
            <a
              href="#home"
              className="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
            >
              Home
              <span className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-mainTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"></span>
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
            >
              Sobre
              <span className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-mainTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"></span>
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
            >
              Projetos
              <span className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-mainTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
            >
              Contato
              <span className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-mainTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
