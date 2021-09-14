import React from 'react'
import "./style.css"
import {Link} from "react-router-dom"
import HearingIcon from '@material-ui/icons/Hearing';
import {RENTER_USER} from "../../gql/querys"
import {useQuery} from "@apollo/client"

export default function Navbar() {
    const {data, error, loading} = useQuery(RENTER_USER)
    const handleLogout = () => {
        localStorage.clear()
        window.location.href ="/"
    }
 
        return (
            <nav>
                <div className="navContain">
                    <div style={{display: "flex", alignItems: "center"}}>
                    <HearingIcon /><h3 style={{marginLeft: "15px"}}>Earbnb</h3>
                    </div>
                </div>
                <div className="navContain">
                    
        {data ? <h2 style={{textAlign: "center"}}>{data.renterUser.username}</h2> : <></>}
                    
                </div>
                
                <div className="navContain" id="rightNavContain">
                    {data ? 
                    <Link onClick={handleLogout} to="/login">Log Out</Link> : <><Link to="/signup">Sign up</Link>
                    <Link to="/login">Login</Link></>}
                    
    
    
    
                </div>
                
            </nav>
        )
    

    

}
