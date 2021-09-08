import {gql} from "@apollo/client"

const LISTER_LOGIN = gql`
mutation listerLogin($email: String!, $password: String!) {
  listerLogin(email: $email, password: $password){
    token
    user{
      username
    }
  }
  
}`
const RENTER_LOGIN = gql`
mutation renterLogin($email: String!, $password: String!) {
  renterLogin(email: $email, password: $password){
    token
    user{
      username
    }
  }
  
}`
const LISTER_CREATE = gql`
mutation listerCreate($username: String!, $email: String! $password: String!) {
  listerCreate(username: $username, email: $email, password: $password){
    token
    user{
      username
    }
  }
}`
const RENTER_CREATE = gql`
mutation renterCreate($username: String!, $email: String! $password: String!) {
  renterCreate(username: $username, email: $email, password: $password){
    token
    user{
      username
    }
  }
}`
const LISTER_CREATE_HOUSE = gql`
mutation listerCreateHouse($house: HouseInput!) {
  listerCreateHouse(house: $house){
    title
  }
}`
