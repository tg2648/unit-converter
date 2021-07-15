import React from "react";
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import { DATA } from "../data";
import InputGroup from "./InputGroup";


export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {DATA.map((categoryData, index) => {
            return (
              <li key={index}>
                <Link to={'/' + categoryData.categoryId}>{categoryData.categoryName}</Link>
              </li>
            )
          })}
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <div>
              Home
            </div>
          </Route>
          {DATA.map((categoryData, index) => {
            return (
              <Route key={index} path={'/' + categoryData.categoryId}>
                <InputGroup data={categoryData} />
              </Route>
            )
          })}
        </Switch>
      </div>
    </Router>
  )
}
