import { motion } from "framer-motion";

function Portfolio() {
    return (
        <div className="main-content-container">
            <motion.h1 className="component-headers" 
                initial={{y: -500, rotate: -40}}
                animate={{y: 0, rotate: 0}}
                transition={{duration: 1.5, type: 'spring', stiffness: 30}}
                exit={{rotate: 40, y:-500, opacity: 0}}

            >
                Portfolio
            </motion.h1>
            {/* Content */}
            <motion.div 
                // initial={{ x: '-100vw'}}
                // animate={{ x:0 }}
                // transition={{duration:0.5}}
                // style={{backgroundColor: 'rgba(218,37,37,0.1)'}} 
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

                >
                    <h1>Portfolio</h1>
                    <div>
                        Demo project 1
                    </div>
                    <div>
                        Demo Project 2
                    </div>
                </motion.div>
            </motion.div>
        </div>    
        )
}

export default Portfolio;
