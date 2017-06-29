import { http } from '../core/Api'

const initialState = {
  isRequesting: false,
  moradores: [],
  avisos: [],
  reservas: [],
  usuarios: [],
  newAviso: {
    titulo: '',
    descricao: ''
  },
  newMorador: {
    nome: '',
    cpf: '',
    apartamento: '',
    telefone: '',
    email: ''
  },
  newReserva: {
    morador: '',
    apartamento: '',
    telefone: '',
    dia: '',
    inicio: '',
    fim: ''
  },
  newUsuario: {
    usuario: '',
    senha: '',
    role: ''
  },
  searchMorador: {
    nome: ''
  }
}

const REQUEST_USUARIOS = 'REQUEST_USUARIOS'
const RECEIVE_USUARIOS_SUCCESS = 'RECEIVE_USUARIOS_SUCCESS'
const RECEIVE_USUARIOS_FAILURE = 'RECEIVE_USUARIOS_FAILURE'

const REQUEST_SAVE_USUARIO = 'SAVE_USUARIO'
const RECEIVE_SAVE_USUARIO_SUCCESS = 'SAVE_USUARIO_SUCCESS'
const RECEIVE_SAVE_USUARIO_FAILURE = 'SAVE_USUARIO_FAILURE'

const REQUEST_RESERVAS = 'REQUEST_RESERVAS'
const RECEIVE_RESERVAS_SUCCESS = 'RECEIVE_RESERVAS_SUCCESS'
const RECEIVE_RESERVAS_FAILURE = 'RECEIVE_RESERVAS_FAILURE'

const REQUEST_SAVE_RESERVA = 'SAVE_RESERVA'
const RECEIVE_SAVE_RESERVA_SUCCESS = 'SAVE_RESERVA_SUCCESS'
const RECEIVE_SAVE_RESERVA_FAILURE = 'SAVE_RESERVA_FAILURE'

const REQUEST_MORADORES = 'REQUEST_MORADORES'
const RECEIVE_MORADORES_SUCCESS = 'RECEIVE_MORADORES_SUCCESS'
const RECEIVE_MORADORES_FAILURE = 'RECEIVE_MORADORES_FAILURE'

const REQUEST_AVISOS = 'REQUEST_AVISOS'
const RECEIVE_AVISOS_SUCCESS = 'RECEIVE_AVISOS_SUCCESS'
const RECEIVE_AVISOS_FAILURE = 'RECEIVE_AVISOS_FAILURE'

const REQUEST_SAVE_AVISO = 'SAVE_AVISO'
const RECEIVE_SAVE_AVISO_SUCCESS = 'SAVE_AVISO_SUCCESS'
const RECEIVE_SAVE_AVISO_FAILURE = 'SAVE_AVISO_FAILURE'

const REQUEST_SAVE_MORADOR = 'SAVE_MORADOR'
const RECEIVE_SAVE_MORADOR_SUCCESS = 'SAVE_MORADOR_SUCCESS'
const RECEIVE_SAVE_MORADOR_FAILURE = 'SAVE_MORADOR_FAILURE'

const UPDATE_FIELD = 'UPDATE_FIELD'

export default function reducer(state = initialState, action){
  switch(action.type) { 
    case RECEIVE_SAVE_USUARIO_SUCCESS: {
      return {
        ...state,
        newUsuario: {
          role: '',
          usuario: '',
          senha: ''
        }
      }
    }
    case RECEIVE_USUARIOS_SUCCESS: {
      return {
        ...state,
        usuarios: action.usuarios
      }
    }
    case RECEIVE_SAVE_RESERVA_SUCCESS: {
      return {
        ...state,
        newReserva: {
          morador: '',
          apartamento: '',
          salao: '',
          telefone: '',
          dia: '',
          inicio: '',
          fim: ''
        }
      }
    }
    case RECEIVE_SAVE_AVISO_SUCCESS: {
      return {
        ...state,
        newAviso: {
          titulo: '',
          descricao: ''
        }
      }
    }
    case RECEIVE_SAVE_MORADOR_SUCCESS: {
      return {
        ...state,
        newMorador: {
          nome: '',
          cpf: '',
          apartamento: '',
          telefone: '',
          email: ''
        }
      }
    }
    case RECEIVE_RESERVAS_SUCCESS: {
      return {
        ...state,
        isRequesting: false,
        reservas: action.reservas
      }
    }
    case UPDATE_FIELD: {
      return {
        ...state,
        [action.form]: {
          ...state[action.form],
          [action.field]: action.value
        }
      }
    }
    case RECEIVE_AVISOS_FAILURE: {
      return {
        ...state,
        isRequesting: false,
        avisos: []
      }
    }
    case RECEIVE_AVISOS_SUCCESS: {
      return {
        ...state,
        isRequesting: false,
        avisos: action.avisos
      }
    }
    case REQUEST_AVISOS: {
      return {
        ...state,
        isRequesting: true
      }
    }
    case REQUEST_MORADORES: {
      return {
        ...state,
        isRequesting: true
      }
    }
    case RECEIVE_MORADORES_SUCCESS: {
      return {
        ...state,
        moradores: action.moradores,
        isRequesting: false
      }
    }
    case RECEIVE_MORADORES_FAILURE: {
      return {
        ...state,
        moradores: [],
        isRequesting: false
      }
    }
    
  }
  return state
}

export const updateField = (form, field, value) =>
  ({
    type: UPDATE_FIELD,
    form,
    field,
    value
  })

export const doSaveUsuario = (form) =>
  dispatch => {
    dispatch(requestSaveUsuario(form))


    http('/usuarios', 'POST', form)
      .then((data) => {
        dispatch(doRequestUsuarios(data))
        dispatch(saveUsuarioSuccess())
      }, (error) => {
        dispatch(saveUsuarioFailure(error))
      })

  }

export const doSaveReserva = (form) =>
  dispatch => {
    dispatch(requestSaveReserva(form))


    http('/reservas', 'POST', form)
      .then((data) => {

        dispatch(doRequestReservas(data))
        dispatch(saveReservaSuccess())
      }, (error) => {
        dispatch(saveReservaFailure(error))
      })

  }

export const doSaveMorador = (form) =>
  dispatch => {
    dispatch(requestSaveMorador(form))


    http('/moradores', 'POST', form)
      .then((data) => {

        dispatch(doRequestMoradores(data))
        dispatch(saveMoradorSuccess())
      }, (error) => {
        dispatch(saveMoradorFailure(error))
      })

  }

export const requestSaveUsuario = (form) =>
  ({
    type: REQUEST_SAVE_USUARIO,
    form
  })

export const requestSaveReserva = (form) =>
  ({
    type: REQUEST_SAVE_RESERVA,
    form
  })

export const requestSaveMorador = (form) =>
  ({
    type: REQUEST_SAVE_MORADOR,
    form
  })

export const saveReservaSuccess= (data) =>
  ({
    type: RECEIVE_SAVE_RESERVA_SUCCESS,
    data
  })

export const saveReservaFailure = (error) =>
  ({
    type: RECEIVE_SAVE_RESERVA_FAILURE,
    error
  })

export const saveMoradorSuccess= (data) =>
  ({
    type: RECEIVE_SAVE_MORADOR_SUCCESS,
    data
  })

export const saveMoradorFailure = (error) =>
  ({
    type: RECEIVE_SAVE_MORADOR_FAILURE,
    error
  })

export const doSaveAviso = (form) =>
  dispatch => {
    dispatch(requestSaveAviso(form))


    http('/avisos', 'POST', form)
      .then((data) => {

        dispatch(doRequestAvisos(data))
        dispatch(saveAvisoSuccess())
      }, (error) => {
        dispatch(saveAvisoFailure(error))
      })

  }

export const requestSaveAviso = (form) =>
  ({
    type: REQUEST_SAVE_AVISO,
    form
  })

export const saveAvisoSuccess= (data) =>
  ({
    type: RECEIVE_SAVE_AVISO_SUCCESS,
    data
  })

export const saveAvisoFailure = (error) =>
  ({
    type: RECEIVE_SAVE_AVISO_FAILURE,
    error
  })

export const saveUsuarioSuccess = (data) =>
  ({
    type: RECEIVE_SAVE_USUARIO_SUCCESS,
    data
  })

export const saveUsuarioFailure = () =>
  ({
    type: RECEIVE_SAVE_USUARIO_FAILURE
  })

export const receiveMoradoresSuccess = (moradores) => 
  ({
    type: RECEIVE_MORADORES_SUCCESS,
    moradores
  })

export const receiveMoradoresFailure = (error) => 
  ({
    type: RECEIVE_MORADORES_FAILURE,
    error
  })

export const requestMoradores = () =>
  ({
    type: REQUEST_MORADORES
  })

export const requestReservas = () =>
  ({
    type: REQUEST_RESERVAS
  })

export const requestUsuarios = () =>
  ({
    type: REQUEST_USUARIOS 
  })

export const doRequestUsuarios= () =>
  dispatch => {
    dispatch(requestUsuarios())

    http('/usuarios', 'GET')
      .then((data) => {
        dispatch(receiveUsuariosSuccess(data))
      }, (error) => {
        dispatch(receiveUsuariosFailure(error))
      })
  }

export const doRequestReservas = () =>
  dispatch => {
    dispatch(requestReservas())

    http('/reservas', 'GET')
      .then((data) => {
        dispatch(receiveReservasSuccess(data))
      }, (error) => {
        dispatch(receiveReservasFailure(error))
      })
  }

export const doRequestMoradores = () =>
  dispatch => {
    dispatch(requestMoradores())

    http('/moradores', 'GET')
      .then((data) => {
        dispatch(receiveMoradoresSuccess(data))
      }, (error) => {
        dispatch(receiveMoradoresFailure(error))
      })
  }


export const receiveUsuariosSuccess = (usuarios) => 
  ({
    type: RECEIVE_USUARIOS_SUCCESS,
    usuarios
  })

export const receiveUsuariosFailure = (error) => 
  ({
    type: RECEIVE_USUARIOS_FAILURE,
    error
  })

export const receiveReservasSuccess = (reservas) => 
  ({
    type: RECEIVE_RESERVAS_SUCCESS,
    reservas 
  })

export const receiveReservasFailure = (error) => 
  ({
    type: RECEIVE_RESERVAS_FAILURE,
    error
  })

export const receiveAvisosSuccess = (avisos) => 
  ({
    type: RECEIVE_AVISOS_SUCCESS,
    avisos 
  })

export const receiveAvisosFailure = (error) => 
  ({
    type: RECEIVE_AVISOS_FAILURE,
    error
  })

export const requestAvisos = () =>
  ({
    type: REQUEST_AVISOS
  })

export const doRequestAvisos = () =>
  dispatch => {
    dispatch(requestAvisos())

    http('/avisos', 'GET')
      .then((data) => {
        dispatch(receiveAvisosSuccess(data))
      }, (error) => {
        dispatch(receiveAvisosFailure(error))
      })
  }

