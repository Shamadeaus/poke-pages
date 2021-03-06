import React, {useState, useEffect, useCallback} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import _ from 'lodash'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import pokemonList from '../resources/pokemon-list.json'
import { useHistory } from "react-router-dom"
import { Link as RouterLink } from 'react-router-dom';
const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} {...props} to={props.href} />
  ))

function PokemonList() {
    const history = useHistory()
    const [pokemon, setPokemon] = useState([])
    const headCells = [
        { id: 'pokedexNumber', label: 'Pokedex Number' },
        { id: 'name', label: 'Name' }
    ]

    const classes = useStyles()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        const newRowsPerPage = parseInt(event.target.value, 10)
        setRowsPerPage(newRowsPerPage)
        setPage(0)
    }

    const loadData = useCallback(async () => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${rowsPerPage}&offset=${page * rowsPerPage}`)
        setPokemon(data.results)
    }, [rowsPerPage, page])

    useEffect(() => {
        loadData()
    }, [loadData])


    const emptyRows = rowsPerPage - Math.min(rowsPerPage, pokemon.length - page * rowsPerPage)

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Typography className={classes.title} variant="h6" id="tableTitle">
                        Pokemon
                    </Typography>
                    <div style={{flex: 1}}/>
                    <Autocomplete
                        freeSolo
                        options={pokemonList}
                        onChange={(event, value) => history.push(`/pokemonDetails/${value.dexNumber}`)}
                        getOptionLabel={option => option.name}
                        style={{ width: 300 }}
                        renderInput={params => (
                            <TextField {...params} label="Search Pokemon" fullWidth />
                        )}
                    />
                </div>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size="medium"
                        aria-label="table"
                    >
                    <TableHead>
                        <TableRow>
                            {headCells.map(headCell => (
                            <TableCell
                                key={headCell.id}
                            >
                                <TableSortLabel>
                                {headCell.label}
                                </TableSortLabel>
                            </TableCell>
                            ))}
                        </TableRow>
                        </TableHead>
                    <TableBody>
                        {pokemon.map((row) => {   
                            const dexNumber = row.url.match(/\d+/g)[1]
                            return (
                            <TableRow
                                hover
                                tabIndex={-1}
                                key={row.name}
                            >
                                <TableCell component="th" scope="row">
                                    <Link component={LinkBehavior} color="secondary" href={`/pokemonDetails/${dexNumber}`}>{dexNumber}</Link>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {_.startCase(row.name)}
                                </TableCell>
                            </TableRow>
                            )
                        })}
                        {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                        )}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={890}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
      )
}

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    title: {
        padding: '16px'
    }
  }))

export default PokemonList
