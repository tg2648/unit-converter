import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import { FaArrowLeft } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { Category } from "../data";
import InputGroup from "./InputGroup";


type InputGroupContainerProps = {
  data: Category
}

const InputGroupContainer: React.FC<InputGroupContainerProps> = (props) => {
  const [toastVisible, setToastVisible] = useState(false);
  const showToast = () => setToastVisible(true);

  return (
    <div className='mt-2 d-grid gap-2 col-lg-5 mx-auto'>
      <LinkContainer exact={true} to='/'>
        <Button variant='primary' size='lg'>
          <FaArrowLeft />
          {' '}
          Back
        </Button>
      </LinkContainer>
      <InputGroup data={props.data} showToast={showToast} />

      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Toast
          show={toastVisible}
          onClose={() => setToastVisible(false)}
          autohide={true}
          delay={1500}
          className='bg-success text-white'
        >
          <Toast.Body >Copied to clipboard</Toast.Body>
        </Toast>
      </div>

    </div>
  )
}

export default InputGroupContainer;
