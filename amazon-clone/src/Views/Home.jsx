import React from 'react';
import Movie from  '../Components/Movie'
import OverStock from '../Components/OverStock';
import '../Style/Home.css';
import Grid from '@material-ui/core/Grid';

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
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={3} justifyContent="center">
                            <Movie
                                title=' "The Pursuit of Love" '
                                image='https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/TV/TPOL_S1_DashboardCard_379x304_PRE_Final_noLocale_DOT0084._SY304_CB666234560_.jpg'
                                aTag='Watch trailer on Prime Video'
                            />
                        </Grid>
                        <Grid item xs={3}>
                            < OverStock 
                                title='Discounted overstock items'
                                watchImage='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_W_186x116_Evergreen_Jul_2021._SY116_CB665657905_.jpg'
                                watchImageText='Watch'
                                shoesImage='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_SH_186x116_Evergreen_Jul_2021_v2._SY116_CB664188218_.jpg'
                                shoesImageText='Shoes'
                                pcImage='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_PC_186x116_Evergreen_Jul_2021._SY116_CB665657905_.jpg'
                                pcImageText='PC'
                                lawnImage='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_PLG_186x116_Evergreen_Jul_2021._SY116_CB665657905_.jpg'
                                lawnImageText='Lawn & Garden'
                                aLink='See more in Outlet'
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
        
    )
}; 

export default Home