import React, { ChangeEvent, MouseEvent, useState } from "react";
import { Category, Unit } from "../data";
import Input from "./Input";

/**
 * Return conversion factor for a unitId
 */
const getConversionFactor = (unitId: string, units: Unit[]): number => {
  const unitData = units.find(element => element.unitId === unitId);
  if (unitData) {
    return unitData.conversionFactor;
  } else {
    return 0;
  }
}

type InputGroupProps = {
  data: Category
}

type InputGroupState = {
  [index: string]: string,
}

const InputGroup: React.FC<InputGroupProps> = (props) => {

  const initialValues: InputGroupState = {}
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
    let newValues = { ...initialValues };

    let currentValue = Number(e.target.value);

    if (e.target.value) {
      const commonValue = 1 / getConversionFactor(changedUnitId, props.data.units) * currentValue;

      for (const unitId in newValues) {
        if (unitId === changedUnitId) {
          newValues[unitId] = currentValue.toLocaleString();
        } else {
          newValues[unitId] = Number(commonValue * getConversionFactor(unitId, props.data.units)).toLocaleString();
        }
      }
    }

    setValues(newValues);
  }

  /**
   * Event handler for Input's copy buttons. Copies input field contents to clipboard.
   * @param unitId unitId of the corresponding input field
   * @param e onClick event
   */
  const handleCopyButtonClick = (unitId: string, e: MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(values[unitId]).then(() => {
      console.log('Copied to clipboard!');
    }, (error) => {
      console.log('Copy failed: ', error);
    });
  }

  return (
    <>
      {
        props.data.units.map((unit, index) => {
          return (
            <div key={index} className="row">
              <div className="col-4 fs-5">
                {unit.unitName}
              </div>
              <div className="col-8">
                <Input
                  value={values[unit.unitId]}
                  id={unit.unitId}
                  handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(unit.unitId, e)}
                  handleCopy={(e: MouseEvent<HTMLButtonElement>) => handleCopyButtonClick(unit.unitId, e)}
                />
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default InputGroup;
