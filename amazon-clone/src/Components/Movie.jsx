import React from 'react';
import '../Style/Movie.css'

const Movie = props => {
    return (
        <div className="movie__container">
            <h1 className='movie__title'>{props.title}</h1>
            <div className="movie__imageContainer">
                <img className='movie__image'src={props.image} alt=''/>
            </div>
            <p className='movie__link'>{props.aTag}</p>
        </div>
    )
};

export default Movie;