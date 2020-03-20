
import { connect } from 'react-redux';
import * as actions from '../../actions/events'
import * as selectors from '../../reducers/events'
import React  from 'react';
const Event = ({eventId, eventData, babyId, onClick}) => (
    <div className='event-wrapper'>
      <div className="info-event">
        <p>Tipo: {eventData.type}</p> 
        <p>Notas: {eventData.notes}</p>
        <p>Fecha: {eventData.date}</p>
      </div>
      <button onClick={onClick}>
        {'Eliminar Evento'}
      </button>
    </div>
  );

export default connect(
  (state, {id, babyId}) => ({
    eventData: selectors.getEvent(state, id),
  }),
  (dispatch) => ({
    onClick() {
      dispatch(actions.removeEvent);
    },
  }),
)(Event);
