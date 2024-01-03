import "./hero.scss";
import {motion} from "framer-motion";

const textVariants = {
    initial: {
        x:-500, 
        opactiy:0,
    },
    animate: {
        x:0,
        opactiy:1,
        transition:{
            duration:1,
            staggeredChildren: 0.1,
        }
    },
    scrollButton:{
        opactiy:0,
        y:10,
        transition:{
            duration: 2,
            repeat: Infinity,
        }
    }
    
};
const sliderVariants = {
    initial: {
        x:0, 
    
    },
    animate: {
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeattype: "mirror",
            duration: 20,
        }
    },
   
    
};

const Hero = () => {     
        return (
                <div className="hero">
                    <div className="wrapper">
                    <motion.div className="textContainer" 
                    variants={textVariants} 
                    initial="initial"
                     animate="animate">
                        <motion.h2 variants={textVariants}> MICADO PIERRE</motion.h2>
                        <motion.h1 variants={textVariants}>Software Engineer and Entrepreneur </motion.h1>
                        <motion.div variants={textVariants} className="buttons">
                            <motion.button variants={textVariants}>See the Latest Works</motion.button>
                            <motion.button variants={textVariants}>Contact Me</motion.button>
                        </motion.div>
                        <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                    </motion.div>
                    </div>
                    <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                        Realtor | Software Engineer | Entrepreneur
                    </motion.div>
                    <div className="imageContainer">  
                        <img src="/hero1.png" alt="" />
                    </div>
                </div>
        )
}

export default Hero 


