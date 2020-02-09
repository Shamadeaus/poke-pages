import React from 'react'
import Search from '@material-ui/icons/Search'
import WhosThatPokemon from '../whosThatPokemon/WhosThatPokemon'

export const homeRoute = {
    path: '/',
    component: <div>Home</div>
}

const whoIsThatPokemon = {
    path: '/whosThatPokemon',
    component: <WhosThatPokemon/>,
    icon: <Search/>,
    text: "Who's that Pokemon!?"
}

export default [
    whoIsThatPokemon
]