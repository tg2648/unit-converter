import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import { DATA } from "../data";
import InputGroup from "./InputGroup";


export default function App() {
  return (
    <Container>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <div className='d-grid gap-2 col-lg-5 mx-auto'>
              <h1 className="display-6">Unit Converter</h1>
              {/* <ButtonGroup vertical> */}
              {DATA.map((categoryData, index) => {
                return (
                  <LinkContainer key={index} to={'/' + categoryData.categoryId}>
                    <Button size="lg">
                      <categoryData.categoryIcon />
                      {' '}
                      {categoryData.categoryName}
                    </Button>
                  </LinkContainer>
                )
              })}
              {/* </ButtonGroup> */}
            </div>
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
    </Container>
  )
}
