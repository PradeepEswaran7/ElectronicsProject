import React, { Component } from 'react'
import {Multimedia} from '../../shared/Constant/const'

export class TvComp extends Component {
    render() {
        const buy=()=>{
            window.alert("Tv is Added to cart")
        }
        return (
            <div>
                <div className='tv'>
                    <h2>Tv's</h2>
                    <div className='row'>
                    <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.tv1} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Croma 109 cm (43 inch) Full HD LED Smart TV with Bezel Less Display (2023 model)</p>
                                <span style={{fontWeight:'bold'}}>₹15,999</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.tv2} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>LG LM56 81.28 cm (32 inch) HD Ready LED Smart WebOS TV with Down Firing Speaker</p>
                                <span style={{fontWeight:'bold'}}>₹13,490</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.tv3} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Croma 60 cm (24 inch) HD Ready LED TV with 16W Speaker</p>
                                <span style={{fontWeight:'bold'}}>₹5,790</span><br/><br/>
                                <button type='button' onClick={buy}className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.tv4} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Croma 80 cm (32 inch) HD Ready LED Smart TV with Bezel Less Display (2023 model)</p>
                                <span style={{fontWeight:'bold'}}>₹8,499</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.tv5} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Xiaomi A Series 80 cm (32 inch) HD LED Smart Google TV with 20W Speaker</p>
                                <span style={{fontWeight:'bold'}}>₹12,990</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.tv6} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>SAMSUNG Series 4 80 cm (32 inch) HD Ready LED Smart Tizen TV with Hyper Real Picture Engine</p>
                                <span style={{fontWeight:'bold'}}>₹13,990</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        
                    </div><br/>
                    <div className='row'>
                    <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.tv7} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>acer Advanced I Series 127 cm (50 inch) 4K Ultra HD LED Google TV with Dolby Vision (2023 model)</p>
                                <span style={{fontWeight:'bold'}}>₹27,999</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.tv8} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Croma 127 cm (50 inch) 4K Ultra HD LED Smart WebOS TV (2022 model)</p>
                                <span style={{fontWeight:'bold'}}>₹26,999</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.tv9} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Croma 80 cm (32 inch) HD Ready LED TV with Bezel Less Display (2023 model)</p>
                                <span style={{fontWeight:'bold'}}>₹7,590</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.tv10} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>acer Advanced I Series 109 cm (43 inch) 4K Ultra HD LED Google TV with Dolby Vision and Dolby Audio (2023 model)</p>
                                <span style={{fontWeight:'bold'}}>₹22,999</span><br/><br/>
                                <button type='button' onClick={buy}className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default TvComp
