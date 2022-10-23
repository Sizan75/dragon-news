import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import RightSideNav from '../RightSideNav/RightSideNav';

const Header = () => {
  const {user, logOut}=useContext(AuthContext)
  const handleLogOut =() =>{
    logOut()
    .then((result) => {
      const user= result.user;
    console.log(user)  
    }).catch((error) => {
      console.error(error) 
      });
  }
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><Link to='/'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              
              {
                user?.uid ? 
                <>
                 <span>{user?.displayName}</span>
                 <Button className='ms-2' onClick={handleLogOut} variant="outline-dark">LogOut</Button>  
                </> :
                <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                </> 
              }
              
              
              </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? <Image
            roundedCircle
                className='me-2'
                src={user?.photoURL}
                style={{height:'30px'}}>
            </Image> : <FaUser></FaUser>}
            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
       <RightSideNav></RightSideNav>
    </div>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>

        </div>
    );
};

export default Header;