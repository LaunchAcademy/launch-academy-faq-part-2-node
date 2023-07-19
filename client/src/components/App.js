import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import FAQList from "./FAQList"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FAQList} />
      </Switch>
    </BrowserRouter>
  )
}

export default App