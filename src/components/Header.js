import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

const Header = () => {
  return (
    <Container className="text-center my-4">
      <Row>
        <Col>
          <Image src={process.env.PUBLIC_URL + "/images/profile.jpg"} roundedCircle width={150} />
          <h1 className="mt-3">Sujoy Halsana</h1>
          <p>Software Developer | Full Stack Developer</p>
          <p>Email: sujoy037@gmail.com | Phone: +91 7908937745</p>
          <p>Address:Sodepur Ghola Pubanchal  | City: Kolkata | State:West Bengal | Pin:700111</p>
          <Button variant="primary" href={process.env.PUBLIC_URL + "/images/resume.pdf"} download>
            Download Resume
          </Button>

        </Col>
      </Row>
    </Container>
  )
}

export default Header
