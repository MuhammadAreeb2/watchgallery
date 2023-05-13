import { Margin } from '@mui/icons-material';
import * as React from 'react';
import { Button } from "@mui/material"
import Cardz1 from "./cardz1"
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import product1 from "./product(1).jpg"
import TimerIcon from '@mui/icons-material/Timer';

function Products() {
  return (
    <>
      <div className='contianer'>
        <h1 className='mt-5  text-center  border-bottom-0'>
          Our Services
        </h1>
        <h6 className='mt-3  text-center  border-bottom-0' >
          Popular Product   <TimerIcon />



        </h6>
        {/* <Button  className='padding-left-5' >
         More Product
    </Button> */}

        <Container>
          <Row style={{ justifyContent: "space-center " }}   >
            <Col sm={12} md={6} lg={3} xl={3} >
              <Cardz1 /></Col>
            <Col sm={12} md={6} lg={3} xl={3}>
              <Cardz1 /></Col>
            <Col sm={12} md={6} lg={3} xl={3}>
              <Cardz1 /></Col>
            <Col sm={12} md={6} lg={3} xl={3}>
              <Cardz1 /></Col>

          </Row>
        </Container>

      </div>




    </>
  )

}

export default Products;