/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'ADD_SMURF';


const url = 'http://localhost:3333/smurfs';

export const getSmurfs=() => dispatch => {
  return axios.get(`${url}`)
  .then(res => {
    dispatch({type: FETCH_SMURFS, payload: res.data});
  })
  .catch(err => {
    console.log(err);
  })
}

export const addSmurf=(smurf) => dispatch => {
  return axios.post(`${url}`, smurf)
  .then(res => {
    dispatch({type: ADD_SMURF, payload: res.data});
  })
  .catch(err => {
    console.log(err);
  })

}
