import React, { useState, Fragment } from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import * as selectors from '../../reducers/index'

const FormSelectorBaby = ({ onSubmit, babys }) => {
    const [value1, changeValue1]=useState('')

    return (
      <Fragment>
          <label>Choose baby: </label> 
          <input list="babys"/> 
          <datalist id="babys"> 
              {
                    babys.length === 0 ? (
                      <option value="none"/>
                    ) : (
                      babys.map((baby,index) => (<option key={index} value={name} />))
                    )
              }
              onChange={e => changeValue1(e.target.value)}
          </datalist> 
        <button type="submit" onClick={() => onSubmit(value1)}>
          {'Choose'}
        </button>

      </Fragment>
    )
  }

export default withRouter(
  connect(
    (state, {id}) => ({
      babys: selectors.getBabys(state),
    }),
    dispatch => ({
      onSubmit( value1 ) {
        console.log("El valor es: " +value1)
        // i still have to fix the dateTime thing and the id generator
        //console.log(value1, value2)
        //I want to change the route
        //dispatch(actions.addEvent(value1, 165454646, value2))
        
      }
    })
  )(FormSelectorBaby))
  