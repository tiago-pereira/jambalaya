import { push } from 'react-router-redux'

export const UPDATED_LOGIN = 'UPDATED_LOGIN'
export const UPDATED_PASWORD = 'UPDATED_PASSWORD'

const initialState = {
  login: "",
  password: ""
}

export default function reducer(state = initialState, action){
  switch(action.type) { 
  }
  return state
}

export const updatedLogin = (value) => 
  ({
    type: UPDATED_LOGIN,
    value
  })

export const updatedPassword = (value) => 
  ({
    type: UPDATED_LOGIN,
    value
  })

