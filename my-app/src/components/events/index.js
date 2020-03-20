
import Event from '../event/index'
import { connect } from 'react-redux';
import * as actions from '../../actions/events'
import React, { Component }  from 'react';
import * as selectors from '../../reducers/index'
import range from 'lodash/range'

const Events = ({id, events}) => (

    <div className="events">
      {events.length === 0 ? (
        <h4>{"No hay eventos :("}</h4>
      ) : (
        events.map(item => <Event key={item} eventId={item} babyId={id}/>)
      )}
    </div>

)
/*
const EventList = ({ id, events }) => (
  <div className="white-text text-center text-md-left col-md-6 mb-5">
    <MDBListGroup>
      {events.length === 0 ? (
        <h4>{"No hay eventos..."}</h4>
      ) : (
        events.map(item => <EventItem key={item} eventId={item} babyId={id}/>)
      )}
    </MDBListGroup>
  </div>
);
*/
export default connect(
    (state, {id}) => ({
      events: selectors.getEvents(state, id),
    })
  )(Events);
  