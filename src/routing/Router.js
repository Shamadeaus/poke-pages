import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes, {homeRoute} from './routes'

function Router() {
    return (
        <Switch>
            <Route path={homeRoute.path}>
                {homeRoute.component}
            </Route>
            {
                routes.map((route, key) => <Route key={key} path={route.path}>{route.component}</Route>)
            }
        </Switch>
    )
}

export default Router
