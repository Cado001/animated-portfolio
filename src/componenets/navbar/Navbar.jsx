// import "./navbar.scss"
// import Sidebar from "../sidebar/Sidebar";
// import { motion } from "framer-motion";

// const Navbar = () => {
//     return (
//         <div className="navbar">
//             {/* Sidebar */}
//             <Sidebar />
//             <div className="wrapper">
//                 <motion.span
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: 2, scale: 1}}
//                     transition={{ duration:0.5 }}>
//                     Cado Dev</motion.span>

//                 <div className="social">
//                     <a href="#"><img src="/facebook.png" alt="" /></a>
//                     <a href="#"><img src="/instagram.png" alt="" /></a>
//                     <a href="#"><img src="/youtube.png" alt="" /></a>
//                     <a href="#"><img src="/linktree5.png" alt="" /></a>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar


import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.div className="title">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 2, scale: 1}}
                        transition={{ duration:0.5 }}>
                        Cado Dev
                    </motion.span>
                </motion.div>

                <div className="social">
                    <a href="#"><img src="/facebook.png" alt="" /></a>
                    <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a href="#"><img src="/youtube.png" alt="" /></a>
                    <a href="#"><img src="/linktree5.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

