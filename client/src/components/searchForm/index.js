import React,{useState, useEffect} from 'react'
import Select from "@material-ui/core/Select";
import {Redirect} from "react-router-dom"
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import "./style.css"
import axios from "axios"
import { useApolloClient } from '@apollo/client';
import { CACHED_RESULTS } from '../../gql/querys';
import {useQuery} from "@apollo/client"

export default function SearchForm() {
    const{data, loading, error} = useQuery(CACHED_RESULTS)
    const client = useApolloClient();
    const [location, setLocation] = useState({
        city: "",
        state: ""
      })
      const [redirect, setRedirect] = useState(false)
      
    if(data){
        console.log(data)
    }
      const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        setLocation({
          ...location, [name]: value
        });
      };
      
      useEffect(() => {
        if(data){
            console.log(data)
        }
      }, [])
      const handleSearch = (event) => {
        event.preventDefault()
        axios.get(`https://mashvisor-api.p.rapidapi.com/airbnb-property/top-reviewed?state=${location.state}&city=${location.city}&reviews_count=15&page=1`,{
            headers: {
                "x-rapidapi-host": process.env.REACT_APP_HOST,
                "x-rapidapi-key": process.env.REACT_APP_APIKEY
            }
        }).then(res => {
            localStorage.setItem("data", JSON.stringify(res))
            client.writeQuery({
                query: CACHED_RESULTS,
                data: { // Contains the data to write
                  results: {
                    __typename: 'Results',
                    array: res.data.content.list,
                  },
                },
                
              });
        }).catch(err => {
            console.log(err)
        })
      //  setRedirect(true)
      }
    return (
        <form className="searchForm" onSubmit={handleSearch}>
             {redirect === true ? <Redirect push to="/search"/> : <></>}
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
    )
}
