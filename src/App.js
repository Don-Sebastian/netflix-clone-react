import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals, action, trending, horrorMovies, romanceMovies, documentaries, comedyMovies} from './urls';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost title="Netflix Originals" url={originals} />
      <RowPost title="Trending " isSmall url={trending} />
      <RowPost title="Actions" isSmall url={action} />
      <RowPost title="Horror Movies" isSmall url={horrorMovies} />
      <RowPost title="Romance Movies" isSmall url={romanceMovies} />
      <RowPost title="Documentaries" isSmall url={documentaries} />
      <RowPost title="Comedy Movies" isSmall url={comedyMovies} />
    </div>
  );
}

export default App;
