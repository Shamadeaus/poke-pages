import React, {useContext} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import GitHubIcon from '../resources/GitHubIcon'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../resources/titleimg.png'
import FlexSpacer from '../shared/FlexSpacer'
import OverflowMenu from '../shared/OverflowMenu'
import ThemeContext from '../theme/ThemeContext'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
    menuButton: {
        padding: '6px'
    },
    logo: {
      margin: '8px 0',
      height: '48px'
    },
  }))

function ApplicationBar() {
    const classes = useStyles()
    const {toggleTheme} = useContext(ThemeContext)

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
                <OverflowMenu>
                    <MenuItem onClick={toggleTheme}>
                        Dusk Theme
                    </MenuItem>
                </OverflowMenu>
            </Toolbar>
        </AppBar>
    )
}

export default ApplicationBar
