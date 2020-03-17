import * as types from '../types/events'
import omit from 'lodash'
import {combineReducers} from 'redux'

const order = (state = [], action) => {
    switch (action.type) {
        case types.EVENT_ADDED: {
            return [...state, action.payload.id]
        }
        case types.EVENT_REMOVED: {
            return omit (state, action.payload.id)
        }
        default: {
            return state
        }
    }
}

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.EVENT_ADDED: {
            return {
                ...state,
                [action.payload.id] : {
                    type: action.payload.type,
                    dateTime: action.payload.dateTime,
                    babyAsigned: action.payload.babyAsigned,
                    notes: action.payload.notes,
                }
            }
        }
        case types.EVENT_REMOVED: {
            return omit (state, action.payload.id)
        }
        default: {
            return state
        }
    }
}

const events = combineReducers ({
    byId,
    order,
})

export default events

export const getEvent = (
    order,
    byId,
    id,
) => id < order.length ? byId[id] : undefined

export const getEventsOfBaby = (order, byId, idBaby) => order.map(
    id => getEvent(order, byId, id),
)/*.filter(event => event.id === idBaby)*/

/*export const getAgents = state => state.order.map(
    id => getAgent(state, id),
  ).filter(agent => agent != null);*/