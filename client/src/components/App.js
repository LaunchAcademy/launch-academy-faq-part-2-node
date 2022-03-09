import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { hot } from "react-hot-loader/root"
import FAQList from "./FAQList"
import LauncherList from "./LauncherList"
import LauncherShow from "./LauncherShow"

const App = (props) => {
  // always need to wrap everything in BrowserRouter
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FAQList} />
        <Route exact path="/launchers" component={LauncherList} />
        <Route exact path="/launchers/:id" component={LauncherShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
