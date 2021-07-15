import React, { ChangeEvent } from "react";

type InputProps = {
  label: string,
  value: string,
  id: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => {

  return (
    <label>
      {props.label}
      <input type="text" value={props.value} onChange={props.handleChange} />
    </label>
  )
}

export default Input;
