import {gql} from "@apollo/client"

const RENTER_USER = gql`
query renterUser{
    renterUser {
      username
      status
    }
}
` 
const CACHED_RESULTS = gql`
query WriteSearchResponse{
  results{
    array
  }
}`
export {RENTER_USER, CACHED_RESULTS}