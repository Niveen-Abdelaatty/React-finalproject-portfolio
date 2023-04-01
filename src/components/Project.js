import { Card } from 'react-bootstrap';

const Project = ({ project }) => {
  return (
    <Card className='m-1 p-2' style={{ width: '20rem' }}>
      <Card.Img variant='top' src={project.image} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Card.Text>Available In: </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};

export default Project;
