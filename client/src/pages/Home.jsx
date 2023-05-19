import React from 'react';
import { motion } from 'framer-motion';
import { Stars, TypingText } from '../components';
import { styles } from "../styles";
import { staggerContainer } from '../utils/motion';


const Home = () => {
  return (
    <div >
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount:0.25 }}
        className={`${styles.innerWidth} bg-transparant pt-10 `}
      >   
        <TypingText title='Free Your Imagination' textStyles='text-center' />          
      </motion.div> 

      <Stars /> 
    </div>
  );
}

export default Home;


