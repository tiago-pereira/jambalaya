import { http } from '../core/Api'

const initialState = {
  isRequesting: false,
  moradores: [],
  avisos: []
}

const REQUEST_MORADORES = 'REQUEST_MORADORES'
const RECEIVE_MORADORES_SUCCESS = 'RECEIVE_MORADORES_SUCCESS'
const RECEIVE_MORADORES_FAILURE = 'RECEIVE_MORADORES_FAILURE'

const REQUEST_AVISOS = 'REQUEST_AVISOS'
const RECEIVE_AVISOS_SUCCESS = 'RECEIVE_AVISOS_SUCCESS'
const RECEIVE_AVISOS_FAILURE = 'RECEIVE_AVISOS_FAILURE'

export default function reducer(state = initialState, action){
  switch(action.type) { 
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

