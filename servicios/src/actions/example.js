import { actionTypes } from './types'

function exampleLoading () {
  return {
    type: actionTypes.exampleLoading
  }
}

function exampleDataSucces (data) {
  return {
    type: actionTypes.exampleDataSucces,
    payload: data
  }
}

function exampleFail (err) {
  return {
    type: actionTypes.exampleFail,
    payload: err
  }
}
