import React from 'react'
import {useDispatch, useSelector} from "react-redux"

export default function SearchDisplay() {
    const results = useSelector(state => state.Store.Results.results)
    const location = useSelector(state => state.Store.Results.location)
    console.log(location)
    return (
        <div>
            heheheh
        </div>
    )
}
