import { push } from 'react-router-redux/es'
import { http } from '../core/Api'

export const UPDATED_LOGIN = 'UPDATED_LOGIN'
export const UPDATED_PASSWORD = 'UPDATED_PASSWORD'

const initialState = {
  user: {
    notificacoes: [],
    role: '',
    nome: '',
    usuario: ''
  },
  usuario: '',
  senha: ''
}


const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export default function reducer(state = initialState, action){
  switch(action.type) { 
    case LOGIN: {
      console.log(action)
      return {
        ...state,
        user: {
          nome: action.user.nome,
          role: action.user.role,
          usuario: action.user.usuario,
          notificacoes: action.user.notificacoes
        }
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        usuario: '',
        senha: ''
      }
    }
    case UPDATED_LOGIN: {
      return {
        ...state,
        usuario: action.value
      }
    }
    case UPDATED_PASSWORD: {
      return {
        ...state,
        senha: action.value
      }
    }
  }
  return state
}

export const loginSuccess = () => 
  ({
    type: LOGIN_SUCCESS
  })


export const doLogin = (usuario, senha) =>
  dispatch => {
    http('/usuarios', 'GET')
      .then((data) => {


        const filtered = data.filter(user => {
          return user.senha == senha && user.usuario == usuario
        })

        console.log(filtered)
        if (filtered.length > 0) {
          dispatch(login(filtered[0]))
          dispatch(push('/usuario/avisos'))
          dispatch(loginSuccess())
        } else {

        }

      }, (error) => {
      })
  }

export const login = (user) => 
  ({
    type: LOGIN,
    user
  })

export const updatedLogin = (value) => 
  ({
    type: UPDATED_LOGIN,
    value
  })

export const updatedPassword = (value) => 
  ({
    type: UPDATED_PASSWORD,
    value
  })

