import React from 'react'
import { Route, Switch } from 'react-router'
import { routes } from './routes'

export default function AppRouter() {
    return (
        <Switch>
            {routes.map((route)=> 
                <Route path={route.path} component={route.component} exact={route.exact} />
            )}
            
        </Switch>
    )
}
