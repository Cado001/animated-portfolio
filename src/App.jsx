import "./app.scss";
import Hero from "./componenets/hero/Hero";
import Navbar from "./componenets/navbar/Navbar";
import Parallax from "./componenets/parallax/Parallax";
import Portfolio from "./componenets/portfolio/Portfolio";
import Services from "./componenets/services/Services";
import Contact from "./componenets/contact/Contact";
import Cursor from "./componenets/cursor/Cursor";

const App = () => {
  return <div>
      <Cursor />
    <section id="Homepage ">
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfoli0"><Parallax type="portfolio"/></section>
   <Portfolio />
    <section id="Contact">
      <Contact />
      </section>
  
  </div>;
};  

export default App;
