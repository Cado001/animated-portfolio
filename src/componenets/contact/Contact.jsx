import { useRef, useState  } from "react";
import "./contact.scss";
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';


const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}


// const Contact = () => {

//     const ref = useRef()

//     const isInView = useInView(ref, { margin: "-100px" })
//     return (
//         <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
//             ref={ref}
//             <motion.div className="textContainer" variants={variants}>
//                 <motion.h1>Let's Work Together</motion.h1>
//                 <p>Get in Touch</p>
//                 <motion.div className="item" variants={variants}>
//                     <h2>Mail</h2>
//                     <span>Micadopierre01@gmail.com</span>
//                 </motion.div>
//                 <motion.div className="item" variants={variants}>
//                     <h2>Address</h2>
//                     <span>Broward County</span>
//                 </motion.div>
//                 <motion.div className="item" variants={variants}>
//                     <h2>Phone </h2>
//                     <span>+1 (954)-205-2871 </span>
//                 </motion.div>
//             </motion.div>
           
//             <div className="formContainer">
//                 <motion.div
//                     className="phoneSvg"
//                     intitial={{ opacity: 1 }}
//                     whileInView={{ opacity: 0 }}
//                     transition={{ delay: 3, duration: 1 }}
//                 >
//                     <svg width="450px" height="450px" viewBox="0 0 24 24"
                       
//                         strokeWidth={0.2}
//                         fill="none"
//                         intitial={{ pathlength: 0 }}
//                         whileInView={{ pathlength: 1 }}
//                         transition={{ delay: 3, duration: 1 }}
//                         xmlns="http://www.w3.org/2000/svg"><g
//                             id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
//                                 stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
//                             <path d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
//                             <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
//                             <path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g>
//                     </svg>
//                 </motion.div>

//                 <motion.form
//                     intitial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ delay: 4, duration: 1 }}>
//                     <input type="text" required placeholder="Name" />
//                     <input type="email" required placeholder="Email" />
//                     <textarea rows={8} placeholder="Message " />
//                     <button>Submit</button>
//                 </motion.form>
//             </div>
//         </motion.div>
//     )
// }
// export default Contact;

const Contact = () => {
    const ref = useRef()
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const isInView = useInView(ref, { margin: "-100px" })

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cdpeh7f', 'template_6dm5tho', formRef.current,  'ejXXv-N6krC-aV9jj')
          .then((result) => {
              setSuccess(false)
            }, (error) => {
                setError(true)
            });
      };

    return (
        <motion.div className="contact" 
        variants={variants} 
        initial="initial"
         whileInView="animate" 
         ref={ref}
         >
            <motion.div className="textContainer" variants={variants}>
                <motion.h1>Let's Work Together</motion.h1>
                <p>Get in Touch</p>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>Micadopierre01@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>Broward County</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone </h2>
                    <span>+1 (954)-205-2871 </span>
                </motion.div>
            </motion.div>

            <div className="formContainer">
                <motion.div
                    className="phoneSvg"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    <svg width="450px" height="450px" color="orange" viewBox="0 0 24 24"
                        strokeWidth={0.2}
                        fill="none"
                        initial={{ pathlength: 0 }}
                        whileInView={isInView && { pathlength: 1 }}
                        transition={{ delay: 3, duration: 1 }}
                        xmlns="http://www.w3.org/2000/svg">
                       
                        {/* Your SVG code */}
                        <g
                            id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
                                stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                            <path d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
                            <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
                            <path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> 
                            </g>
                    </svg>
                </motion.div>
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1 }}
                >
                    <input type="text" required placeholder="Name" name="name" />
                    <input type="email" required placeholder="Email" name="email"/>
                    <textarea rows={8} placeholder="Message " name="message"/>
                    <button>Submit</button>
                    {error && "Error" }
                    {success && "Success" }
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact;
