import React, { Component } from 'react'
import {Multimedia} from '../shared/Constant/const'

export class AboutComp extends Component {
    render() {
        return (
            <div>
                
                <div className='container-fluid ' style={{textAlign:'Left'}}>
                    <span></span>
                <img src={Multimedia.clogo} className='cl1' /> <span style={{fontSize:'25px',fontWeight:'bold'}}>About Grace Electronics</span><br/><br/>

                <p style={{textAlign:'justify',marginLeft:'50px'}}>Welcome to Grace Electronics, your trusted destination for cutting-edge electronic appliances. At Grace Electronics, we pride ourselves on providing top-quality products, unmatched service, and a commitment to enhancing your digital lifestyle.</p>
                <h3 style={{textAlign:'justify',marginLeft:'50px'}}>Our Story</h3>
                <p style={{textAlign:'justify',marginLeft:'50px'}}>Founded in [Year of Establishment], Grace Electronics has been at the forefront of the electronics industry, catering to the evolving needs of tech enthusiasts and everyday consumers alike. Our journey began with a vision to create a one-stop destination for the latest and most innovative electronic appliances.</p>

                <h3 style={{textAlign:'justify',marginLeft:'50px'}}>Our Mission</h3>
                <p style={{textAlign:'justify',marginLeft:'50px'}}>At Grace Electronics, our mission is to empower individuals with the latest technological advancements, making their lives more connected, efficient, and enjoyable. We strive to deliver excellence in every product, ensuring our customers experience the pinnacle of performance and innovation.</p>
                
                </div>
                
            </div>
        )
    }
}

export default AboutComp
