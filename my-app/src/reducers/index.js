/// definicion de mi combineReducer
import { combineReducers } from 'redux'
import babys, * as babysSelectors from  './babys'
import events, * as eventsSelectors from './events'
import { reducer as formsReducer } from 'redux-form';

//var formReducer = require('redux-form').reducer;

const reducer = combineReducers({
    babys,
    events
})


export default reducer

export const getBaby = (state, id) => babysSelectors.getBaby(state.babys, id)
export const getBabys = (state) => babysSelectors.getBabys(state.babys)
export const getEvent = (state, id) => eventsSelectors.getEvent(state.events ,id)
export const getEvents = (state, babyId) => eventsSelectors.getEvents(state.events, babyId)

