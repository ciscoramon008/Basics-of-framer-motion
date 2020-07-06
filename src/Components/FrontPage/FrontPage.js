import React from 'react';
import './FrontPage.css';
import { motion } from 'framer-motion';

const FrontPage = () => {
    return (
        <div className='front-page'>
            <motion.h1 
                className='display-1'
                initial={{
                    opacity: 0,
                    y: '-100vh'
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    delay: 0.2,
                    duration: 0.7,
                    type: 'spring',
                    stiffness: 150
                }}
            >
                WELCOME TO MY WEBSITE
            </motion.h1>
            <motion.button
                initial={{
                    textShadow: 'none'
                }}

                whileHover={{
                    scale: 1.2,
                    textShadow: '0px 0px 8px rgb(255, 255, 255)',
                    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
                }}
            >
                Click Me!
            </motion.button>
        </div>
    );
}

export default FrontPage;