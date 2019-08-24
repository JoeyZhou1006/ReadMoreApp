// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

class SignIn extends React.Component {

  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.,
    isEmailVerified: false
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      //signInSuccessWithAuthResult: () => false
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {

        var user = firebase.auth().currentUser;
        console.log('auth result:');
        console.log(authResult);

        user.sendEmailVerification().then(function() {
        // Email sent.
        alert('email sent');
            console.log(firebase.auth().currentUser);
            console.log('is the user email verified');
            //console.log(firebase.auth().currentUser.emailVerified);

        }).catch(function(error) {
          console.log('error occured');
          console.log(error);
        // An error happened.
        });

        return true;
      }

    }
  };


  render() {

    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1 className="text-center">Please Sign In / Sign Up here</h1>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        
        </div>
      );
    }

  }

}
export default SignIn;