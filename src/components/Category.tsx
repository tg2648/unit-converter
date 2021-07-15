import React, { ChangeEvent, useState } from "react";
import { CategoryDataType, UnitDataType } from "../data";
import Input from "./Input";

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

type CategoryPropsType = {
  data: CategoryDataType
}

type StateValueType = {
  [index: string]: string,
}

const Category: React.FC<CategoryPropsType> = (props) => {

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

export default Category;
