import React from 'react'
import Search from '@material-ui/icons/Search'

export const homeRoute = {
    path: '/',
    component: <div>Home</div>
}

const pokemonLookupRoute = {
    path: '/#/lookup',
    component: <div>Lookup</div>,
    icon: <Search/>,
    text: 'Pokemon'
}

export default [
    pokemonLookupRoute
]