import React from "react";
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import { DATA } from "../data";
import InputGroup from "./InputGroup";


export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <ul>
              {DATA.map((categoryData, index) => {
                return (
                  <li key={index}>
                    <Link to={'/' + categoryData.categoryId}>{categoryData.categoryName}</Link>
                  </li>
                )
              })}
            </ul>
          </Route>
          {DATA.map((categoryData, index) => {
            return (
              <Route key={index} path={'/' + categoryData.categoryId}>
                <Link to="/">Back</Link>
                <InputGroup data={categoryData} />
              </Route>
            )
          })}
        </Switch>
    </Router>
  )
}
