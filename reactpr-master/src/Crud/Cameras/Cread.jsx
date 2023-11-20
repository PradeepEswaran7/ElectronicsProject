import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams ,useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

function Cread() {
    const[data,setData] = useState([])
    const { id } =useParams()

    const navi=useNavigate();
        const nav=()=>{
            navi('/crcam');
        }
        const navig=useNavigate();
        const nav1=()=>{
            navig(`/crcam/cupdate/${id}`);
        }

    useEffect( ()=>{
        axios.get('http://localhost:3004/cameras/'+ id )
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err));
    },[] )

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 w-100'>
            <div className='w-50 border bg-white shadow px-5 pb-5 rounded'>
                <h3>Details of camera</h3>
                <div className='mb-2'>
                   Name :  <strong> {data.pprice}</strong>
                </div>
                <div className='mb-2'>
                   Company Name:  <strong>{data.cname}</strong>
                </div>
                <div className='mb-2'>
                    Specifications: <strong> {data.specifications}</strong>
                </div>
                <button className='btn btn-primary ms-3' type='button' onClick={nav1}>Edit</button>
                <button className='btn btn-primary ms-3' type='button' onClick={nav}>Back</button>
            </div>
        </div>
    )
}

export default Cread
