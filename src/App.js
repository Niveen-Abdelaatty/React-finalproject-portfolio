import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <Header />
      <main className='py-4'>
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
