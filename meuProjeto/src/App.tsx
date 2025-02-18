import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/sections/NavBar";
import MobileMenu from "./components/sections/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  /* Esse state será usado no Navbar e no MobileNavbar, ambos tem uma props que representa o estado MenuOpen e a função de estado SetMenuOpen */
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Se isLoaded for false, o componente loadscreen é exibido, quando acabar o tempo de animação, ele vira true e o componente loadingScreen deixa de ser exibido*/}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        /* Se isloaded for true, exibe(opacity-100) todos os componentes dentro desta div, se for false, recebe opacidade 0*/
        className={`min-h-screen bg-[] transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-deepBlue text-myWhite`}
      >
        {/* Navbar --------- será exibida se dentro dela o menuOpen for true */}
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* MobileMenu ------------- Menu será ebixido se dentro dele o meuOpen for true */}
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* HOME ------- */}
        {/* Aqui so vai renderizar o Home quando o Loadscreen tiver finalizado, para serem visíveis as animações de carregamento */}
        {isLoaded && <Home />}

        {/* ABOUT ------- */}
        <About />

        {/* PROJETOS */}
        <Projects />

        {/* CONTATO */}
        <Contact />

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}

export default App;
