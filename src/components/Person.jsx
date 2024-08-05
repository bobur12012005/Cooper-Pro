import React from "react"

function Person({ item }) {
    return (
        <div className="person">
            <img className="union" src="/icons/union.svg" />
            <div className="img-place">
                <img src={item.image} />
            </div>
            <span className='name'>{item.name}</span>
            <p className='about'>{item.about}</p>
            <span className='date'>{item.date}</span>
        </div>
    )
}

export default Person