import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function ResultCard({
  amount,
  discount,
  discountAmount,
  finalPrice
}) {


  return (
    <Container className="pb-5" id="result">

      <Row className="justify-content-center">

        <Col md={10} lg={8}>

          <Card className="shadow border-0 result-card bg-light">

            <Card.Body className="p-4 p-md-5">

              {/* Heading */}

              <div className="text-center mb-4">

                <h2 className="fw-bold mb-2">Your Savings</h2>

                <p className="text-muted mb-0">Here's a summary of your discount</p>

              </div>


              <Row className="align-items-center">

                {/* LEFT SIDE - RESULTS */}

                <Col md={6} className="mb-4 mb-md-0">

                  <div className="result-item">
                    <span>Original Amount</span>
                    <strong>₹{Number(amount || 0).toFixed(2)}</strong>
                  </div>

                  <div className="result-item">
                    <span>Discount</span>
                    <strong>₹{Number(discountAmount || 0).toFixed(2)}</strong>
                  </div>

                  <div className="result-item">
                    <span>You Save</span>
                    <strong className="text-danger">
                      ₹{Number(discountAmount || 0).toFixed(2)}
                    </strong>
                  </div>

                  <hr />

                  <div className="final-result">

                    <div>
                      <small className="text-muted">Final Price</small>

                      <h3 className="fw-bold mb-0">₹{Number(finalPrice || 0).toFixed(2)}</h3>
                    </div>

                  </div>

                </Col>


                {/* RIGHT SIDE - PIE CHART */}

                <Col md={6}>

                  <div className="text-center">

                    <h5 className="fw-bold mb-3">Price Breakdown</h5>

                    <div className="pie-chart mx-auto"

                      style={{
                          background: `conic-gradient(
                            #e63946 ${Number(discount || 0)}%,
                            #e9ecef ${Number(discount || 0)}%
                          )`
                        }}
                    >

                      <div className="pie-center">
                        <strong>{Number(discount || 0)}%</strong>
                        <small>Saved</small>
                      </div>

                    </div>


                    {/* Legend */}

                    <div className="d-flex justify-content-center gap-4 mt-4">

                      <div>
                        <span className="legend-box original"></span>
                        Original Price
                      </div>

                      <div>
                        <span className="legend-box discount"></span>
                        Discount
                      </div>

                    </div>

                  </div>

                </Col>

              </Row>

            </Card.Body>

          </Card>

        </Col>

      </Row>

    </Container>
  )
}

export default ResultCard