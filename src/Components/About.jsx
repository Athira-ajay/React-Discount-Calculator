import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function About() {

  return (
    <section id="about" className="py-5 mt-5 mb-5">

      <Container>

        <Row className="justify-content-center">

          <Col md={10} lg={8}>

            <Card className="border-0 shadow-sm">

              <Card.Body className="p-4 p-md-5 text-center">

                <img
                      src='https://cdn3d.iconscout.com/3d/premium/thumb/calculator-coin-dollar-9538727-7706520.png'
                      alt="Discount"
                      width="85"
                      height="85"
                    />

                <h2 className="fw-bold mb-3">
                  About Discount-Calculator
                </h2>

                <p className="text-muted mb-0">
                  Discount Calculator is a simple and easy-to-use tool
                  that helps you <br></br>calculate your discount, savings, and
                  final price instantly.
                </p>

                <p className="text-muted mt-3 mb-0">
                  Just enter the original price and discount percentage,
                  and the calculator will show you <br></br>how much you save and
                  the final price after applying the discount.
                </p>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>

    </section>
  )
}

export default About