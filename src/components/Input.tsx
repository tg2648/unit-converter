import React, { ChangeEvent, MouseEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaCopy } from 'react-icons/fa';


type InputProps = {
  value: string,
  id: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleCopy: (e: MouseEvent<HTMLButtonElement>) => void,
}


const Input: React.FC<InputProps> = (props) => {

  return (
    <InputGroup>
      <Form.Control
        id={props.id}
        inputMode='decimal'
        type='text'
        value={props.value}
        onChange={props.handleChange}
        autoComplete='off'
      />
      <Button variant='outline-primary' onClick={props.handleCopy}>
        <FaCopy/>
      </Button>
    </InputGroup>
  )
}

export default Input;
