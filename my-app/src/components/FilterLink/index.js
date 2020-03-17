import React from 'react'
import { Link } from 'react-router'

const FilterLink = ({ filter, children}) => (
    <Link 

        to={filter === 'baby' ? '' : filter}
        
     
    >
    </Link>
)