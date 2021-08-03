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
  data: Category,
  showToast: () => void,
}

type InputGroupState = {
  [id: string]: {
    numValue: number | undefined,
    displayValue: string
  },
}

const InputGroup: React.FC<InputGroupProps> = (props) => {

  const initialValues: InputGroupState = {}
  props.data.units.forEach(unit => {
    initialValues[unit.unitId] = {
      numValue: undefined,
      displayValue: '',
    };
  });

  const [values, setValues] = useState(initialValues);

  /**
   * onChange event handler
   * @param changedUnitId id of the unit whose input field changed
   * @param e change event
   */
  const handleChange = (changedUnitId: string, e: ChangeEvent<HTMLInputElement>) => {

    let newValues = { ...initialValues };

    // Few edge cases to consider
    // 1. Since input fields are rendered with thousand separators
    //    and e.target.value is a string, remove separators
    // 2. When typing a decimal value, text entered with a dot at the end
    //    needs to be interpreted as a valid number

    let currentNumValue = Number(e.target.value.replaceAll(',', ''));
    let currentDisplayValue = currentNumValue.toLocaleString();

    const lastChar = e.target.value[e.target.value.length - 1];
    if (lastChar === '.') {
      currentDisplayValue = currentDisplayValue + '.';
    }

    if (e.target.value) {
      // If input is not empty, calculate conversions. Otherwise, reset values to initial values

      const commonValue = 1 / getConversionFactor(changedUnitId, props.data.units) * currentNumValue;

      for (const unitId in newValues) {
        if (unitId === changedUnitId) {
          // Value for the input field currently typed to
          newValues[unitId].numValue = currentNumValue;
          newValues[unitId].displayValue = currentDisplayValue;
        } else {
          // Values for all others input fields
          let calc = commonValue * getConversionFactor(unitId, props.data.units);
          newValues[unitId].numValue = calc;
          newValues[unitId].displayValue = calc.toLocaleString();
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
    const value = values[unitId].numValue;

    if (value) {
      // Do not copy `.000` for whole numbers
      // parseFloat().toString() to ignore trailing zeroes
      const valueStr = value % 10 ? parseFloat(value.toFixed(3)).toString() : value.toFixed(0).toString()

      navigator.clipboard.writeText(valueStr).then(() => {
        console.log('Copied to clipboard!');
        props.showToast();
      }, (error) => {
        console.log('Copy failed: ', error);
      });
    }
  }

  return (
    <>
      {
        props.data.units.map((unit, index) => {
          return (
            <div key={index} className="row">
              <label htmlFor={unit.unitId} className="col-4 fs-5">
                {unit.unitName}
              </label>
              <div className="col-8">
                <Input
                  value={values[unit.unitId].displayValue}
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
