import React from "react"
import {render} from "react-dom"
import {Router, Route, browserHistory} from "react-router"
import BattleViewContainer from "stickboxing/components/BattleViewContainer"
import CharacterView from "stickboxing/components/CharacterView"
import MainMenuView from "stickboxing/components/MainMenuView"
import SettingsView from "stickboxing/components/SettingsView"
import StageListView from "stickboxing/components/StageListView"

render(
    <Router history={browserHistory}>
      <Route path="/" component={MainMenuView} />
      <Route path="/main_menu" component={MainMenuView} />
      <Route path="/stage_list" component={StageListView} />
      <Route path="/character" component={CharacterView} />
      <Route path="/settings" component={SettingsView} />
      <Route path="/battle" component={BattleViewContainer} />
    </Router>,
    document.querySelector("body")
)
