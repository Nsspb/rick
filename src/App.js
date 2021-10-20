import './App.css';
import MediaCard from './components/MediaCard'
import Head from './components/Head';
import { Container } from '@mui/material';




function App() {
  return (
    <>
    <Head />
    <Container
    sx={{mt: '2rem'}}
    >
    <MediaCard />
    </Container>
  
    </>
  );
}

export default App;
