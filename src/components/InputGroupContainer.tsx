import React from "react";
import Button from 'react-bootstrap/Button';
import { FaArrowLeft } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { Category } from "../data";
import InputGroup from "./InputGroup";


type InputGroupContainerProps = {
  data: Category
}

const InputGroupContainer: React.FC<InputGroupContainerProps> = (props) => {
  return (
    <div className='d-grid gap-2 col-lg-5 mx-auto'>
      <LinkContainer to='/'>
        <Button variant='primary' size="lg">
          <FaArrowLeft />
          {' '}
          Back
        </Button>
      </LinkContainer>
      <InputGroup data={props.data} />
    </div>
  )
}

export default InputGroupContainer;
