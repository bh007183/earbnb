import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiactions"

const slice = createSlice({
    name: "SearchResult",
    initialState:{
        results:[],
        location: {
            city: "",
            state: ""
        },
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
        },
        setLocation: (SearchResult, action) => {
            if(action.payload.city){
                SearchResult.location.city = action.payload.city
            }
            if(action.payload.state){
                SearchResult.location.state = action.payload.state
            }

        }
    }
})
export const {setResults, setSuccess, setError, setLocation} = slice.actions
export default slice.reducer

export const searchRentals = (data) => apiCallBegan({
    url: `https://mashvisor-api.p.rapidapi.com/airbnb-property/top-reviewed?state=${data.state}&city=${data.city}&reviews_count=15&page=1`,
    method: "GET",
	headers: {
		"x-rapidapi-host": "",
		"x-rapidapi-key": ""
	},
    onSuccess: setResults.type,
    onError: setError.type
})