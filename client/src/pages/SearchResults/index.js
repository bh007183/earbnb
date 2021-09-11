import React from 'react'
import {useDispatch, useSelector} from "react-redux"

export default function SearchDisplay() {
    const results = useSelector(state => state.Store.SearchResult.results)
    return (
        <div>
            
        </div>
    )
}
