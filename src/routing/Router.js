import React from 'react'
import { Route, Switch } from 'react-router'
import routes, {homeRoute} from './routes'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        padding: '8px'
    }
}))

function Router() {
    const classes = useStyles()

    return (
        <Switch>
            {
                routes.map((route, key) => <Route key={key} exact path={route.path}>
                    <div className={classes.root}>
                        {route.component}
                    </div>
                </Route>)
            }
            <Route path={homeRoute.path}>
                <div className={classes.root}>
                    {homeRoute.component}
                </div>
            </Route>
        </Switch>
    )
}

export default Router
