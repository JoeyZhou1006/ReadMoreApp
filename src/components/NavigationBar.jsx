import React from 'react';
import { Button } from 'reactstrap';

/**
 * Navigation component which will display the navigation bar on the top so the user can navigate between different sites
 */
class NavigationBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { isSignIn: false };
        this.UserAuthenticate = this.UserAuthenticate.bind(this);
    }

    /**
     * Function to handle user sign-in/sign-out event
     */
    UserAuthenticate() {
        this.setState(state=> ({
            isSignIn: !state.isSignIn
        }));
        
    }

    render() {
        return (
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Read More Web App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Registered Emails</a>
                    </li>
                    </ul>
                    <span>
                    <Button color="primary" onClick={this.UserAuthenticate}>
                        {this.state.isSignIn ? 'Sign out' : 'Sign in'} 
                    </Button>
                    </span>
                </div>
                </nav>
        )
    }


}


  
  export default NavigationBar;