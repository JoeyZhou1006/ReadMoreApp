import React from 'react';

const AuthContext = React.createContext();

class AuthProvider extends React.Component{
    state = { isAuth: false}

    constructor() {   
         super()    
         this.login = this.login.bind(this)    
         this.logout = this.logout.bind(this)  
    }

    login() {    
        // setting the authentication to be true
        //place holder to hold incoming actual firebase authentication  
        this.setState({ isAuth: true})
    }

    logout() {    
        this.setState({ isAuth: false })  
    }


    render() {    
        return (      
            //pass down the variable and login and logout function when using auth provider
            <AuthContext.Provider value={{isAuth: this.state.isAuth, login: this.login,logout: this.logout        
            }}>        
            {this.props.children}      
            </AuthContext.Provider>    
        )
        }

}

const AuthConsumer = AuthContext.Consumer;


export { AuthProvider, AuthConsumer }



