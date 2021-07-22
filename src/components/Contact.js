import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

function Contact() {
    const [isCopied, setIsCopied] = useState(false);

    const variants = {
        copied: { opacity: 0, y: -80, display: "flex", transition: {duration: 1.3} },
        notCopied: { opacity: 1, y: -20, x: 150, rotate: 20, display: "none", transition: {duration: 0} },
      }
      
    return (
        <div className="main-content-container">
            <motion.h1 className="component-headers" 
                initial={{y: -400, rotate: -40}}
                animate={{y: 0, rotate: 0}}
                transition={{duration: 1.5, type: 'spring', stiffness: 30}}
                exit={{rotate: 40, y: -400, opacity: 0}}
            >
                Contact
            </motion.h1>
            <motion.div 
                // initial={{ x: '-100vw'}}
                // animate={{ x:0 }}
                // transition={{duration:0.5}}
                // style={{backgroundColor: 'rgba(255,255,255,0.1)'}} 
                className="main-content"
            >
                <motion.div 
                    // initial={{scale: 0.5, x: '-50vw'}}
                    // animate={{scale:1.5, x: 0}}
                    // transition={{duration:1}}
                    initial={{opacity: 0, rotate: -20, x: -40}}
                    animate={{opacity: 1, rotate: 0, x: 0}}
                    transition={{duration: 1}}
                    exit={{rotate: 20, x:40, opacity: 0}}
                    className="contact-data"

                >
                    <div id="email-container">
                        <h1>email: </h1>
                        <div id="clipboard-container">
                            <motion.button 
                                whileHover={{y: -5}}
                                onClick={() => {navigator.clipboard.writeText("glrangel25@gmail.com"); setIsCopied(isCopied => !isCopied);}}
                            >
                                glrangel25@gmail.com
                            </motion.button>
                            <motion.p
                                variants={variants}
                                initial="notCopied"
                                animate={isCopied ? "copied" : "notCopied"}
                                className="email-copied"
                            >
                                copied!
                            </motion.p>
                        </div>
                    </div>
                    <div id="github-container">
                        <h1>github: </h1>
                        <motion.button 
                            onClick={()=>window.open('https://www.github.com/glrangel','_blank')} target="_blank"
                            whileHover={{y: -5}}
                        >
                            glrangel
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Contact;
