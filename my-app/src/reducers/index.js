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

export const getBaby = (state, id) => babysSelectors.getBaby(state.babys.byId, id)
export const getBabys = (state, id) =>babysSelectors.getBaby(state.babys.byId, id)
export const getEvent = (state, id) => eventsSelectors.getEvent(state.events.order,state.events.byId ,id)
export const getEventsOfBaby = (state, babyId) => eventsSelectors.getEvent(state.events.order, state.events.byId, babyId)

