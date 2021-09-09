import React, {useState} from "react";
import "./style.css";
import Button from "@material-ui/core/Button"
import {useMutation} from "@apollo/client"
import {LISTER_CREATE} from "../../gql/mutations"

export default function Host() {
    const[createLister, {data, loading, error}] = useMutation(LISTER_CREATE)
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        verify: ""
    })

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setState({
            ...state, [name]:value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if(state.username && state.email && state.password && state.verify && state.verify === state.password){
            createLister({variables:state})
        }else{
            alert("Broken!!!! Panick!!!! Its Broken!!!!")
        }
    }
  return (
    <form onSubmit={handleSubmit} id="vacSignUpForm">
      <h4>Alright! You want an account for hosting!</h4>
      <input onChange={handleChange} name="username" value={state.username} placeholder="Username"></input>
      <input onChange={handleChange} name="email" value={state.email}placeholder="Email"></input>
      <input onChange={handleChange} name="password" value={state.password}placeholder="Password"></input>
      <input onChange={handleChange} name="verify" value={state.verify}placeholder="Verify Password"></input>
      <Button type="submit" style={{width: "80%", marginTop: "30px"}} variant="contained" color="secondary">
        Submit
      </Button>
    </form>
  );
}