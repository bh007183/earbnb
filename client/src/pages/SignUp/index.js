import React from 'react'
import "./style.css"
import {Link, Route} from "react-router-dom"
import Vacationer from "./vacation"

export default function SignUp() {
    return (
        <div className="container">
            <div id="signUpOptions">
                <h3>We are excited to begin this journey with you! First, lets select what type of account you would like!</h3>
                <div id="signUpLinks">
                    <Link to="/signup/host">Host Account</Link>
                    <Link to="/signup/vacationer">Vacation Account</Link>
                </div>
                <Route exact path="/signup/host">

                </Route>
                <Route exact path="/signup/vacationer">
                    <Vacationer/>

                </Route>


            </div>
            
        </div>
    )
}
