import * as React from "react"
import { render } from "react-dom"
import { Router, Route, browserHistory } from "react-router"
import { MainMenuView } from "stickboxing/components/MainMenuView"
import { StagesView } from "stickboxing/components/StagesView"

render(
    <Router history={browserHistory}>
      <Route path="/" component={MainMenuView} />
      <Route path="/main_menu" component={MainMenuView} />
      <Route path="/stages" component={StagesView} />
    </Router>,
    document.querySelector("body")
)
