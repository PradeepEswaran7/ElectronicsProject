import React from 'react'
import { Link,Routes,Route, Outlet, useNavigate} from 'react-router-dom'



const AdminComp = () => {
    return (
        <div>
            <Outlet></Outlet>
           
        </div>
        
    )
}

export default AdminComp
