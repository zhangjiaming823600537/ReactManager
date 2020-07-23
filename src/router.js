import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin';
import Buttons from './pages/ui/button'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loading'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tab from './pages/ui/tabs'

import NoMatch from './pages/nomatch'
class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" component={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                <Route path="/admin/ui/notification" component={Notice}></Route>
                                <Route path="/admin/ui/messages" component={Messages}></Route>
                                <Route path="/admin/ui/tabs" component={Tab}></Route>

                                <Route component={NoMatch}></Route>
                            </Switch>

                        </Admin>}>
                    </Route>
                    <Route path="/order/detail" component={Login}></Route>
                </App>
            </HashRouter>
        );
    }
}

export default Router;
