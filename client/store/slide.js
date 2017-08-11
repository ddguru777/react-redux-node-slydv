import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */
const GET_SLIDE_LIST = 'GET_SLIDE_LIST';
const GET_SINGLE_SLIDE = 'GET_SINGLE_SLIDE';

/**
 * INITIAL STATE
 */
const intialState = {
    slides: [],
    slideList: [],
    singleSlide: {}
};

/**
 * ACTION CREATORS
 */
const getSlideList = (slideList) => ({type: GET_SLIDE_LIST, slideList});
const getSingleSlide = (singleSlide) => ({type: GET_SINGLE_SLIDE, singleSlide});

/**
 * THUNK CREATORS
 */

export function fetchSlideList () {
    return function thunk (dispatch){
        return axios.get('/api/slides')
        .then(res => dispatch(getSlideList(res.data)))
        .catch(error => { console.log(error) });
    };
}

export function fetchSingleSlide (slideId) {
    return function thunk (dispatch){
        return axios.get(`/api/slides/${slideId}`)
        .then(res => dispatch(getSingleSlide(res.data)))
        .catch(error => { console.log(error) });
    };
}


export function createSlide ( slide ) {
    return function thunk (dispatch){
        return axios.post('/api/slides', slide)
        .then(res => dispatch(getSingleSlide(res.data)))
        .catch(error => { console.log( error) });
    };
}

export function changeSlide (slideId, slide) {
    return function thunk (dispatch){
        return axios.put(`/api/slides/${slideId}`, slide)
        .then(res => dispatch(getSingleSlide(res.data)))
        .catch(error => { console.log( error) });
    };
}

export function deleteSlide(slideId){
    return function thunk(dispatch){
        return axios.delete(`/api/slides/${slideId}`)
        .catch(error => { console.log(error) });
    };
}

/**
 * REDUCER
 */
export default function(state = intialState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case GET_SLIDE_LIST:
      newState.slideList = action.slideList;
      break;
    case GET_SINGLE_SLIDE:
      newState.singleSlide = action.singleSlide;
      break;
    default:
      return state;
  }
  return newState;
}
