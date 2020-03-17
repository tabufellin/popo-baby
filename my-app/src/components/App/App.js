import React from 'react';
import { configureStore } from '../../store'
import CreateBabe from '../CreateBabe'
import CreateEvent from '../CreateEvent'
import Events from '../events'
// still have to see wat to do with the id value and the datetiem thing
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import { Router, Route, Switch} from 'react-router'

export const history = createBrowserHistory()
const store = configureStore()





const App = () =>(

    <Provider store={store}>
      <Router history={history}>
        <div>
          <Switch>
            <Route path='/baby'>
              <CreateBabe/>
              <CreateEvent/>  
              <Events />
            </Route>
            <Route path='/' component={CreateBabe}>
            </Route>
          </Switch>

        </div>

      </Router>
    </Provider>
);
/*


<CreateBabe onSubmit= {dispatch(actions.addBaby(1, value1, value2))}/>
<CreateEvent onSubmit= {dispatch(actions.addEvent(2, 14, value1, value2))} />
<Events />


*/

export default App;

