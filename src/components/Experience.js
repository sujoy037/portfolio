import React from 'react'
import { Container, Card } from 'react-bootstrap';

const Experience = () => {
  const jobs = [
    {
      company: "Directorate Of Commercial Taxes",
      role: "Software Developer",
      period: "2022 - Present",
      desc: `Designed and developed RESTful APIs using Spring Boot for internal applications. 
Implemented inventory modules using React and Node.js, and built custom Oracle Forms and reports 
for data-driven workflows.`
    },
    {
      company: "West Bengal Pollution Control Board",
      role: "Software Developer",
      period: "2020 - 2022",
      desc: `Designed and developed a complete RTI (Right to Information) application using Node.js and React, 
covering both frontend and backend logic. Wrote optimized SQL scripts for data migration and reporting.`
    }
  ];

  return (
    <Container className="my-4">
      <h3>Professional Experience</h3>
      {jobs.map((job, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{job.role} at {job.company}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{job.period}</Card.Subtitle>
            <Card.Text>{job.desc}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Experience
