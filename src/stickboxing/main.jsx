import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import React from "react"
import {render} from "react-dom"
import {Router, Route, browserHistory} from "react-router"
import BattleViewContainer from "stickboxing/components/BattleViewContainer"
import CharacterViewContainer from "stickboxing/components/CharacterViewContainer"
import MainMenuView from "stickboxing/components/MainMenuView"
import SettingsView from "stickboxing/components/SettingsView"
import SignInViewContainer from "stickboxing/components/SignInViewContainer"
import StagesViewContainer from "stickboxing/components/StagesViewContainer"

var config = {
    apiKey: "AIzaSyBvcMpM7tOzqJNQk9SwkLqz6ThTFNZzYJs",
    authDomain: "stickfighter-d6a37.firebaseapp.com",
    databaseURL: "https://stickfighter-d6a37.firebaseio.com",
    storageBucket: "stickfighter-d6a37.appspot.com",
}

class Auth extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null
        }
    }

    componentWillMount() {
        var app = firebase.initializeApp(config)
        app.auth().onAuthStateChanged((user) => this.setState({user: user}))
    }

    render() {
        var {user} = this.state
        return user ? <div>{this.props.children}</div>
                    : <SignInViewContainer/>
    }
}

render(
    <Router history={browserHistory}>
      <Route path="/sign_in" component={SignInViewContainer} />
      <Route component={Auth}>
        <Route path="/" component={MainMenuView} />
        <Route path="/main_menu" component={MainMenuView} />
        <Route path="/stages" component={StagesViewContainer} />
        <Route path="/character" component={CharacterViewContainer} />
        <Route path="/settings" component={SettingsView} />
        <Route path="/battle" component={BattleViewContainer} />
      </Route>
    </Router>,
    document.querySelector("#root")
)
