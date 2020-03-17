import { createStore } from 'redux';
import reducer from './reducers';


export const configureStore = () => {
  const store =  createStore(reducer)
  store.subscribe( () => {
    console.log('state update')
    console.log(store.getState())
  })
  return store
}

export default configureStore
