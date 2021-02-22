import React from 'react'
import ImageGrid from './ImageGrid';


//image array




const Products = () => {
    return (
        <div>
            <h4 style={{padding:'1em'}}>Products</h4>
            {/* passing imagelist array to image-grid */}
            <hr />
            <ImageGrid  /> 
            
        </div>
    )
}

export default Products
