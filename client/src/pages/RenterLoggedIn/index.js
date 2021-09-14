import React, {useEffect, useState} from 'react'
import {useQuery} from "@apollo/client"
import {RENTER_USER} from "../../gql/querys"
import SearchForm from "../../components/searchForm"
import "./style.css"

export default function RenterLoggedIn() {
    

    const {data, error, loading} = useQuery(RENTER_USER)
    if(data){
        console.log(data)
       
    }
    if(error){
        console.log(error)
    }
    
   
    return (
        <div id="renterContain" >
           <section className="fifty" id="search">
               <SearchForm/>

           </section>
           <section className="fifty" id="results">

           </section>
        </div>
    )
}
