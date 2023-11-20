import React, { Component } from 'react'
import { Multimedia } from '../../shared/Constant/const'

class CameraComp extends Component {
    render() {
        const buy=()=>{
            window.alert("Camera is Added to cart")
        }
        return (
            <div>
                <div className='camera'>
                    <h2>Camera's</h2>
                    
                    <div className='row'>
                    <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.cm1} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Canon EOS R10 24.2MP Mirrorless Camera (18-150 mm Lens, 22.3 x 14.9 mm Sensor, Vari-Angle Touch Screen LCD)</p>
                                <span style={{fontWeight:'bold'}}>₹94,999</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.cm2} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>GoPro Hero10 5.3K and 23MP 60 FPS Waterproof Action Camera with Touch Screen (Black)</p>
                                <span style={{fontWeight:'bold'}}>₹27,490</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.cm3} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Nikon Z 50 20.9MP Mirrorless Camera (16-50 mm and 55-210 mm Lens, 23.5 x 15.7 mm Sensor, Auto ISO Sensitivity Control)</p>
                                <span style={{fontWeight:'bold'}}>₹87,999</span><br/><br/>
                                <button type='button' onClick={buy}className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.cm4} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>GoPro Hero11 5.3K and 27MP 60 FPS Waterproof Action Camera with Front + Rear LCD Screens (Black)</p>
                                <span style={{fontWeight:'bold'}}>₹34,990</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.cm5} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Insta360 One R 4K Edition 12MP Action Camera (1x Optical Zoom, Voice Control, IN.00000008.01, Black)</p>
                                <span style={{fontWeight:'bold'}}>₹18,894</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.cm6} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Canon EOS M50 Mark II 24.1MP Mirrorless Camera (15-45 mm Lens, 22.3 x 14.9 mm Sensor, 5 Axis Stabilisation)</p>
                                <span style={{fontWeight:'bold'}}>₹58,990</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                    </div><br/>
                    <div className='row'>
                    <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.cm7} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Canon EOS R50 24.2MP Mirrorless Camera (18-45 mm Lens, 5-Axis Electronic Image Stabilization)</p>
                                <span style={{fontWeight:'bold'}}>₹70,999</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.cm8} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Canon EOS 1500D 24.1MP DSLR Camera (18-55 mm Lens, 22.3 x 14.9 mm Sensor, Optical Image Stabilization)</p>
                                <span style={{fontWeight:'bold'}}>₹41,999</span><br/><br/>
                                <button type='button' onClick={buy}className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.cm9} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>FUJIFILM Instax Mini 12 Instant Camera (Mint Green)</p>
                                <span style={{fontWeight:'bold'}}>₹7,499</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-2 col-md-6 '>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.cm10} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Nikon Z 50 20.9MP Mirrorless Camera (16-50 mm Lens, 23.5 x 15.7 mm Sensor, Tilting TFT Touch-Sensitive LCD)</p>
                                <span style={{fontWeight:'bold'}}>₹69,999</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                    </div>
                        
                        
               </div>
            </div>
        )
    }
}

export default CameraComp
