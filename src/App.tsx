import React, { ChangeEvent, useState } from "react";
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Area />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Area() {
  type ValueType = {
    [index: string]: string,
  }

  const [values, setValues] = useState<ValueType>({ 'meters': '', 'inches': '' });

  type ConversionType = {
    [index: string]: number,
  }

  const conversionFactors: ConversionType = {
    'meters': 1,
    'inches': 39.37,
  }

  const handleChange = (id: 'meters' | 'inches', e: ChangeEvent<HTMLInputElement>) => {

    let newValues: ValueType = {
      'meters': '',
      'inches': '',
    }

    if (e.target.value) {
      const commonValue = 1 / conversionFactors[id] * Number.parseInt(e.target.value);
      // console.log('commonValue', commonValue);

      for (const unit in newValues) {
        if (unit === id) {
          newValues[unit] = e.target.value;
        } else {
          newValues[unit] = Number(commonValue * conversionFactors[unit]).toFixed(2).toString();
        }
      }
    }

    setValues(newValues);
  }

  return (
    <>
      <Input label="Meters" value={values.meters} id="meters" handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('meters', e)} />
      <Input label="Inches" value={values.inches} id="inches" handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('inches', e)} />
    </>
  );
}

type InputPropsType = {
  label: string,
  value: string,
  id: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputPropsType> = (props) => {

  return (
    <label>
      {props.label}
      <input type="text" value={props.value} onChange={props.handleChange} />
    </label>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}