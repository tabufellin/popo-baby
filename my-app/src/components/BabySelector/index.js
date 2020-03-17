/*import React from 'react'
import FilterLink from './FilterLink'
import SelectBox from '../Select-Box'
const BabySelector = (babys) => ((
    const [value, changeValue] = useState('')

    return (
        <Fragment>
            <select>
                id ="mySelect"
            </select>

            mySel
        </Fragment>
    )

)


const ExampleForm = ({ onSubmit }) => {
    const [value1, changeValue1] = useState('');
    const [value2, changeValue2] = useState('');
    return (
      <Fragment>
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
        <button type="submit" onClick={(dispatch) => onSubmit(value1, value2)}>
          {'Crear'}
        </button>
      </Fragment>
    );
  } 

const event = ({ info, onClick }) => (
    <div className = 'event-wrapper'>
      <div className="info-event">
        <p>Tipo: {info.type}</p>
        <p>Notas: {info.notes}</p>
      </div>
      <button onClick={onClick}>
        {'Eliminar Evento'}
      </button>
    </div>
  );