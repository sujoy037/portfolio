import React from 'react'
import { Container, Card } from 'react-bootstrap';

const Education = () => {
 const educationList = [
    {
      degree: "Master in Computer Science And Engineering",
      school: "Narula Institue Of Technolgy",
      period: "2009 - 2011",
      details: "GPA: 8.05/10.0"
    },
    {
      degree: "Bachelor of Engineering in Computer Science And Engineering ",
      school: "Dr B C Roy Engineering College Durgapur",
      period: "2003 - 2007",
      details: "GPA: 6.98/10.0"
    }
  ];

  return (
    <Container className="my-4">
      <h3>Education</h3>
      {educationList.map((edu, idx) => (
        <Card key={idx} className="mb-3">
          <Card.Body>
            <Card.Title>{edu.degree}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {edu.school} | {edu.period}
            </Card.Subtitle>
            <Card.Text>{edu.details}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Education
