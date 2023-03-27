import { useState, useEffect } from 'react';

import { getAllProjectsImagesAPI } from './services/imagesApi';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [images, setImages] = useState(null);

  const getAllImages = async () => {
    const response = await getAllProjectsImagesAPI('Godfather');
    setImages(response);
  };

  // useEffect(() => {
  //   getAllImages();
  // }, []);

  console.log(images);

  return (
    <>
      <Header />
      <main className='py-4'>
        <Container>
          <h1>Portfolio</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
