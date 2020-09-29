import React from 'react';
import {Navbar, Nav }from 'react-bootstrap';

export default function NavbarComponent() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="https://github.com/mezidia" target="_blank">Mezidia</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="https://github.com/mezidia/mezidia-jobs" target="_blank">Repository</Nav.Link>
        <Nav.Link href="https://flask-jobs.herokuapp.com/" target="_blank" >Jobs</Nav.Link>
        <Nav.Link href="mailto:mezgoodle@gmail.com">Propose a vacancy</Nav.Link>
      </Nav>
    </Navbar>
  )
}
