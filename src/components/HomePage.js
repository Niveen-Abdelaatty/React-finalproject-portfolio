import { useState, useEffect } from 'react';

import { getAllProjectsImagesAPI } from '../services/imagesApi';
import { Row, Col } from 'react-bootstrap';

import projects from '../projects';
import Project from './Project';

function HomePage() {
    const [images, setImages] = useState(null);

  const getAllImages = async () => {
    const response = await getAllProjectsImagesAPI('Godfather');
    setImages(response);
  };

  useEffect(() => {
    getAllImages();
  }, []);

  console.log(images.Poster);

  return (
    <>
      <h1 className='text-center'>Lastest Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
            <Project images={images} project={project} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomePage;
