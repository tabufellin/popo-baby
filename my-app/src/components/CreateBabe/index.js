import React, { useState, Fragment } from 'react'
import * as actions from '../../actions/babys'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
//import * as selectors from '../../reducers/index'
//import history from '../App/App'
export const history = createBrowserHistory()
const FormBaby = ({ onSubmit }) => {
    const [value1, changeValue1] = useState('');
    const [value2, changeValue2] = useState('');
    return (
      <Fragment>
        <h1>Create Baby</h1>
        <input
          type="text"
          placeholder="Nombre"
          value={value1}
          onChange={e => changeValue1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={value2}
          onChange={e => changeValue2(e.target.value)}
        />
        <Link to={{pathname: '/babe'}}>
        <button type="submit" onClick={(dispatch) => onSubmit(value1, value2)}>
            {'Crear'}
          </button>
        </Link>{' '}



      </Fragment>
    );
  } 

  export default withRouter(
    connect(
      undefined,
      dispatch => ({
        onSubmit( value1, value2 ) {
          console.log(value1 +  value2)
          history.push('/baby')
          dispatch(actions.addBaby(value1, value2))
        }
      }),
    )(FormBaby))


