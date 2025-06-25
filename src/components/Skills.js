import React from 'react'
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';

const Skills = () => {
  const skillGroups = {
    "Frontend": ["React", "Redux", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
    "Backend": ["Node.js", "Express", "Python", "Flask", "Java", "Spring Boot"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Oracle"],
    "DevOps & Tools": [ "Git", "CI/CD"],
    "API Testing & Documentation": ["Postman", "Swagger"]
  };

  return (
    <Container className="my-4">
      <h3>Skills</h3>
      <Row>
        {Object.entries(skillGroups).map(([category, skills], idx) => (
          <Col key={idx} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{category}</Card.Title>
                <div className="d-flex flex-wrap">
                  {skills.map((skill, i) => (
                    <Badge key={i} bg="secondary" className="me-2 mb-2 p-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
