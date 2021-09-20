import React, {useEffect} from 'react'
import {useApolloClient} from "@apollo/client"
import "./style.css"

export default function ViewHouse() {
    const client = useApolloClient();

    useEffect(() => {
        
    }, [])
    const info = JSON.parse(localStorage.getItem("data"))
    // console.log(client.cache.data.data.ROOT_QUERY.results.array[window.location.pathname[window.location.pathname.length -1]])
   let house = info.data.content.list[window.location.pathname[window.location.pathname.length -1]]

  
    return (
        <div id="houseContain">
            <h1>{house.name}</h1>
            <div>
                <img src={house.picture_url}></img>
            </div>
    <p>{house.description}</p>
    <h3>Amenities</h3>
   
    <ul style={{display: "flex", flexWrap: "wrap", listStyleType: "none"}}>{house.amenities.map(item => <li style={{margin: "10px"}}>{item}</li>)}</ul>  
    <h3>House Rules</h3>
    <p>{house.house_rules}</p>
    </div>
    )
}
