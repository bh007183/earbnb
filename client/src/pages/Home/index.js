import React, { useEffect, useState } from "react";
import "./style.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {setLocation} from "../../Redux/externalApiActions"
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import {Redirect} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
export default function Home() {

  const [redirect, setRedirect] = useState(false)
  const dispatch = useDispatch()
 
  const location = useSelector(state => state.Store.Results.location)

  const handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    dispatch(setLocation({
      ...location, [name]: value
    }));
  };

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }, []);
  const handleSearch = (event) => {
    event.preventDefault()
   setRedirect(true)
  }
  return (
    <section className="container">
      {redirect === true ? <Redirect push to="/search"/> : <></>}
      <header id="homeHeader">
        <div id="headerImage"></div>
        <form id="searchForm" onSubmit={handleSearch}>
          <h1>Find places to stay on Earbnb</h1>
          <p>Discover entire homes and private rooms perfect for any trip.</p>
          <input onChange={handleChange} style={{ width: "98%" }} value={location.city} name="city" placeholder="City"></input>

          <FormControl
            style={{ width: "100%", marginTop: "15px" }}
            variant="outlined"
          >
            <InputLabel id="demo-simple-select-outlined-label">
              State
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={location.state}
              onChange={handleChange}
              name="state"
              label="State"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem  value="AL">Alabama</MenuItem >
              <MenuItem value="AK">Alaska</MenuItem>
              <MenuItem value="AZ">Arizona</MenuItem>
              <MenuItem value="AR">Arkansas</MenuItem>
              <MenuItem value="CA">California</MenuItem>
              <MenuItem value="CO">Colorado</MenuItem>
              <MenuItem value="CT">Connecticut</MenuItem>
              <MenuItem value="DE">Delaware</MenuItem>
              <MenuItem value="DC">District Of Columbia</MenuItem>
              <MenuItem value="FL">Florida</MenuItem>
              <MenuItem value="GA">Georgia</MenuItem>
              <MenuItem value="HI">Hawaii</MenuItem>
              <MenuItem value="ID">Idaho</MenuItem>
              <MenuItem value="IL">Illinois</MenuItem>
              <MenuItem value="IN">Indiana</MenuItem>
              <MenuItem value="IA">Iowa</MenuItem>
              <MenuItem value="KS">Kansas</MenuItem>
              <MenuItem value="KY">Kentucky</MenuItem>
              <MenuItem value="LA">Louisiana</MenuItem>
              <MenuItem value="ME">Maine</MenuItem>
              <MenuItem value="MD">Maryland</MenuItem>
              <MenuItem value="MA">Massachusetts</MenuItem>
              <MenuItem value="MI">Michigan</MenuItem>
              <MenuItem value="MN">Minnesota</MenuItem>
              <MenuItem value="MS">Mississippi</MenuItem>
              <MenuItem value="MO">Missouri</MenuItem>
              <MenuItem value="MT">Montana</MenuItem>
              <MenuItem value="NE">Nebraska</MenuItem>
              <MenuItem value="NV">Nevada</MenuItem>
              <MenuItem value="NH">New Hampshire</MenuItem>
              <MenuItem value="NJ">New Jersey</MenuItem>
              <MenuItem value="NM">New Mexico</MenuItem>
              <MenuItem value="NY">New York</MenuItem>
              <MenuItem value="NC">North Carolina</MenuItem>
              <MenuItem value="ND">North Dakota</MenuItem>
              <MenuItem value="OH">Ohio</MenuItem>
              <MenuItem value="OK">Oklahoma</MenuItem>
              <MenuItem value="OR">Oregon</MenuItem>
              <MenuItem value="PA">Pennsylvania</MenuItem>
              <MenuItem value="RI">Rhode Island</MenuItem>
              <MenuItem value="SC">South Carolina</MenuItem>
              <MenuItem value="SD">South Dakota</MenuItem>
              <MenuItem value="TN">Tennessee</MenuItem>
              <MenuItem value="TX">Texas</MenuItem>
              <MenuItem value="UT">Utah</MenuItem>
              <MenuItem value="VT">Vermont</MenuItem>
              <MenuItem value="VA">Virginia</MenuItem>
              <MenuItem value="WA">Washington</MenuItem>
              <MenuItem value="WV">West Virginia</MenuItem>
              <MenuItem value="WI">Wisconsin</MenuItem>
              <MenuItem value="WY">Wyoming</MenuItem>
            </Select>
          </FormControl>
          <Button
            style={{ width: "100%", marginTop: "15px" }}
            variant="contained"
            color="secondary"
            type="submit"
            

          >
            Secondary
          </Button>
        </form>
      </header>
    </section>
  );
}
