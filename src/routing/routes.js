import React from 'react'
import Search from '@material-ui/icons/Search'
import WhosThatPokemon from '../whosThatPokemon/WhosThatPokemon'
import PokemonList from '../pokemonList/PokemonList'

export const homeRoute = {
    path: '/',
    component: <WhosThatPokemon/>
}

const whoIsThatPokemon = {
    path: '/whosThatPokemon',
    component: <WhosThatPokemon/>,
    icon: <Search/>,
    text: "Who's that Pokemon!?"
}

const pokemonList = {
    path: '/pokemonList',
    component: <PokemonList/>,
    icon: <Search/>,
    text: "List"
}

export default [
    whoIsThatPokemon,
    pokemonList
]