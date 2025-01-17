import "./services.scss"
import { motion, useInView } from "framer-motion"


const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggeredChildren: 0.1,
        },
    },
};



const Services = () => {

    // const ref = useRef()

    // const isInView = useInView(ref, { margin: "-200px" })



    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            whileInView="animate"
            // ref={ref}
            // animate={isInView && "animate"}
        >

            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping you brand grow
                    <br /> and investing in your future</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.png" alt="" />
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Unique</motion.b>  Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}> For Your </motion.b>  Business.
                    </h1>
                    <button className="customButton">WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Please add Info On Branding </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Web and App Development</h2>
                    <p>Please add Info On Branding </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Real Estate</h2>
                    <p>Please add Info On Branding </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Immigration Services</h2>
                    <p>Please add Info On Branding </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Property Mangement</h2>
                    <p>Please add Info On Branding </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>

        </motion.div>
    )

}

export default Services; 