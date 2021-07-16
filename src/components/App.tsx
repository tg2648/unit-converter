import React from "react";
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import { DATA } from "../data";
import Home from "./Home";
import InputGroupContainer from "./InputGroupContainer";

export default function App() {
  return (
    <Container>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          {DATA.map((categoryData, index) => {
            return (
              <Route key={index} path={'/' + categoryData.categoryId}>
                <InputGroupContainer data={categoryData} />
              </Route>
            )
          })}

        </Switch>
      </Router>
    </Container>
  )
}
