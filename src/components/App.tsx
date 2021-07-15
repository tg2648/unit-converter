import React, { ChangeEvent, useState } from "react";
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import Input from "./Input";

type UnitDataType = {
  unitId: string,
  unitName: string,
  conversionFactor: number,
}

type CategoryDataType = {
  categoryId: string,
  categoryName: string,
  units: UnitDataType[]
}

const DATA: CategoryDataType[] = [
  {
    'categoryId': 'length',
    'categoryName': 'Length',
    'units': [
      {
        'unitId': 'meters',
        'unitName': 'Meters',
        'conversionFactor': 1
      },
      {
        'unitId': 'centimeters',
        'unitName': 'Centimeters',
        'conversionFactor': 100
      },
      {
        'unitId': 'inches',
        'unitName': 'Inches',
        'conversionFactor': 39.37
      },
    ]
  }
]

/**
 * Return conversion factor for a unitId
 */
const getConversionFactor = (unitId: string, units: UnitDataType[]): number => {
  const unitData = units.find(element => element.unitId === unitId);
  if (unitData) {
    return unitData.conversionFactor;
  } else {
    return 0;
  }
}

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
                <Category data={categoryData} />
              </Route>
            )
          })}
        </Switch>
      </div>
    </Router>
  )
}

type CategoryPropsType = {
  data: CategoryDataType
}
const Category: React.FC<CategoryPropsType> = (props) => {

  type StateValueType = {
    [index: string]: string,
  }
  const initialValues: StateValueType = {}
  props.data.units.forEach(unit => {
    initialValues[unit.unitId] = ''
  });

  const [values, setValues] = useState(initialValues);

  /**
   * onChange event handler
   * @param changedUnitId id of the changed unit
   * @param e change event
   */
  const handleChange = (changedUnitId: string, e: ChangeEvent<HTMLInputElement>) => {
    console.log('onChange in ', changedUnitId);

    let newValues = { ...initialValues };

    if (e.target.value) {
      const commonValue = 1 / getConversionFactor(changedUnitId, props.data.units) * Number.parseInt(e.target.value);

      for (const unitId in newValues) {
        if (unitId === changedUnitId) {
          newValues[unitId] = e.target.value;
        } else {
          newValues[unitId] = Number(commonValue * getConversionFactor(unitId, props.data.units)).toFixed(2).toString();
        }
      }
    }

    setValues(newValues);
  }

  return (
    <div>
      {
        props.data.units.map((unit, index) => {
          return (
            <div key={index}>
              <Input
                label={unit.unitName}
                value={values[unit.unitId]}
                id={unit.unitId}
                handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(unit.unitId, e)}
              />
              <br></br>
            </div>
          )
        })
      }
    </div>
  )
}
