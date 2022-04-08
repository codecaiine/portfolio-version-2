import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

const Header = () => {
    return (
        <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
        >
        <div className="app__header-badge">
        <div className="badge-cmp app__flex">
            
        </div>
        </div>

        </motion.div>
    )
}

export default Header