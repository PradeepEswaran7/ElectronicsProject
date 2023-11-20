import React, { Component } from 'react'
import {Multimedia} from '../../shared/Constant/const'
class LaptopComp extends Component {
    render() {

        const buy=()=>{
            window.alert("Laptop is Added to cart")
        }
        return (
            <div>
                <div className='Laptops'>
                    <h2>Laptops</h2>
                    <div className='row'>
                        
                       <div className='col-lg-2 col-md-6'>
                       <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.laptop} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>
                                ASUS E410KA-BV103WS Intel Pentium (14 inch, 8GB, 256GB, Windows 11, MS Office 2021, Intel UHD Graphics, LED-Backlit Display, Star Black, 90NB0UA5-M004J0)
                                </p>
                                <span style={{fontWeight:'bold'}}>₹29,999</span><br/><br/>
                                <button type='button'  className='btn btn-outline-secondary btn-lg' onClick={buy}>Buy</button>
                            </div>
                            

                        </div>
                       </div>
                       <div className='col-lg-2 col-md-6'>
                       <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.laptop1} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>
                                Lenovo IdeaPad 3 15IGL05 Intel Celeron (15.6 inch, 8GB, 256GB, Windows 11, MS Office 2021, Intel UHD Graphics, FHD Display, Platinum Grey, 81WQ00MQIN)
                                </p>
                                <span style={{fontWeight:'bold'}}>₹29,999</span><br/><br/>
                                <button type='button' onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div> <div className='col-lg-2 col-md-6'>
                       <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.laptop2} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>
                                acer Aspire Lite Intel Core i3 11th Gen (15.6 inch, 8GB, 512GB, Windows 11, Intel UHD, FHD Display, Steel Grey, UN.431SI.252)
                                </p>
                                <span style={{fontWeight:'bold'}}>₹29,999</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div> <div className='col-lg-2 col-md-6'>
                       <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.laptop3} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>
                                HP 14s-dr3003TU Intel Pentium Silver (14 inch, 8GB, 512GB, Windows 11 Home, MS Office 2021, Intel UHD Graphics, HD Display, Natural Silver, 832T7PA)
                                </p>
                                <span style={{fontWeight:'bold'}}>₹29,999</span><br/><br/>
                                <button type='button'onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div>
                       <div className='col-lg-2 col-md-6'>
                       <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.laptop4} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>
                                Lenovo IdeaPad 3 15ITL6 Intel Core i3 11th Gen (15.6 inch, 8GB, 256GB, Windows 11 Home, MS Office 2021, Intel UHD Graphics, FHD IPS Display, Arctic Grey, 82H803HLIN)
                                </p>
                                <span style={{fontWeight:'bold'}}>₹31,990</span><br/><br/>
                                <button type='button' onClick={buy}className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div>
                       <div className='col-lg-2 col-md-6'>
                       <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.laptop5} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>
                                HP 15s- eq2213AU AMD Ryzen 3 (15 inch, 8GB, 512GB, Windows 11, MS Office 2021, AMD Radeon Graphics, LED Display, Natural Silver, 7G6H2PA)
                                </p>
                                <span style={{fontWeight:'bold'}}>₹33,494</span><br/><br/>
                                <button type='button' onClick={buy}className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div>
                       
                    </div><br/>
                    <div className='row'>
                    <div className='col-lg-2 col-md-6'>
                       <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.laptop6} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>
                                Lenovo IdeaPad 3 15ITL05 Intel Core i3 11th Gen (15.6 inch, 8GB, 512GB, Windows 11 Home, MS Office 2021, Intel UHD, Full HD Display, Platinum Grey, 81X800N2IN)
                                </p>
                                <span style={{fontWeight:'bold'}}>₹29,999</span><br/><br/>
                                <button type='button' onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div>
                       <div className='col-lg-2 col-md-6'>
                       <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.laptop7} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>
                                ASUS Vivobook 15 Intel Core i3 11th Gen (15.6 inch, 8GB, 512GB, Windows 11, MS Office 2021, Intel UHD, FHD LED Backlit Display, Indie Black, X1500EA-EJ3381WS)
                                </p>
                                <span style={{fontWeight:'bold'}}>₹33,990</span><br/><br/>
                                <button type='button' onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div>
                       <div className='col-lg-2 col-md-6'>
                       <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.laptop8} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>
                                HP 14s-dq2649TU Intel Core i3 11th Gen (14 inch, 8GB, 512GB, Windows 11 Home, Intel UHD, Full HD Display, Natural Silver, 7G6H0PA)
                                </p>
                                <span style={{fontWeight:'bold'}}>₹34,990</span><br/><br/>
                                <button type='button' onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div>
                       <div className='col-lg-2 col-md-6'>
                       <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.laptop9} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>
                                acer Aspire 3 A315-24P AMD Ryzen 5 (15.6 inch, 8GB, 512GB, Windows 11 Home, AMD Radeon Graphics, Full HD LED-Backlit Display, Silver, NX.KDESI.004)
                                </p>
                                <span style={{fontWeight:'bold'}}>₹36,990</span><br/><br/>
                                <button type='button' onClick={buy} className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div>
                       
                    </div>

               </div>
            </div>
        )
    }
}

export default LaptopComp
