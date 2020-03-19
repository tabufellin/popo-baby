import React, { useState, Fragment } from 'react';
import * as actions from '../../actions/events'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

const FormEvent = ({ onSubmit }) => {
    const [value1, changeValue1]=useState('');
    const [value2, changeValue2]=useState('');


    return (
      <Fragment>
        <p>¿De que tipo fue?</p>
        <label>
          <input
            type="radio"
            id="siesta"
            name="tipo"
            value="siesta"
            ////checked = {"siesta" === selectedOption}
            //onChange={handleOptionChange("siesta")}
            value={value1}
            onChange={e => changeValue1(e.target.id)}
          />
          Siesta
        </label>
        <label>
          <input
            type="radio"
            id="pacha"
            name="tipo"
            value="pacha"
            value={value1}
            //checked = {"pacha" === selectedOption}
            onChange={e => changeValue1(e.target.id)}
          />
          Pacha
        </label>

      <label>
        <input
            type="radio"
            id="cambio de pañal (popo)"
            name="tipo"
            value="cambio de pañal (popo)"
            value={value1}
            //checked = {"popo" === selectedOption}
            onChange={e => changeValue1(e.target.id)}
          />
          Cambio de pañal (popo)
      </label>
      
      <label>
        <input
            type="radio"
            id="cambio de pañal (pipi)"
            name="tipo"
            value="cambio de pañal (pipi)"
            value={value1}
            //checked = {"pipi" === selectedOption}
            onChange={e => changeValue1(e.target.id)}
          />
          Cambio de pañal (pipi)
      </label>

      <label>
        <input
            type="radio"
            id="pecho"
            name="tipo"
            value="pecho"
            value={value1}
            //checked = {"pecho" === selectedOption}
            onChange={e => changeValue1(e.target.id)}
          />
          Pecho
      </label>






        <input
          type="text"
          placeholder="Notas;"
          value={value2}
          onChange={e => changeValue2(e.target.value)}
        />
        <button type="submit" onClick={() => onSubmit(value1, value2)}>
          {'Crear'}
        </button>
      </Fragment>
    );
  } 

export default withRouter(
  connect(
    undefined,
    dispatch => ({
      onSubmit( value1, value2 ) {
        // i still have to fix the dateTime thing and the id generator
        dispatch(actions.addEvent(value1, 1, 323, value2))
        
      }
    })
  )(FormEvent))