import './styles.css'
import { connect } from 'react-redux';
import * as actions from '../../actions/events'
import * as selectors from '../../reducers/events'
import React, { Component }  from 'react';
const event = ({ info, onClick }) => (
    <div className='event-wrapper'>
      <div className="info-event">
        <p>Tipo: {info.type}</p> 
        <p>Notas: {info.notes}</p>
      </div>
      <button onClick={onClick}>
        {'Eliminar Evento'}
      </button>
    </div>
  );

export default connect(
  (state, {id}) => ({
    ...selectors.getEvent(state, id),
  }),
  (dispatch) => ({
    onClick() {
      dispatch(actions.removeEvent);
    },
  }),
)(event);
