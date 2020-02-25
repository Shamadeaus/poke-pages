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
import navLogo from '../resources/nav-logo.png'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
    menuButton: {
        padding: '6px'
    },
    logo: {
      margin: '8px 0',
      height: '48px',
      cursor: 'pointer'
    },
    list: {
        width: 255
    },
    navLogo: {
        height: 200,
        width: 140,
        cursor: 'pointer'
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
                    <img onClick={() => history.push('/')} className={classes.logo} src={logo} alt="logo"/>
                    <FlexSpacer/>
                    <IconButton className={classes.menuButton} color="inherit" href="https://github.com/Shamadeaus/poke-pages">
                        <GitHubIcon/>
                    </IconButton>
                    <OverflowMenu>
                        <MenuItem onClick={toggleTheme}>
                            {theme === 'dark' ? 'Poke Ball Theme' : 'Dusk Ball Theme'}
                        </MenuItem>
                    </OverflowMenu>
                </Toolbar>
            </AppBar>
            <Drawer open={drawerOpen} onClose={toggleDrawer}>
                <img onClick={() => {
                    history.push('/')
                    toggleDrawer()
                }} className={classes.navLogo} src={navLogo} alt="nav-logo" />
                <Divider/>
                <List className={classes.list}>
                    {
                        routes.map((route, key) => {
                            if (route.icon && route.text) {
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
                            }
                            return null
                        })
                    }
                </List>
            </Drawer>
        </>
    )
}

export default ApplicationBar
