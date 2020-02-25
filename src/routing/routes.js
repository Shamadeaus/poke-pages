import React from 'react'
import Search from '@material-ui/icons/Search'
import PokemonList from '../pokemonList/PokemonList'
import PokemonDetails from '../pokemonDetails/PokemonDetails'

export const homeRoute = {
    path: '/',
    component: <PokemonList/>
}

const pokemonList = {
    path: '/pokemonList',
    component: <PokemonList/>,
    icon: <Search/>,
    text: "List"
}

const pokemonDetails = {
    path: '/pokemonDetails/:id',
    component: <PokemonDetails/>
}

export default [
    pokemonList,
    pokemonDetails
]