import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import Navbar from "./components/layout/Navbar";
import Project from "./sections/Projects";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <Footer />
    </>
  );
};
export default App;
