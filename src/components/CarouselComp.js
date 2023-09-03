// import { Card, CardMedia } from '@mui/material';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const CarouselComp = () => {
    return (
        <div className=''>
            {/* <Container> */}
            <div>
                <Carousel infiniteLoop useKeyboardArrows autoPlay
                    showStatus={false}
                    showThumbs={false}
                // labels={}
                >
                   
                </Carousel>
            </div>
            {/* </Container> */}
        </div>
    )
}

export default CarouselComp