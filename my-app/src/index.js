import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App'

/*const App = () =>(

    <Provider store={store}>
      <Router>
        <CreateBabe />
        <CreateEvent />
        <Events />
      </Router>
    </Provider>
);
*/
ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

