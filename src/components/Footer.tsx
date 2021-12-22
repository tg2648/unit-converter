import React from 'react';
import { FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <hr className='mb-1'/>
      <div className='d-flex justify-content-center fs-4'>
        <a href='https://github.com/tg2648/unit-converter' rel='noreferrer' target='_blank'><FaGithub/></a>
      </div>
    </>
  )
}

export default Footer;
