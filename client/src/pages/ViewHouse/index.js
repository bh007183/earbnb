import React, {useEffect} from 'react'
import {useApolloClient} from "@apollo/client"

export default function ViewHouse() {
    const client = useApolloClient();

    useEffect(() => {
        
    }, [])
    const info = JSON.parse(localStorage.getItem("data"))
    // console.log(client.cache.data.data.ROOT_QUERY.results.array[window.location.pathname[window.location.pathname.length -1]])
    console.log(info.data.content.list[window.location.pathname[window.location.pathname.length -1]])

  
    return (
        <div>
            HEHEHE
        </div>
    )
}
