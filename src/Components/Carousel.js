import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import jedi from '../shared/images/PostJedi.png';
import kenobi from '../shared/images/PostKenobi.png';
import andor from '../shared/images/PostAndor.png';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel 
                autoPlay={true} 
                interval="5000" 
                transitionTime="1500"
                infiniteLoop={true} 
                showStatus={false} 
                showThumbs={false} 
                width="70%"
            >
                <div>
                    <img src={jedi} />
                </div>
                <div>
                    <img src={kenobi} />
                </div>
                <div>
                    <img src={andor} />
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;