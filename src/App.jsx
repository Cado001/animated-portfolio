import Test from "./Text";
import "./app.scss";
import Hero from "./componenets/hero/Hero";
import Navbar from "./componenets/navbar/Navbar";
import Parallax from "./componenets/parallax/Parallax";
import Services from "./componenets/services/Services";

const App = () => {
  return <div>
    <section id="Homepage ">
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfoli0"><Parallax type="portfolio"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
   {/* <Test />
   <Test /> */}
  </div>;
};  

export default App;
