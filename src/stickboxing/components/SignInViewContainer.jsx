import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import React from "react"
import {render} from "react-dom"
import SignInView from "stickboxing/components/SignInView"

export class SignInViewContainer extends React.Component {
    render() {
        return <SignInView
          onFacebookSignInButtonClick={() => {

          }}
          onGoogleSignInButtonClick={() => {
            var provider = new firebase.auth.GoogleAuthProvider()

            firebase.auth().signInWithRedirect(provider)
            firebase.auth().getRedirectResult().then((result) => {
                var user = result.user
                var credential = result.credential
            }, (error) => {
                if (error.code === "auth/account-exists-with-different-credential") {

                }
            })
          }}
        />
    }
}

export {SignInViewContainer as default}
