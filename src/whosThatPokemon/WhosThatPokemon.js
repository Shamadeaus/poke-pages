import React, {useCallback, useState} from 'react'
import StandardCard from '../layout/StandardCard'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import pokemonList from '../resources/pokemon-list.json'
import axios from 'axios'
import calculateTypeEffectiveness from '../helpers/calculateTypeEffectiveness'
import Typography from '@material-ui/core/Typography'
import _ from 'lodash'

function WhosThatPokemon() {
    const [sprite, setSprite] = useState(null)
    const [pokemon, setPokemon] = useState({types: []})

    const handleGetPokemon = useCallback(async (event, value) => {
        if (value) {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value.dexNumber}`)
            setPokemon(data)
            setSprite(`https://raw.githubusercontent.com/Shamadeaus/poke-sprites/master/defaultSprites/${_.padStart(value.dexNumber, 3, 0)}.png`)
        } else {
            setPokemon(null)
            setSprite(null)
        }
    }, [])

    const getTypeImage = (type) => {
        return `https://raw.githubusercontent.com/Shamadeaus/poke-sprites/master/typeSprites/${type}.gif`
    }

    console.log(pokemon)

    return (
        <StandardCard>
            <Autocomplete
                onChange={handleGetPokemon}
                freeSolo
                options={pokemonList}
                getOptionLabel={option => option.name}
                style={{ width: 300 }}
                renderInput={params => (
                    <TextField {...params} label="Pokemon" variant="outlined" fullWidth />
                )}
            />
            {
                pokemon?.name && <div>
                    <div style={{display: 'flex', flexDirection: 'column', margin: 8}}>
                        <div>
                            {sprite && <img alt={`${pokemon.name}-sprite`} src={sprite} onError={() => {
                                setSprite(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`)
                            }}/>}
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <img alt={`${pokemon.types[0].type.name}-pokemon-type`} src={getTypeImage(pokemon.types[0].type.name)}  />
                            {pokemon.types[1] && <img alt={`${pokemon.types[1].type.name}-pokemon-type`} src={getTypeImage(pokemon.types[1].type.name)} />}
                        </div>
                    </div>
                    <Typography>
                        Attack Effectiveness
                    </Typography>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        {
                            _.map(calculateTypeEffectiveness(pokemon.types[0].type.name, pokemon.types[1]?.type.name), (effectiveness, type) => {
                                return (
                                    <div key={type} style={{display: 'flex', flexDirection: 'column'}}>
                                        <img alt={`${type}-chart`} src={getTypeImage(type)} />
                                        <Typography>
                                            {effectiveness}
                                        </Typography>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </StandardCard>        
    )
}

export default WhosThatPokemon
