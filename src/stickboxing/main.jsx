import React from "react"
import {render} from "react-dom"
import {Router, Route, browserHistory} from "react-router"
import BattleViewContainer from "stickboxing/components/BattleViewContainer"
import CharacterViewContainer from "stickboxing/components/CharacterViewContainer"
import MainMenuView from "stickboxing/components/MainMenuView"
import SettingsView from "stickboxing/components/SettingsView"
import StagesViewContainer from "stickboxing/components/StagesViewContainer"

render(
    <Router history={browserHistory}>
      <Route path="/" component={MainMenuView} />
      <Route path="/main_menu" component={MainMenuView} />
      <Route path="/stages" component={StagesViewContainer} />
      <Route path="/character" component={CharacterViewContainer} />
      <Route path="/settings" component={SettingsView} />
      <Route path="/battle" component={BattleViewContainer} />
    </Router>,
    document.querySelector("body")
)
