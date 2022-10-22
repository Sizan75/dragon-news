import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header/Header';
import LeftSideNav from './Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from './Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
          <Container>
           <Row>
           <Col lg='2' className='d-none d-lg-block'>
            <RightSideNav></RightSideNav>
            </Col>
            <Col lg='7'>
            <Outlet></Outlet>
            </Col>
            <Col lg='3'>
                <LeftSideNav></LeftSideNav>
            </Col>
           </Row>
          </Container>
          <Footer></Footer>
        </div>
    );
};

export default Main;