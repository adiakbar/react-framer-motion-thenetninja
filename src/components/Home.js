import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const buttonVariants = {
  hover: {
    scale: 1.1, // keyframe
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity // key frame unlimited
    }
  }
}

const Home = () => {
  return (
    <div className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <motion.h2 animate={{ fontSize: 50 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home
