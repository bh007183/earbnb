import {gql} from "@apollo/client"

const RENTER_USER = gql`
query renterUser{
    renterUser {
      username
      status
    }
}
` 
export {RENTER_USER}