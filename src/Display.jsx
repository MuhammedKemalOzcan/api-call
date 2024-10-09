import React from 'react'
import ImageItem from './ImageItem'

function Display({ imageHolder }) {
    return (
        <div className='imageList'>
            {
                imageHolder.map((image, index) => {
                    return <ImageItem key={index} image={image} />
                })
            }
        </div>
    )
}

export default Display
