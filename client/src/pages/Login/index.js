import React, { useEffect, useState } from "react";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import "./style.css";
import { LISTER_LOGIN, RENTER_LOGIN } from "../../gql/mutations";
import { useMutation } from "@apollo/client";

export default function Login() {
  const [renterLogin, renterInfo] = useMutation(RENTER_LOGIN);
  const [listerLogin, listerInfo] = useMutation(LISTER_LOGIN);

  if (renterInfo.data) {
    console.log(renterInfo.data);
  }
  if (renterInfo.error) {
    console.log(renterInfo.error);
  }
  if (renterInfo.loading) {
    console.log(renterInfo.loading);
  }

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [checked, setChecked] = React.useState(false);

  const handleSwitch = () => {
    setChecked((prev) => !prev);
  };
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(checked);
    if (checked === false) {
      listerLogin({
        variables: { email: state.email, password: state.password },
      });
    }
    if (checked === true) {
      renterLogin({
        variables: { email: state.email, password: state.password },
      });
    }
  };
  useEffect(() => {
    if(renterInfo.data){
      let data = renterInfo.data
      console.log(data)
        // window.location.href = `/${data.renterLogin.user.status}/${data.renterLogin.user.id}`
        console.log(localStorage.setItem("token", data.renterLogin.token))
    }
    if(listerInfo.data){
      let data = listerInfo.data
      console.log(data)
        // window.location.href = `/${data.listerLogin.user.status}/${data.listerLogin.user.id}`
        console.log(localStorage.setItem("token", data.listerLogin.token))
    }
}, [renterInfo.data || listerInfo.data])
  return (
    <div id="loginContain">
      <div id="loginForm">
        Host
        <label className="switch">
          <input type="checkbox" checked={checked} onChange={handleSwitch} />
          <span className="slider round"></span>
        </label>
        Renter
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="email"
            placeholder="Email"
          ></input>
          <input
            onChange={handleChange}
            name="password"
            placeholder="Password"
          ></input>
          <Button
            type="submit"
            style={{ width: "80%", marginTop: "30px" }}
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
