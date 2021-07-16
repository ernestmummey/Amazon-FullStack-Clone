import React from 'react'
import Product from '../Components/Product';
import SingleProduct from '../Components/SingleProduct';
import '../Style/Home.css'

const Home=(props)=>{
    return(
        <div className='home__pageContent'>
            <img className='home__backgroundImage' src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZmVhMDM4ZmYt/ZmVhMDM4ZmYt-OWQ2NjJjNmMt-w3000._CB668936041_.jpg'/>
            <div className='home__product'>
            <Product 
                title=''
                imageTopLeft=''
                imagetextTopLeft=''
                imageTopRight=''
                imagetextTopRight=''
                imageBottomLeft=''
                imagetextBottomLeft=''
                imageBottomRight=''
                imagetextBottomRight=''
                linkText=''
            />
            <SingleProduct
                title=''
                image=''
                price=''
                description=''
                linkText=''
            />
            </div>
        </div>
        
    )
}; 

export default Home