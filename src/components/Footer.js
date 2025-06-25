import React from 'react'
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
   <footer className="bg-dark text-white mt-5 py-3">
      <Container className="text-center">
        <p>© {new Date().getFullYear()} Sujoy Halsana. All rights reserved.</p>
        <p>
          <a href="https://github.com/sujoy037" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            GitHub
          </a>
          <a href="https://linkedin.com/in/sujoy-halsana" target="_blank" rel="noopener noreferrer" className="text-white">
            LinkedIn
          </a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer
