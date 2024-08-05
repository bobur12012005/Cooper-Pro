import React from "react"

function AllProduct({ item }) {
    return (
        <div className="product">
            <div className="product-top">
                <button className='product-like'>
                    <img src="/icons/product-like.svg" />
                </button>
                <img src={item.image} />
            </div>
            <div className="product-bottom">
                <div className="product-bottom-left">
                    <span>{item.description}</span>
                </div>
                <div className="product-bottom-right">
                    <span>{item.price}</span>
                </div>
            </div>
        </div>
    )
}

export default AllProduct