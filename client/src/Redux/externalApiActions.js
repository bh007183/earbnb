import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiactions"

const slice = createSlice({
    name: "SearchResult",
    initialState:{
        results:[],
        Error: "",
        Success: "",
    },
    reducers:{
        setResults: (SearchResult, action)=> {
            SearchResult.results = action.payload
        },
        setSuccess: (SearchResult, action)=> {
            SearchResult.Success = action.payload
        },
        setError: (SearchResult, action)=> {
            SearchResult.Error= action.payload
        }
    }
})
export const {setResults, setSuccess, setError} = slice.actions
export default slice.reducer

export const searchRentals = (data) => apiCallBegan({
    url: `https://mashvisor-api.p.rapidapi.com/airbnb-property/top-reviewed?state=${data.state}&city=${data.city}&reviews_count=15&page=1`,
    method: "GET",
	headers: {
		"x-rapidapi-host": "mashvisor-api.p.rapidapi.com",
		"x-rapidapi-key": "eba8306e12msh1c414b154242eb7p11f720jsnd5aaf05cb4b3"
	},
    onSuccess: setResults.type,
    onError: setError.type
})