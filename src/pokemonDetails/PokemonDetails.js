import React, {useState, useCallback, useEffect} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import gen8 from '../resources/gen-8-data.json'
import calculateTypeEffectiveness from '../helpers/calculateTypeEffectiveness'
import Typography from '@material-ui/core/Typography'
import _ from 'lodash'
import StandardCard from '../layout/StandardCard'
import CardContent from '@material-ui/core/CardContent'

function PokemonDetails() {
    const [pokemon, setPokemon] = useState(null)
    const [sprite, setSprite] = useState(null)
    const { id } = useParams()

    const loadData = useCallback(async () => {
        if (id > 809) {
            setPokemon(gen8[id])
            setSprite(`https://raw.githubusercontent.com/Shamadeaus/poke-sprites/master/defaultSprites/${_.padStart(id, 3, 0)}.png`)
        } else {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            setPokemon(data)
            setSprite(`https://raw.githubusercontent.com/Shamadeaus/poke-sprites/master/defaultSprites/${_.padStart(id, 3, 0)}.png`)
        }
    }, [id])

    useEffect(() => {
        loadData()
    }, [loadData])

    const getTypeImage = (type) => {
        return `https://raw.githubusercontent.com/Shamadeaus/poke-sprites/master/typeSprites/${type}.gif`
    }

    return (
        <StandardCard>
            {
                pokemon?.name && <CardContent>
                    <Typography component="div">
                        {_.startCase(pokemon.name)}
                    </Typography>
                    <Typography component="div" style={{display: 'flex', flexDirection: 'column', margin: 8}}>
                        <Typography component="div">
                            {sprite && <img alt={`${pokemon.name}-sprite`} src={sprite} onError={() => {
                                setSprite(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`)
                            }}/>}
                        </Typography>
                        <Typography component="div" style={{display: 'flex', flexDirection: 'row'}}>
                            <img alt={`${pokemon.types[0].type.name}-pokemon-type`} src={getTypeImage(pokemon.types[0].type.name)}  />
                            {pokemon.types[1] && <img alt={`${pokemon.types[1].type.name}-pokemon-type`} src={getTypeImage(pokemon.types[1].type.name)} />}
                        </Typography>
                    </Typography>
                    <Typography component="div">
                        Weakness
                    </Typography>
                    <Typography component="div" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        {
                            _.map(calculateTypeEffectiveness(pokemon.types[0].type.name, pokemon.types[1]?.type.name), (effectiveness, type) => {
                                return (
                                    <Typography component="div" key={type}>
                                        <img alt={`${type}-chart`} src={getTypeImage(type)} />
                                        <Typography component="div">
                                            {effectiveness}
                                        </Typography>
                                    </Typography>
                                )
                            })
                        }
                    </Typography>
                </CardContent>
            }
        </StandardCard>
    )

}

export default PokemonDetails
