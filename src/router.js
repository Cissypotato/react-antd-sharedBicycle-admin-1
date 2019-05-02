import React from 'react'

import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/button'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notifications from './pages/ui/notification'
import Messages from './pages/ui/message'
import Tabsi from './pages/ui/tab'
import NoMatch from './pages/nomatch'
import Gallerys from './pages/ui/gallery';
import Carousels from './pages/ui/carousel';
import LoginForm from './pages/form/login';


class Router extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}/>
                    <Route path='/admin' render={()=>
                     <Admin>
                        <Switch>
                            <Route  path='/admin/ui/buttons' component={Buttons}/>
                            <Route  path='/admin/ui/modals' component={Modals}/>
                            <Route  path='/admin/ui/loadings' component={Loadings}/>
                            <Route  path='/admin/ui/notification' component={Notifications}/>
                            <Route  path='/admin/ui/messages' component={Messages}/>
                            <Route  path='/admin/ui/tabs' component={Tabsi}/>
                            <Route  path='/admin/ui/gallery' component={Gallerys}/>
                            <Route  path='/admin/ui/carousel' component={Carousels}/>
                            <Route  path='/admin/form/login' component={LoginForm}/>
                            <Route  component={NoMatch}/>

                         </Switch> 
                     </Admin>
                    }
                    />
                </App>
            </HashRouter>
        )
    }
}


export default Router