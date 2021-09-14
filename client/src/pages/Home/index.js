import React, { useEffect, useState } from "react";
import "./style.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import SearchForm from "../../components/searchForm"
import Select from "@material-ui/core/Select";
import {Redirect} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
export default function Home() {

 


  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return (
    <section className="container">
      <header id="homeHeader">
        <div id="headerImage"></div>
       <SearchForm/>
      </header>
    </section>
  );
}
