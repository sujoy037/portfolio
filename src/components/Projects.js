import React from 'react'
import { Container, Card, Button ,Row,Col} from 'react-bootstrap';

const Projects = () => {
  const projectList = [
    {
      title: " Bus TicketBooking System",
      description: "The Bus Ticket Booking System is a full-stack web application designed to allow users to search for buses, check seat availability, book tickets, and manage their bookings. It includes both admin and user functionalities.",
      techStack: "React,Node.js, MongoDB",
      link: "",
      github: "https://github.com/sujoy037/TicketBookingSystem",
      color: "primary"
    },
    {
      title: "Online Movie Show Listing System",
      description: "The Online Movie Show Listing System is a web application designed to display information about currently running and upcoming movies in various cinemas.",
      techStack: "React,Node.js, MongoDB",
      link: "",
      github: "https://github.com/sujoy037/capital-movie-source-code",
      color: "success"
    },
    {
      title: "Inventory Management System",
      description: "The Inventory Management System is a full-stack application designed to manage and track product inventory for businesses. It allows users to add, update, delete, and monitor stock levels in real time with an intuitive UI and secure backend.",
      techStack: "React,Node.js,Postgres",
      link: "",
      github: "https://github.com/sujoy037/asset-management-system",
      color: "warning"
    },
    {
      title: "WhatsApp chatbot",
      description: "This chatbot REST API will handle user messages, process chatbot responses, manage chat sessions, and optionally handle user profiles or conversation history",
      techStack: "Spring boot,oracle",
      link: "",
      github: "https://github.com/sujoy037/ChatBotApi",
      color: "success"
    }
  ];

 return (
    <Container className="my-5">
      <h3 className="mb-4">Projects</h3>
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {projectList.map((proj, idx) => (
          <Col key={idx}>
            <Card bg={proj.color} text="white" className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Subtitle className="mb-2">
                  <em>{proj.techStack}</em>
                </Card.Subtitle>
                <Card.Text>{proj.description}</Card.Text>
                {proj.link && (
                  <Button variant="light" size="sm" href={proj.link} target="_blank" className="me-2">
                    Live Demo
                  </Button>
                )}
                {proj.github && (
                  <Button variant="outline-light" size="sm" href={proj.github} target="_blank">
                    GitHub
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects
