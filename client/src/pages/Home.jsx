import React from 'react';
import { Stars } from '../components';

const Home = () => {
  return (
    <div>
      <div className='absolute my-60 mx-auto'>      
        <h1 className='font-extrabold text-white text-[32px] z-10'>Free Your Imagination</h1>      
      </div>
      <Stars /> 
    </div>
    
  );
}

export default Home;


