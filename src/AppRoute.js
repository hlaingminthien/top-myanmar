import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopContainer from './features/TopMyanmar/container/TopContainer'
import KiyoContainer from './features/KiyoMyanmar/container/KiyoContainer'
import Navbar from './features/app/Navbar'
import Footer from './features/app/Footer'
import * as route from './config/route.config'



const AppRoute = props => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path={`/${route.kiyoMyanmar}`} component={KiyoContainer} />
                <Route path='/' component={TopContainer} />
            </Switch>
            <Footer/>
        </Router>
    )
}
export default AppRoute