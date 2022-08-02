import React from 'react';
import {useParams} from 'react-router-dom';

const Detail = () => {
  let {movieId} = useParams();

  console.log(movieId);

  return (
    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <img
            alt=""
            className="locandina"
            src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
          />
          <h1>Bright</h1>
          <h4>2017, David Ayer</h4>
          <span className="minutes">117 min</span>
          <p className="type">Action, Crime, Fantasy</p>
        </div>
        <div className="movie_desc">
          <p className="text">
            Set in a world where fantasy creatures live side by side with
            humans. A human cop is forced to work with an Orc to find a weapon
            everyone is prepared to kill for.
          </p>
        </div>
      </div>
      <div className="blur_back bright_back"></div>
    </div>
  );
};

export default Detail;
