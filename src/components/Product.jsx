import React from "react"

function Product({ item }) {
    return (
        <div className="product" style={{ backgroundImage: `url('${item.image}')` }}>
            <span>{item.description}</span>
        </div>
    )
}

export default Product