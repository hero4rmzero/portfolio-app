import React from 'react';
import { Button } from '@mui/material';

const Home = () => {
  // Filler content
  const randomImage = "https://picsum.photos/600/400"; // Random image placeholder
  const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet eros neque."; // Lorem Ipsum text

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Karyna Yefanova</h1>
      <p className="text-xl mb-4">Full-stack Developer | Designer | Product Architect</p>

      {/* Filler image */}
      <img src={randomImage} alt="Random" className="rounded-lg shadow-lg mb-4" />
      
      {/* Filler text */}
      <p className="text-lg mb-4">{loremText}</p>

      <Button variant="contained" color="primary">Download Resume</Button>
    </div>
  );
};

export default Home;
