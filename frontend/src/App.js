import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
//import ImageCard from './components/ImageCard';
import Cards from './components/Cards';
import Welcome from './components/Welcome';
//import { Container, Row, Col } from 'react-bootstrap';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

// function App() {
const App = (e) => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      {images.length > 0 ? (
        <Cards images={images} setImages={setImages} />
      ) : (
        <Welcome />
      )}
    </div>
  );
};

export default App;
