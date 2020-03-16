import React from 'react'
import './style.css'
import photos from '../../data'

function Gallery() {
    return (
        <div className="photo-grid container">
            {
                photos.map(photo => (
                    <div className="memory" key={photo.id}>
                        <img className="photo" src={photo.photo}></img>
                        <div className="words">{photo.words}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Gallery;