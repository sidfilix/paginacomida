import React from 'react';
import {withRouter} from 'react-router-dom'

const HeadlineCards = () => {
        
  return( 

   <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6' >
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>
                    Strawberry Milkshake
                </p>
                 <p className=' px-2'> 
                370 oz
                 </p>
                 <button className='border-white bg-white text-black mx-2 absolute bottom-4'> 
                    Order Now
                 </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt='/' 
            />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>
                    Chicken Nuggets
                </p>
                 <p className=' px-2'> 
                  12 pz
                 </p>
                 <button className='border-white bg-white text-black mx-2 absolute bottom-4'> 
                    Order Now
                 </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt='/' 
            />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>
                    Sandwich
                </p>
                 <p className=' px-2'> 
                  Beef or Chiken
                 </p>
                 <button className='border-white bg-white text-black mx-2 absolute bottom-4'> 
                    Order Now
                 </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbmR3aWNofGVufDB8fDB8fHww"
            alt='/' 
            />
        </div>
         <div className='rounded-xl relative'>
         <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
             <p className='font-bold text-2xl px-2 pt-4'>
                 Cofee
             </p>
              <p className=' px-2'> 
               300 oz
              </p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'> 
                 Order Now
              </button>
         </div>
         <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
         src="https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VwJTIwb2YlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D"
         alt='/' 
         />
     </div>
      <div className='rounded-xl relative'>
      <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>
              Tacos
          </p>
           <p className=' px-2'> 
            3 pz
           </p>
           <button className='border-white bg-white text-black mx-2 absolute bottom-4'> 
              Order Now
           </button>
      </div>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
      src="https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFjb3N8ZW58MHx8MHx8fDA%3D"
      alt='/' 
      />
  </div>
   <div className='rounded-xl relative'>
   <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
       <p className='font-bold text-2xl px-2 pt-4'>
           Ice Cream
       </p>
        <p className=' px-2'> 
         1 pz
        </p>
        <button className='transition duration-150 ease-in-out bg-indigo-500 shadow-lg shadow-indigo-500/50 border-white  text-black mx-2 absolute bottom-4'> 
           Order Now
        </button>
   </div>
   <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
   src="https://images.unsplash.com/photo-1534706936160-d5ee67737249?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsYWRvJTIwZGUlMjBtZW50YXxlbnwwfHwwfHx8MA%3D%3D"
   alt='/' 
   />
</div>
<div className='rounded-xl relative'>
 <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
<button type="button">Click</button>
       <p className='font-bold text-2xl px-2 pt-4'>
           pruebas
       </p>
        <p className=' px-2'> 
        about us prueba 
        </p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4'> 
           Order Now
        </button>
   </div>
   <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
   src="https://images.unsplash.com/photo-1534706936160-d5ee67737249?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsYWRvJTIwZGUlMjBtZW50YXxlbnwwfHwwfHx8MA%3D%3D"
   alt='/' 
   />
</div>
    </div>
    
);
 };

export default withRouter(HeadlineCards);
