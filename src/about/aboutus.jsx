import React from 'react';
import {withRouter} from 'react-router-dom';

const aboutus = () => {

<div className='max-with-[1640] mx auto p-4 '>
    <div>
        <h1 className='text-white px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center'>Meet</h1>
        <span className='text-purple-500'>
            0ur
        </span>
        <h1 className='text-white px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center'>
            Team
        </h1>
    <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt='/' 
            />

    </div>
    <div className='rounded-xl relative border-indigo-500/50 shadow-md '>
 <div className='absolute w-300 h-500 bg-black/50 rounded-md text-purple '>
       <p className='font-bold text-2xl px-2 pt-4'>
           CESAR
       </p>
        <p className=' px-2'> 
         CHEF
        </p>
        
   </div>
   <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
   src="https://images.unsplash.com/photo-1534706936160-d5ee67737249?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsYWRvJTIwZGUlMjBtZW50YXxlbnwwfHwwfHx8MA%3D%3D"
   alt='/' 
   />

   </div>     
</div>

}


export default withRouter(aboutus)