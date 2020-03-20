
import { connect } from 'react-redux';
import * as actions from '../../actions/events'
import * as selectors from '../../reducers/babys'
import React  from 'react';

const Baby = ({onClick, babyData}) => {
    <li
        onClick={onClick}
    >
        {babyData.name} {babyData.lastname}
    </li>
}

export default connect(
    (state, {id}) => ({
      babyData: selectors.getBaby(state, id),
    }),
    (dispatch) => ({
      onClick() {
        console.log("hola");
      },
    }),
  )(Baby);
  