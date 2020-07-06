import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const demoVariant = {
        hiddenX: {
            x: '-50vw'
        },
        show: {
            x: 0,
            transition: {
                delay: 0.4,
                duration: 0.6
            }
        }
    }

    return (
        <motion.nav
            className='navbar navbar-expand-md navbar-dark'
            id='header-navbar'
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, type: 'tween' }}
            // transition={{ type: 'inertia', velocity: 50 }}
        >
            <motion.div
                initial={{ x: '50vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 0.4, type: 'tween' }}
            >
                <Link to='/' className='navbar-brand'>Kaustav</Link>
            </motion.div>
            <button className='navbar-toggler' data-toggle='collapse' data-target='#navbar-collapse'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div id='navbar-collapse' className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                    <motion.li 
                        className='nav-item'
                        variants={demoVariant}
                        initial='hiddenX'
                        animate='show'
                    >
                        <Link to='/' className='nav-link'>Link 1</Link>
                    </motion.li>
                    <motion.li 
                        className='nav-item'
                        variants={demoVariant}
                        initial='hiddenX'
                        animate='show'
                    >
                        <Link to='/' className='nav-link'>Link 2</Link>
                    </motion.li>
                    <motion.li 
                        className='nav-item'
                        variants={demoVariant}
                        initial='hiddenX'
                        animate='show'
                    >
                        <Link to='/' className='nav-link'>Link 3</Link>
                    </motion.li>
                </ul>
            </div>
        </motion.nav>
    );
}

export default Navbar;