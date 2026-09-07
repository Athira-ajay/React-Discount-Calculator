import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {

  return (
    <footer className=" footer text-white py-4">

      <Container>


        {/* Copyright */}

        <div className="text-center">

          <small>
           | © 2026 Discount Calculator. All rights reserved. |
          </small>

        </div>

      </Container>

    </footer>
  )
}

export default Footer