import React from "react";
import "./style.css";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
export default function Home() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <section className="container">
      <header id="homeHeader">
        <div id="headerImage"></div>
        <form id="searchForm">
          <h1>Find places to stay on Earbnb</h1>
          <p>Discover entire homes and private rooms perfect for any trip.</p>
          <input style={{width: "98%"}} placeholder="City, State"></input>
          
            <FormControl style={{width: "100%", marginTop: "15px"}} variant="outlined" >
              <InputLabel id="demo-simple-select-outlined-label">
                Number of people
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                 
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={13}>13</MenuItem>
                <MenuItem value={14}>14</MenuItem>
                <MenuItem value={15}>15</MenuItem>
              </Select>
            </FormControl>
            <Button style={{width: "100%", marginTop: "15px"}} variant="contained" color="secondary">
  Secondary
</Button>
           
          
        </form>
      </header>
    </section>
  );
}
