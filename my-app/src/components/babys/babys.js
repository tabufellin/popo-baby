import { connect } from 'react-redux';
import * as actions from '../../actions/events'
import * as selectors from '../../reducers/babys'
import React  from 'react';
import Baby from '../baby/baby'


const Babys = ({babys}) => (
    <ul>
        {



                babys.map(baby =>

                    <Baby 
                        key = {baby.id}
                        {...baby}
                    />  
                )

            

        }
    </ul>
)


export default connect(
    (state) => ({
      babys: selectors.getBabys(state),
    })
    )(Babys);