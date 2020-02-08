import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import GitHubIcon from '../resources/GitHubIcon'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../resources/titleimg.png'
import FlexSpacer from '../shared/FlexSpacer'

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      margin: '8px 0',
      height: '48px'
    },
  }))

function ApplicationBar() {
    const classes = useStyles()

    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <img className={classes.logo} src={logo} alt="Log"/>
                <FlexSpacer/>
                <IconButton className={classes.menuButton} color="inherit" href="https://github.com/Shamadeaus/poke-pages">
                    <GitHubIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default ApplicationBar
