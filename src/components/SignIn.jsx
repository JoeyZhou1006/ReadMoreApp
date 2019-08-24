// Import FirebaseAuth and firebase.
import React, { useState , useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import UserAuthContext from '../UserAuthContext';
import UserAuthContextProvider from '../UserAuthContextProvider';


/**
 * SignIn component which will display third-party UI for manage user signin
 */
const  SignIn = () => {

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    signInSuccessUrl: '/',

    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
	  //Redirect to home page after successfully signed in
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {

        var user = firebase.auth().currentUser;
        if(!user.emailVerified){
            user.sendEmailVerification().then(function() {
            // sent.
            alert('An Email verification has been sent, please go to your email to authenticate! Thanks :D ');	
            }).catch(function(error) {
            alert('Some unknown error occurred, please try again');
            return false;
            });
        }else{
          return true;
        }
        return true;

      }
    }
  };

  return (
		<UserAuthContextProvider>
			<h1 className="text-center">Please Sign In / Sign Up here</h1>
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>      
		</UserAuthContextProvider>

      );
  }
export default SignIn;