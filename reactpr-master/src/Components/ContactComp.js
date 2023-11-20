import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-solid-svg-icons';

export class ContactComp extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <span style={{fontSize:'25px',fontWeight:'bold'}}>Contact Us</span><br/><br/>
                    <FontAwesomeIcon icon={faMobileAlt} style={{fontSize:'25px',marginLeft:'20px'}}/>&nbsp; &nbsp;
                    <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'25px'}}/>


                    <div className='card' style={{marginTop:'10px',borderRadius:'10px', width:'430px'}}>
                        <div className=' card-body '>
                        <form>
                        
                            <input type='email' name='email' placeholder='Enter Your Email' style={{marginTop:'10px',fontSize:'25px',width:'400px',borderRadius:'10px'}}></input><br/><br/>
                            
                            <textarea placeholder='Comments'  cols="40" rows="2"></textarea><br/>
                            <button type='submit' className='btn btn-outline-info' >Submit</button>

                        </form>
                        </div>

                        <p style={{marginLeft:'15px'}}>123 Tech Street,<br/> Electronics City,<br/> Digital Land, 54321</p>
                        
                    </div>
                </div>
                
               
               
               
            </div>
        )
    }
}

export default ContactComp
