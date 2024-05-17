/* eslint-disable react/no-unescaped-entities */
import { Header } from "./components/Header";
import { Home } from "./components/Hero";
import { About } from "./components/About";
import Footer from "./components/Footer";
import { TechStack } from "./components/Tech";
import { Portfolio } from "./components/Portfolio";
import { GetInTouch } from "./components/GetInTouch";

function App() {
  return (
    <>
      <Header />

      <Home />

      <About />

      <TechStack />

      <Portfolio />

      <GetInTouch />

      <Footer />
    </>
  );
}

export default App;
