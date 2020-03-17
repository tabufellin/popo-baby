import * as types from '../types/babys'
import { v4 as uuidv4} from 'uuid'

export const addBaby = (name, lastname) => ({
    type: types.BABY_ADDED,
    payload: { id: uuidv4() , name, lastname},
})