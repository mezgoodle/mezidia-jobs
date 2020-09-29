import React from 'react';
import { Nav } from 'react-bootstrap';

export default function FooterComponent() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="https://uk.reactjs.org/" target="_blank">React</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://v5.getbootstrap.com/" target="_blank">Bootstrap</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://react-bootstrap.github.io/" target="_blank">React-Bootstrap</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home">Back to top</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/mezgoodle" target="_blank" className="text-muted">@mezgoodle</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}