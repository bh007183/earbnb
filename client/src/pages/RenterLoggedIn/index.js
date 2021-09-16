import React, {useEffect, useState} from 'react'
import {useQuery} from "@apollo/client"
import {RENTER_USER} from "../../gql/querys"
import SearchForm from "../../components/searchForm"
import * as fs from 'fs';
import "./style.css"
import ResultCard from "../../components/ResultCard"
import { CACHED_RESULTS } from '../../gql/querys';
import {useLazyQuery} from "@apollo/client"
import {useApolloClient} from "@apollo/client"
export default function RenterLoggedIn() {


    const client = useApolloClient();

    const {data, error, loading} = useQuery(RENTER_USER)
    
    if(error){
        console.log(error)
    }
    const info = JSON.parse(localStorage.getItem("data"))



 
   
    return (
        <div id="renterContain" >
           <section className="fifty" id="search">
               <SearchForm/>

           </section>
           <section className="fifty" id="results">
               <br></br>
               <br></br>
               
               {client.cache.data.data.ROOT_QUERY.results.array.map((item,index) => <ResultCard item={item} index={index} />)}
               

           </section>
        </div>
    )
}
