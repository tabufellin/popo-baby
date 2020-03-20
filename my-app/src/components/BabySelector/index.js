import React, { useState, Fragment } from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import * as selectors from '../../reducers/index'

const FormSelectorBaby = ({ onChange, babys }) => {
    const [value1, changeValue1]=useState('')
    return (
      <Fragment>

        <label>Choose baby: </label>  
          <select value={value1} onChange={e => {
              history.push('/baby/'+e.target.value)
              return changeValue1(e.target.value)
            }}> 
            {
               babys.map( baby => { <option key={baby.id} value={baby.id}>  {baby.name}  </option> })
            }

          </select>

      </Fragment>

    )
  }

  export default withRouter(connect
    (
    state => ({
        babys: selectors.getBabys(state)
    })
)(FormSelectorBaby))
