import {gql} from "@apollo/client"

const LISTER_LOGIN = gql`
mutation listerLogin($email: String!, $password: String!) {
  listerLogin(email: $email, password: $password){
    token
    user{
      username
      status
      id
    }
  }
  
}`
const RENTER_LOGIN = gql`
mutation renterLogin($email: String!, $password: String!) {
  renterLogin(email: $email, password: $password){
    token
    user{
      username
      status
      id
    }
  }
  
}`
const LISTER_CREATE = gql`
mutation listerCreate($username: String!, $email: String! $password: String!) {
  listerCreate(username: $username, email: $email, password: $password){
    token
    user{
      username
      status
      id
    }
  }
}`
const RENTER_CREATE = gql`
mutation renterCreate($username: String!, $email: String! $password: String!) {
  renterCreate(username: $username, email: $email, password: $password){
    token
    user{
      username
      status
      id
    }
  }
}`
const LISTER_CREATE_HOUSE = gql`
mutation listerCreateHouse($house: HouseInput!) {
  listerCreateHouse(house: $house){
    title
  }
}`
export {LISTER_LOGIN ,RENTER_LOGIN ,LISTER_CREATE,RENTER_CREATE, LISTER_CREATE_HOUSE }
