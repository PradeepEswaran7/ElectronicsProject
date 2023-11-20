import React, { Component }from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeComp from "./HomeComp";
import MenuComp from "./MenuComp";
import LaptopComp from "./Products/LaptopComp";
import TvComp from "./Products/TvComp";
import MobileComp from "./Products/MobileComp";
import CameraComp from "./Products/CameraComp";
import NavComp from "./NavComp";
import Login from "./Login";
import AboutComp from "./AboutComp";
import FooterComp from "./FooterComp";
import RegisterComp from "./RegisterComp";
import CrudComp from "./CrudComp";
import Home from "../Crud/Laptops/Home"
import Create from "../Crud/Laptops/Create";
import Read from "../Crud/Laptops/Read";
import Date from "../Crud/Laptops/Date";
import AdminComp from "./AdminComp";
import CamerCrComp from "./CamerCrComp";
import THome from "../Crud/Tvs/THome"
import Tcreate from "../Crud/Tvs/Tcreate"
import Tupdate from "../Crud/Tvs/Tupdate"
import Tread from "../Crud/Tvs/Tread"
import CrudCam from "./CrudCam";
import CHome from "../Crud/Cameras/CHome"
import Ccreate from "../Crud/Cameras/Ccreate"
import Cread from "../Crud/Cameras/Cread"
import Cupdate from "../Crud/Cameras/Cupdate"
import CrudMob from "./CrudMob";
import Mhome from "../Crud/Mobiles/Mhome"
import Mcreate from "../Crud/Mobiles/Mcreate"
import Mread from "../Crud/Mobiles/Mread"
import Mupdate from "../Crud/Mobiles/Mupdate"
import PageNotFound from "./PageNotFound";




class RouterComp extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div style={{width:'100%'}}>
                        <div className='card border-primary' >
                            <div className='card-header border-primary' style={{backgroundColor:'rgba(198,198,198,255)'}}>
                                <NavComp></NavComp>
                            </div>
                            <div className='card-body border-primary 'style={{backgroundColor:'#E6b777'}} >
                           
                            <Routes>
                                
                                <Route path="" element={<HomeComp></HomeComp>}></Route>
                                <Route path="Menu" element={<MenuComp></MenuComp>}>
                                    <Route path="Laptop" element={<LaptopComp></LaptopComp>}></Route>
                                    <Route path="Tv" element={<TvComp></TvComp>}></Route>
                                    <Route path="Mobile" element={<MobileComp></MobileComp>}></Route>
                                    <Route path="Camera" element={<CameraComp></CameraComp>}></Route>
                                </Route>
                                <Route path="Home" element={<HomeComp></HomeComp>}></Route>
                                <Route path="RgisterComp" element={<RegisterComp></RegisterComp>}></Route>
                                <Route path="Signin" element={<Login></Login>}></Route>
                                <Route path="Footer" element={<FooterComp></FooterComp>}>
                                    <Route path="About" element={<AboutComp></AboutComp>}></Route>
                                </Route>
                                <Route path="crud" element={<CrudComp></CrudComp>}></Route>


                                
                                
                                    
                            <Route path="admin" element={<AdminComp></AdminComp>}> 
                                <Route path='' element={<Home></Home>} ></Route>
                                <Route path='create' element={<Create></Create>}></Route>
                                <Route path='read/:id' element={<Read></Read>}></Route>
                                <Route path='update/:id' element={<Date></Date>}></Route>
                            </Route>

                            <Route path="ctv" element={<CamerCrComp></CamerCrComp>}>
                                <Route path='' element={<THome></THome>}></Route>
                                <Route path="tcreate" element={<Tcreate></Tcreate>}></Route>
                                <Route path="tread/:id" element={<Tread></Tread>}></Route>
                                <Route path="tupdate/:id" element={<Tupdate></Tupdate>}></Route>
                            </Route>

                            <Route path="crcam" element={<CrudCam></CrudCam>}>
                                <Route path="" element={<CHome></CHome>}></Route>
                                <Route path="ccreate" element={<Ccreate></Ccreate>}></Route>
                                <Route path="cread/:id" element={<Cread></Cread>}></Route>
                                <Route path="cupdate/:id" element={<Cupdate></Cupdate>}></Route>

                            </Route>

                            <Route path="cmob" element={<CrudMob></CrudMob>}>
                                <Route path="" element={<Mhome></Mhome>}></Route>
                                <Route path='mcreate' element={<Mcreate></Mcreate>}></Route>
                                <Route path='mread/:id' element={<Mread></Mread>}></Route>
                                <Route path="mupdate/:id" element={<Mupdate></Mupdate>}></Route>
                            </Route>
                          
                             <Route path="*" element={<PageNotFound></PageNotFound>}></Route>   
                                
                            </Routes>
                            </div>
                            <div className='card-footer border-primary' style={{backgroundColor:'rgba(198,198,198,255)'}}>
                                {/* <AboutComp></AboutComp> */}
                                <FooterComp></FooterComp>
                                {/* <Home></Home> */}
                                

                            </div>
                            
                        </div>
                    </div>
                   
                </BrowserRouter>
            </div>
        )
    }
}

export default RouterComp
