import React from 'react'
import './style.css'

function Gallery() {
    return (
        <div className="photo-grid container">
            <div className="memory">
                <img className="photo" src={require('../../assets/photos/1.jfif')}></img>
                <div className="words">mountains</div>
            </div>
            <div className="memory">
                <img className="photo" src={require('../../assets/photos/2.jfif')}></img>
                <div className="words">mountains</div>
            </div>
            <img src={require('../../assets/photos/3.jfif')}></img>
            <img src={require('../../assets/photos/4.jfif')}></img>
        </div>
    )
}

export default Gallery;