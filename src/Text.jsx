import { motion, spring } from "framer-motion"
import { useState } from "react";


const Test = () => {


    const [open, setOpen] = useState(false);

    const variants = {
        visible:(i)=>( {
             opacity: 1, 
             x: 100, 
             transition: { delay: i * 0.3},
            }),
        hidden: { opacity: 0 },
    }

    const items = ["Item 1", "Item 2", "Item 3", "Item 4" ]

    return (
        <div className="course">
            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map((item,i) => (
                    <motion.li variants={variants} key={item} custom={i}>
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

export default Test;