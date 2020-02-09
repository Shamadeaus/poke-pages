import React from 'react'
import { Route, Switch } from 'react-router'
import routes, {homeRoute} from './routes'

function Router() {
    return (
        <Switch>
            {
                routes.map((route, key) => <Route key={key} exact path={route.path}>{route.component}</Route>)
            }
            <Route path={homeRoute.path}>
                {homeRoute.component}
            </Route>
        </Switch>
    )
}

export default Router
