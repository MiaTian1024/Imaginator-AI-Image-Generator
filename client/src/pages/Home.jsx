import React from 'react';
import { StarsCanvas } from '../components';

const Home = () => {
  return (
    <div className='relative flex flex-col gap-10 justify-center items-center h-screen'>  
      
        <div className='fixed top-0 left-0 w-full h-full'> 
        <StarsCanvas />
        </div>

    </div>     
       
  );
}

export default Home;


