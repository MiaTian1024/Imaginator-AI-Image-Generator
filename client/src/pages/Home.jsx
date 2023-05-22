import React from 'react';
import { StarsCanvas, EarthCanvas} from '../components';
import { staggerContainer } from '../utils/motion';


const Home = () => {
  return (
    <div className='relative flex flex-col gap-10 justify-center items-center h-screen'>  
      
        <div className='fixed top-0 left-0 w-full h-full'> 
        <StarsCanvas />
        </div>

        <div className='absolute top-13 h-[250px] z-1'> 
        <EarthCanvas />
        </div> 
                
    </div>     
       
  );
}

export default Home;


