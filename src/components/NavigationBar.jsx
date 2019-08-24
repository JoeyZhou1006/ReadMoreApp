import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { AuthConsumer } from '../AuthContext';
import UserAuthContext from '../UserAuthContext';
/**
 * Navigation component which will display the navigation bar on the top so the user can navigate between different sites
 */

const  NavigationBar = () => {

    const [userSignedIn, setUserSignOut] = useState(false)
//const { setUserSignIn, setUserSignOut } = useContext(UserAuthContext)

    return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Read More Web App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/registeredusers">Registered Emails</a>
                    </li>
                    </ul>
                    <span>
                        <Button color="primary" href="/signOut">
                        Sign In 
                        </Button>

                    </span>
                </div>
        </nav>
}

export default NavigationBar;