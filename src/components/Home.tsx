import React from "react";
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { DATA } from "../data";


const Home = () => {
  return (
    <div className='d-grid gap-2 col-lg-5 mx-auto'>
      <h1 className="display-5">Unit Converter</h1>
      {DATA.map((categoryData, index) => {
        return (
          <LinkContainer key={index} to={'/' + categoryData.categoryId}>
            <Button variant='primary' size="lg">
              <categoryData.categoryIcon />
              {' '}
              {categoryData.categoryName}
            </Button>
          </LinkContainer>
        )
      })}
    </div>
  )
}

export default Home;
