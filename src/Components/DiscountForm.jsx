import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'


function DiscountForm({
  amount,
  setAmount,
  discount,
  setDiscount,
  calculateDiscount,
  resetCalculator,
  error
}) {
  

  return (
    <>

      <Container className="form py-5 text-center" >

        <Row className="justify-content-center">

          <Col md={8} lg={6} xl={5}>

            <Card className="shadow border-0 bg-light">

              <Card.Body className="p-4 p-md-5">

                 {/* Discount Image */}

                  <div className="text-center mb-3">

                    <img
                      src='https://static.vecteezy.com/system/resources/previews/025/883/898/original/3d-discount-icon-rendered-isolated-on-the-transparent-background-png.png'
                      alt="Discount"
                      width="85"
                      height="85"
                    />

                  </div>

                {/* Heading */}

                <h2 className="text-center mb-2 fw-bold">
                  Discount Calculator
                </h2>

                <p className="text-center text-muted mb-5">
                  Calculate your discount and final price easily
                </p>

                {/* Original Price */}

                <Form.Group className="mb-3">

                  <Form.Label className='fw-bold'>
                    Amount (₹)
                  </Form.Label>

                  <Form.Control 
                    type="number"
                    placeholder="Enter original price"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />

                </Form.Group>


                {/* Discount Percentage */}

                <Form.Group className="mb-3">

                  <Form.Label className='fw-bold'>
                    Discount Percentage (%)
                  </Form.Label>

                  <Form.Control
                    type="number"
                    placeholder="Enter discount percentage"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />

                </Form.Group>

                {/* Error Message */}

                {error && (
                  <div className="alert alert-danger text-center">
                    {error}
                  </div>
                )}


                {/* Buttons */}

                <div className="d-flex justify-content-center align-items-center  gap-4 mt-4">

                  <Button variant="danger" size="md" onClick={calculateDiscount} className='fw-bold'>
                    Calculate Discount
                  </Button>

                  <Button
                  variant="outline-secondary"
                  size="md" onClick={resetCalculator} className='fw-bold'>
                  Reset
                </Button>

                </div>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>

    </>
  )
}

export default DiscountForm