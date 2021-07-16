import React from 'react'
import Product from '../Components/Product';
import SingleProduct from '../Components/SingleProduct';
import '../Style/Home.css'

const Home=(props)=>{
    return(
        <div className='home__pageContent'>
            <div className="home__container">
                <img 
                    className='home__backgroundImage' 
                    src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZmVhMDM4ZmYt/ZmVhMDM4ZmYt-OWQ2NjJjNmMt-w3000._CB668936041_.jpg' 
                    alt=''
                />
                <div className="home__productsContainer">
                    <div className='home__multiProduct'>
                        <Product 
                            clotingTitle='Clothing deals in Outlet'
                            clothingImageTopLeft='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_WC_372x232_B07Y2PQP2G_231717aa._SY232_CB668934226_.jpg'
                            clothingImagetextTopLeft='Women'
                            clothingImageTopRight='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_MC_372x232_B01MA0X5RC_428eac96._SY232_CB668934226_.jpg'
                            clothingImagetextTopRight='Men'
                            clothingImageBottomLeft='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_GC_372x232_B08DG422HK_50f5511e._SY232_CB668981049_.jpg'
                            clothingImagetextBottomLeft='Girls'
                            clothingImageBottomRight='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_BC_372x232_B08THJN1W7_113cc121._SY232_CB668981049_.jpg'
                            clothingImagetextBottomRight='Boys'
                            clothingLinkText='See more'
                        />
                    </div>
                        <SingleProduct
                            title='Deal of the Day'
                            image=''
                            price='299-499'
                            description='Today only: Up to 80% off, select top reads on Kindle'
                            linkText='See all deals'
                        />
                        <Product 
                            hairTitle='Clothing deals in Outlet'
                            hairImageTopLeft='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_WC_372x232_B07Y2PQP2G_231717aa._SY232_CB668934226_.jpg'
                            hairImagetextTopLeft='Women'
                            hairImageTopRight='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_MC_372x232_B01MA0X5RC_428eac96._SY232_CB668934226_.jpg'
                            hairImagetextTopRight='Men'
                            hairImageBottomLeft='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_GC_372x232_B08DG422HK_50f5511e._SY232_CB668981049_.jpg'
                            hairImagetextBottomLeft='Girls'
                            hairImageBottomRight='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_BC_372x232_B08THJN1W7_113cc121._SY232_CB668981049_.jpg'
                            hairImagetextBottomRight='Boys'
                            hairLinkText='Discover best-seller'
                        />
                </div>
            </div>
        </div>
        
    )
}; 

export default Home