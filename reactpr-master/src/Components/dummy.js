import React, { Component } from 'react'
import Carousel, { CarouselItem } from 'react-bootstrap'
import {Multimedia} from '../shared/Constant/const'

export class dummy extends Component {
    render() {
        return (
            <div>
                <Carousel class="carousel">
                    <Carousel.Item interval={1000}>
                        <img src={Multimedia.courel1}/>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default dummy
