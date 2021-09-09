import React from 'react'
import "./style.css"
import {Link} from "react-router-dom"
import HearingIcon from '@material-ui/icons/Hearing';

export default function Navbar() {
    return (
        <nav>
            <div className="navContain">
                <div style={{display: "flex", alignItems: "center"}}>
                <HearingIcon /><h3 style={{marginLeft: "15px"}}>Earbnb</h3>
                </div>
            </div>
            
            <div className="navContain" id="rightNavContain">
                
                <Link to="/signup">Sign up</Link>
                <Link to="/login">Login</Link>



            </div>
            
        </nav>
    )
}
