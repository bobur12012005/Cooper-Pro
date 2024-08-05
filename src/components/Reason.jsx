import React from "react"

function Reason({ item }) {
    return (
        <div className="reason">
            <div className="img-place">
                <img src={item.poster} />
            </div>
            <span className='title'>{item.title}</span>
            <p className='description'>{item.description}</p>
            <div className='more'>
                <span>Читать больше</span>
                <img src="/icons/down.svg" />
            </div>
        </div>
    )
}

export default Reason