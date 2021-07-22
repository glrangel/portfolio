import { motion } from "framer-motion";

function Home() {
    return (
        <div className="main-content-container">
            <motion.h1 className="component-headers" 
                initial={{y: -300, rotate: -40}}
                animate={{y: 0, rotate: 0}}
                transition={{duration: 1.5, type: 'spring', stiffness: 30}}
                exit={{rotate: 40, y:-300, opacity: 0}}
            >
                Home
            </motion.h1>
            <motion.div 
                // initial={{ x: '-100vw'}}
                // animate={{ x:0 }}
                // transition={{duration:0.5}}
                // style={{backgroundColor: 'rgba(23,159,244,0.1)'}} 
                className="main-content"
            >
                <motion.h1 
                    // initial={{scale: 0.5, x: '-50vw'}}
                    // animate={{scale:1.5, x: 0}}
                    // transition={{duration:1}}
                    initial={{opacity: 0, rotate: -20, x: -40}}
                    animate={{opacity: 1, rotate: 0, x: 0}}
                    transition={{duration: 1}}
                    exit={{rotate: 20, x:40, opacity: 0}}
                >
                    Stuff 1
                </motion.h1>
            </motion.div>
        </div>    
        )
}

export default Home;
