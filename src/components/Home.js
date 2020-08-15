import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

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
          animate={{scale: 1.5}}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home