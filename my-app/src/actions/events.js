import * as types from '../types/events/index'
import { v4 as uuidv4} from 'uuid'

/*
export const EVENT_ADDED = 'EVENT_ADDED'
export const EVENT_REMOVED = 'EVENT_REMOVED'
*/

export const addEvent = (type, dateTime, babyAssigned, notes) => ({
    type: types.EVENT_ADDED,
    payload: {id: uuidv4(), type, dateTime, babyAssigned, notes},
})

export const removeEvent = (id) => ({
    type: types.EVENT_REMOVED,
    payload: id,
})

