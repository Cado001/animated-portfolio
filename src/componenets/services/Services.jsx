import "./services.scss"
import {motion} from "framer-motion"


const Services = () => {
    return (
        <motion.div className="services"> Services 
        <motion.div className="textContainer">
            <p>I focus on helping you brand grow 
            <br /> and invest in your future</p>
            <hr />
        </motion.div>
        <motion.div className="TitleContainer">
            <div className="title">
                <img src="/peopl.webp" alt="" />
                <h1> 
               <b> Unique </b>  Ideas
                 </h1>
            </div>
            <div className="title">
                <h1> 
               <b> For Your </b>  Business.
                 </h1>
            </div>
            <button>WHAT WE DO?</button>
        </motion.div>
        <motion.div className="listContainer">
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Please add Info On Branding </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Web and App Development</h2>
                <p>Please add Info On Branding </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Real Estate</h2>
                <p>Please add Info On Branding </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Immigration Services</h2>
                <p>Please add Info On Branding </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Property Mangement</h2>
                <p>Please add Info On Branding </p>
                <button>Go</button>
            </motion.div>
        </motion.div>

        </motion.div>
    )
   
}

export default Services; 