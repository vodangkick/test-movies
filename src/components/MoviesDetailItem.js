import React from 'react';

export default function MoviesDetailItem({ item }) {
    const { title, poster_path, overview } = item;
    return (
        <div className="detail-movies">
            <h1>{title}</h1>
            <img src={poster_path} alt={title} />
            <p>
                {overview}
            </p>
        </div>
    )
}
