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

export const getEvent = (state,id) => state[id];
export const getEvents = (state, babyId) => state.order.map(id => getEvent(state, id).filter(event.babyId === babyId))