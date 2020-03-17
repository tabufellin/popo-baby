import * as types from '../types/babys'
import { combineReducers } from 'redux'

const order = (state = [], action) => {
    switch (action.type) {
        case types.BABY_ADDED: {
            return [...state, action.payload.id]
        }
        default: {
            return state
        }
    }
}

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.BABY_ADDED: {
            return {
                ...state,
                [action.payload.id] : {
                    name: action.payload.name,
                    lastname: action.payload.lastname
                }
            }
        }
        default: {
            return state
        }
    }
}

const babys = combineReducers ({
    byId,
    order,
})

export default babys

export const getBaby = (byId, id) => byId[id];
export const getBabys = (byId, id) => byId.map(
    id => getBaby(byId, id),
)


