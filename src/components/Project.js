import { Card } from 'react-bootstrap';

const Project = ({ project, images }) => {
  return (
    <Card className='my-3 p-3 rounded' style={{ width: '18rem' }}>
      <Card.Img src={images.Poster} variant='top' />
      <Card.Body>
        <Card.Title as='div'>
          <strong>{project.name}</strong>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Project;
