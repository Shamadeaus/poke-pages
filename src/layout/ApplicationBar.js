import React, {useContext, useCallback, useState} from 'react'
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
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import routes from '../routing/routes'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    menuButton: {
        padding: '6px'
    },
    logo: {
      margin: '8px 0',
      height: '48px'
    },
    list: {
        width: 250
    }
}))

function ApplicationBar() {
    const classes = useStyles()
    const {toggleTheme, theme} = useContext(ThemeContext)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const history = useHistory()

    const toggleDrawer = useCallback(() => {
        setDrawerOpen(current => !current)
    }, [])

    return (
        <>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon/>
                    </IconButton>
                    <img className={classes.logo} src={logo} alt="Log"/>
                    <FlexSpacer/>
                    <IconButton className={classes.menuButton} color="inherit" href="https://github.com/Shamadeaus/poke-pages">
                        <GitHubIcon/>
                    </IconButton>
                    <OverflowMenu>
                        <MenuItem onClick={toggleTheme}>
                            {theme === 'dark' ? 'Poke ball Theme' : 'Dusk ball Theme'}
                        </MenuItem>
                    </OverflowMenu>
                </Toolbar>
            </AppBar>
            <Drawer open={drawerOpen} onClose={toggleDrawer}>
                <List className={classes.list}>
                    {
                        routes.map((route, key) => {
                            return (
                                <ListItem button key={key} onClick={() => {
                                    history.push(route.path)
                                    toggleDrawer()
                                }}>
                                    <ListItemIcon>
                                        {route.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={route.text}/>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Drawer>
        </>
    )
}

export default ApplicationBar
