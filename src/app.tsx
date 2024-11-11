import { h } from "preact";
import About from "./pages/About";
import Work from "./pages/Work";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { Header } from "./components/Header";
import AnimatedCanvas from "./components/AnimatedCanvas";
import { Navbar } from "./components/Navbar";

export const App = () => (
  <>
    <AnimatedCanvas />
    <Header />
    <About />
    <Work />
    <Experience />
    <Contact />
  </>
);

export default App;
