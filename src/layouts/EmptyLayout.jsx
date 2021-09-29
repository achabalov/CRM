import React from 'react'
import { Route } from 'react-router';
import { authRoutes } from '../routes/routes';

export default function EmptyLayout() {
    return (
        <div className="grey darken-1 empty-layout">
            {authRoutes.map(route => 
                <Route key={route} path={route.component} component={route.component} exact={route.exact} />
                )}
        </div>
    )
}
