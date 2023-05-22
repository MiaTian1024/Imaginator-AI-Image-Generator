import React from 'react';
import { motion } from 'framer-motion';
import { StarsCanvas, EarthCanvas, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';


const Home = () => {
  return (
    <div className='relative flex flex-col gap-10 justify-center items-center h-screen'>  
      
        <div className='fixed top-0 left-0 w-full h-full'> 
        <StarsCanvas />
        </div>

        <div className='absolute h-[350px] z-1'> 
        <EarthCanvas />
        </div> 
        
        <div>
        <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount:0.25 }}
        className='absolute top-20 left-10'
        >   
        <TypingText title='Free Your Imagination' textStyles='text-center' />          
        </motion.div>  
        </div>     
       
          
    </div>     
       
  );
}

export default Home;


