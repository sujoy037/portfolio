import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
   <Container className="my-4">
      <h3>About Me</h3>
      <Card className="p-3 shadow-sm">
        <Row>
          <Col md={12}>
            <p>
              I’m a dedicated and growth-oriented <strong>Software Developer</strong> with over <strong>4 years</strong> of experience designing and developing robust web applications. I have a strong foundation in full-stack development, especially with <strong>React, Node.js</strong>, and RESTful APIs.
            </p>
            <p>
              My experience spans building scalable frontend interfaces, developing efficient backend services, and working in Agile environments. I’ve collaborated closely with cross-functional teams to deliver high-impact features and improve application performance.
            </p>
            <p>
              I’m passionate about learning new technologies, writing clean and efficient code, and continuously improving as a developer. Outside of work, I like to explore open-source contributions and follow trends in software architecture and cloud computing.
            </p>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default About
