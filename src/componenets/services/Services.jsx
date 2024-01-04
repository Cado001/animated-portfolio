import "./services.scss"
import {motion} from "framer-motion"


const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity:0,
    },
    animate: {
        x:0,
        opacity:1,
        y:0,
        transition: {
            duration: 1,
            staggeredChildren: 0.1,
        },
    },
}



const Services = () => {
    return (
        <motion.div className="services" variants={variants} initial="intial" animate="animate"> Services 
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping you brand grow 
            <br /> and investing in your future</p>
            <hr />
        </motion.div>
        <motion.div className="TitleContainer"  variants={variants}>
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
        <motion.div className="listContainer"  variants={variants}>
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