import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../constants/constants';


function RowPost({title, isSmall, url}) {
    const [movies, setMovies] = useState([])
    const [urlId, seturlId] = useState('')
useEffect(() => {
    axios.get(url).then((response) => {
        setMovies(response.data.results);
    })
        .catch((err) => {
        alert('Network error');
  });
}, [url])
    
    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };

    const handleMovieTrailer = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                seturlId(response.data.results[0]);
            }
            else {
                console.log('Unavailable Trailer');
            }
        })
    }


  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((obj, index) => (
          <img onClick={() => handleMovieTrailer(obj.id)}
            className={isSmall ? "small-poster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster-img"
          />
        ))};
      </div>
          {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost