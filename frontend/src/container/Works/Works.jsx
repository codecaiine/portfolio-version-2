import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Works.scss';

const Works = () => {
    return (
        <> 
          <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>
        </>
    )
}

export default Works