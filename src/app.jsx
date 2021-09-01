import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getUsers } from './actions/users.js'

// Components import
import Navbar from './components/navbar';
// Router pages imports
import Home from './pages/home';
import Login from './pages/auth/login'



const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    return (
        <>
            <section>
                <Router>
                    <div className='navbar'>
                        <Navbar />
                    </div>
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/login" component={Login} />
                        </Switch>
                    </div>
                </Router>
            </section>
        </>
    )
}

export default App