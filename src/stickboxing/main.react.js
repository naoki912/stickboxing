import * as React from "react"
import { render } from "react-dom"
import { Router, Route, browserHistory } from "react-router"
import { MainMenuView } from "stickboxing/components/MainMenuView"
import { StagesView } from "stickboxing/components/StagesView"
import { CharacterView } from "stickboxing/components/CharacterView"
import { SettingsView } from "stickboxing/components/SettingsView"

render(
    <Router history={browserHistory}>
      <Route path="/" component={MainMenuView} />
      <Route path="/main_menu" component={MainMenuView} />
      <Route path="/stages" component={StagesView} />
      <Route path="/character" component={CharacterView} />
      <Route path="/settings" component={SettingsView} />
    </Router>,
    document.querySelector("body")
)
