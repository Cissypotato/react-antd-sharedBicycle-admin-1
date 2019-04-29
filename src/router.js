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
import NoMatch from './pages/nomatch'

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