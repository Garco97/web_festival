import React, { Component } from 'react'
import './PastEditions.css'
import logo from '../logo.svg';

import Carousel from  'react-elastic-carousel';
class PastEditions extends Component{
    render(){
        const breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2 },
            { width: 768, itemsToShow: 3 },
            { width: 1200, itemsToShow: 4 }
          ];
        return(
            <section id="PastEditions">
                <Carousel breakPoints={breakPoints}>
                        <img src={logo} className="App-logo" alt="logo" />

                        <img src={logo} className="App-logo" alt="logo" />

                        <img src={logo} className="App-logo" alt="logo" />

                </Carousel>
            </section>
        )
    }
}
export default PastEditions;