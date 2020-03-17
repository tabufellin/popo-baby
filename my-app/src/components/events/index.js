
import event from '../event'
import { connect } from 'react-redux';
import * as actions from '../../actions/events'
import React, { Component }  from 'react';
import * as selectors from '../../reducers/index'
import range from 'lodash/range'

const events = ({order, byId, onClick}) => (
    <div className="events">
        {
     /*    order.length === 0 ? (
             <h1>
                 {'No hay eventos!'}
             </h1>
         ) : (*/
            
            range(byId).map(
                (_,index) => (
                    <event 
                        key={_}
                        info={byId.key}
                        onClick={ onClick }>
                    </event>
                )
            )
          
                }
    </div>
)


export default connect(
    (state, {id}) => ({
      events: selectors.getEventsOfBaby(state, id),
    }),
    (dispatch) => ({
      onClick() {
        dispatch(actions.removeEvent);
      },
    }),
  )(events);
  