import { useState, useEffect } from 'react';

import { getWeatherData } from '../services/imagesApi';
import { Row } from 'react-bootstrap';

import projects from '../projects';
import Project from './Project';

function HomePage() {
    const [cites, setCities] = useState(null);

  const getData = async () => {
    const response = await getWeatherData();
    setCities(response);
  };

  useEffect(() => {
    getData();
  }, []);

  // const city = cites.city;
  console.log(cites);

  return (
    <>
      <h1 className='text-center'>Lastest Projects</h1>
      <Row>
        {projects.map((project) => (
            <Project key={project._id} project={project} />
        ))}
      </Row>
    </>
  );
}

export default HomePage;
