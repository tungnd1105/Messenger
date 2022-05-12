import {gql} from "@apollo/client";

export const queryGetProfile = gql` 
  query getProfile{
    getProfile {
      id
      firstname
      lastname
      gender
      age
      birthday
      about
      address
      pathAvatar
      account {
        username
        authorities
        accountState
        isActive
        emailList {
          email
          isActive
          isHidden
          isPrimary
        }
        phoneNumberList {
          phoneNumber
          isActive
          isHidden
          isPrimary
        }
      }
        createAt
        updateAt
    }  
  }
`