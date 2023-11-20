import React, { Component } from 'react'
import AboutComp from './AboutComp'
import { Link } from 'react-router-dom'
import ContactComp from './ContactComp'
import ServiceComp from './ServiceComp'
import ContactUs from './ContactUs'

export class FooterComp extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <AboutComp></AboutComp>
                        </div>
                        <div className='col-sm-4'>
                               <ContactUs></ContactUs>
                        </div>
                        <div className='col-sm-4'>
                                <ServiceComp></ServiceComp>
                        </div>

                        
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterComp
