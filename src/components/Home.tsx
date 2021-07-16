import React from "react";
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { DATA } from "../data";
import Footer from "./Footer";


const Home = () => {
  return (
    <div className='mt-2 col-sm-6 col-lg-4 mx-auto'>
      <div className='d-grid gap-2'>
        <h1 className="display-5">Unit Converter</h1>
        {DATA.map((categoryData, index) => {
          return (
            <LinkContainer key={index} to={'/' + categoryData.categoryId}>
              <Button variant='primary' size="lg">
                <div className="row justify-content-center">
                  <div className="col-sm-auto">
                    <categoryData.categoryIcon />
                  </div>
                  <div className="col-4 text-sm-start">
                    {categoryData.categoryName}
                  </div>
                </div>
              </Button>
            </LinkContainer>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Home;
