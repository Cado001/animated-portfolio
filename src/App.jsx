import Test from "./Text";
import "./app.scss";
import Navbar from "./componenets/navbar/Navbar";



const App = () => {
  return <div>
    <section id="Homepage ">
      <Navbar />
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portfoli0">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
   {/* <Test />
   <Test /> */}
  </div>;
};  

export default App;
