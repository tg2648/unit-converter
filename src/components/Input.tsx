import React, { ChangeEvent } from "react";

type InputProps = {
  value: string,
  id: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => {

  return (
    <input type="text" className="form-control" value={props.value} onChange={props.handleChange} />
  )
}

export default Input;
