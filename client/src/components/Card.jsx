import React from 'react';
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'

import { download } from '../assets';
import { downloadImage } from '../utils';
import { fadeIn } from '../utils/motion'


const Card = ({ _id, name, prompt, photo}) => {
  return (
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="rounded-xl group relative shadow-card hover:shadow-cardhover card"
      >
    <div>
      <img
        className="w-full h-auto object-cover rounded-xl transition-transform duration-300 transform hover:scale-110"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-primary m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-white border-none">
            <img src={download} alt="download" className="w-7 h-7 object-contain" />
          </button>
        </div>
      </div>
    </div>
    </Tilt>
)}
export default Card;