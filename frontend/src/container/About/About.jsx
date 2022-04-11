import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';

const About = () => {

    const abouts = [];

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
      const query = '*[_type == "abouts"]';

    }, []);

    return (
        <> 
         <h2 className="head-text">I Know that <span>Clean Code</span> <br />means  <span>Good Code</span></h2>
         <div className="app__profiles">
            {abouts.map((about, index) => (
                <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-item"
                key={about.title + index}
                >
                <img src={about.imgUrl} alt={about.title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
                </motion.div>
            ))}
         </div>
        </>
    )
}

export default About