import React, { Component } from 'react'
import { Multimedia } from '../../shared/Constant/const'

class MobileComp extends Component {
    render() {
        const buy=()=>{
            window.alert("Mobile is Added to cart")
        }
        return (
            <div>
                <div className='Mobile'>
                    <h2>Mobile's</h2>
                    <div className='row'>
                    <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.mb1} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Apple iPhone 13 (128GB, Starlight White)</p>
                                <span style={{fontWeight:'bold'}}>₹55,990</span><br/><br/>
                                <button type='button' onClick={buy}className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.mb2} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>OnePlus 11R 5G (16GB RAM, 256GB, Sonic Black)</p>
                                <span style={{fontWeight:'bold'}}>₹44,999</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.mb3} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Apple iPhone 14 (128GB, Midnight)</p>
                                <span style={{fontWeight:'bold'}}>₹65,490</span><br/><br/>
                                <button type='button' onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.mb4} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Apple iPhone 14 (128GB, Blue)</p>
                                <span style={{fontWeight:'bold'}}>₹65,490</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.mb5} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Apple iPhone 13 (128GB, Midnight)</p>
                                <span style={{fontWeight:'bold'}}>₹55,990</span><br/><br/>
                                <button type='button' onClick={buy}className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.mb6} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Apple iPhone 14 (128GB, Purple)</p>
                                <span style={{fontWeight:'bold'}}>₹65,490</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                    </div><br/>
                    <div className='row'>
                    <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.mb7} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Apple iPhone 13 (128GB, Starlight White)</p>
                                <span style={{fontWeight:'bold'}}>₹55,990</span><br/><br/>
                                <button type='button' onClick={buy}className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.mb8} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Apple iPhone 14 (128GB, Starlight)</p>
                                <span style={{fontWeight:'bold'}}>₹65,490</span><br/><br/>
                                <button type='button' onClick={buy}className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.mb9} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Apple iPhone 13 (128GB, Pink)</p>
                                <span style={{fontWeight:'bold'}}>₹55,990</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.mb10} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Apple iPhone 14 (256GB, Starlight)</p>
                                <span style={{fontWeight:'bold'}}>₹75,990</span><br/><br/>
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

export default MobileComp
