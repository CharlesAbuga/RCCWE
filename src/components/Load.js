import React from 'react'
import { motion} from 'framer-motion';
import rccwe from '../static/rccwe.png'


function Load() {
        const loaderVariants = {
          initial: {
            rotate: 0,
          },
          animate: {
            rotate: 360,
            transition: {
              duration: 1,
              repeat: Infinity, // Infinite rotation
              ease: 'linear',
            },
          },
        };
  return (
    <div className="loader">
      <motion.img
      src={rccwe}
        className="spinner"
        variants={loaderVariants}
        initial="initial"
        animate="animate"
      ></motion.img>
    </div>
  )
}

export default Load