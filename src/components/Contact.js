import { motion } from "framer-motion";

function Contact() {
    return (
        <div className="main-content-container">
            <motion.h1 className="component-headers" 
                initial={{x: 400, rotate: -10}}
                animate={{x: 20, rotate: 0}}
                transition={{duration: 1.5, type: 'spring', stiffness: 30}}
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
                <motion.h1 
                    // initial={{scale: 0.5, x: '-50vw'}}
                    // animate={{scale:1.5, x: 0}}
                    // transition={{duration:1}}
                    initial={{opacity: 0, rotate: -10, x: -20}}
                    animate={{opacity: 1, rotate: 0, x: 0}}
                    transition={{duration: 1}}
                >
                    Stuff 1
                </motion.h1>
            </motion.div>
        </div>
    )
}

export default Contact;
