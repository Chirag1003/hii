import React from 'react';
import chiragImage from './assests/chirag.jpg'; 
import myCV from './assests/Chirag_cv.pdf'

const Home = () => {
    const handleDownloadCV = () => {
       
        const link = document.createElement('a');
        link.href = myCV; 
        link.download = 'Chirag_cv.pdf'; 
        document.body.appendChild(link);
        link.click(); 
        document.body.removeChild(link); 
    };
    
    return (
        <div className='bg-custom-dark pt-[5rem] '>
           <div className='flex flex-col gap-y-3'>
           <img src={chiragImage} alt="Chirag"  className="w-40 h-45 rounded-full mx-auto transition duration-300 transform hover:scale-110"/>
            
            <h3 className='text-center text-white'>Hello, I am</h3>

           <h2 className='text-center font-bold text-white text-3xl transition duration-300 hover:text-blue-500'> Chirag Sangwan</h2>
           <h2 className='text-center font-bold text-gray-400' > Aspiring Software Engineer</h2>
           </div>
           <div className='mt-4 flex justify-center gap-6'>
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:scale-95 transition duration-300"
          
          
            
           
        onClick={() => window.open('https://drive.google.com/file/d/1g2aSe0pThJSHhhidEeVxCuV__h--l8WA/view?usp=sharing', '_blank')}>
    Download CV
</button>
   <a href="#contact">
   <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:scale-95 transition duration-300 "
        >
            Contact Info
            
        </button>
   </a>
        
        
        </div>
               </div>
               
        
    );
}

export default Home;
