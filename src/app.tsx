import { h } from "preact";
import CanvasScene from "./components/CanvasScene";
import About from "./pages/About";
import Work from "./pages/Work";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { Navbar } from "./components/NavBar";

export const App = () => (
  <div>
    <Navbar />
    <CanvasScene />
    <About />
    <Work />
    <Experience />
    <Contact />
  </div>
);

export default App;
