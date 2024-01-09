import { useRef } from "react";
import './portfolio.scss'
import {motion, useScroll, useSpring} from "framer-motion"

const items = [
    {
        id: 1,
        title: "Web App",
        img: "https://images.unsplash.com/photo-1682686581220-689c34afb6ef?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
        id: 2,
        title: "Zbsports App", 
        img: "https://images.unsplash.com/photo-1704531815335-dab68018e8a9?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
        id: 3,
        title: "Non profit Organization App",
        img: "https://images.unsplash.com/photo-1704278921589-ac35120085dd?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
        id: 4,
        title: "Crypto App",
        img: "https://media.istockphoto.com/id/1463436821/photo/cryptocurrency-financial-data-and-red-lines-bitcoin-crisis.jpg?s=612x612&w=0&k=20&c=jcECWuXEX7h_B2GV42pp7ZvWOKlwv4r1NZyM5qMxybc=",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },

]



const Single = ({ item }) => {
    return (
        <section>
            {item.title}
        </section>
    )
}


const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["end end" , "start start"]
    });
    
    
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    
    });


    return (
        <div className="portfolio" ref={ref}>
            <motion.div className="progress"></motion.div>
            <h1 style={{ color: "orange", fontSize: "46px", position: "sticky", top: "0", left: "0", paddingTop: "50px", textAlign: "center" }}>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
