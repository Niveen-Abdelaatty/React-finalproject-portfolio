import { useState, useEffect } from 'react';

import { getAllProjectsImagesAPI } from './services/imagesApi';
import './App.css';

function App() {
  const [images, setImages] = useState(null);

  const getAllImages = async () => {
    const response = await getAllProjectsImagesAPI('Godfather');
    setImages(response);
  };

  useEffect(() => {
    getAllImages();
  }, []);

  console.log(images);

  return (
    <div className='App'>
      <h1>Portfolio</h1>
    </div>
  );
}

export default App;
