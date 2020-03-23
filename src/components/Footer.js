import React from 'react';
import Container from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import  Link  from 'react-router-dom/Link';
import ScrollToTop from './ScrollToTop';

function footer(){
    
    return (
        
        <footer className="mt-5 b-background">
            <Container fluid={true}>
                {/* ScrollToTop is a component makes you scroll top of the mounted page */}
                <ScrollToTop />

                <Row className="border-top justify-content-between p-3">

                    <Col className="p-0 " md={3} sm={12}>
                        <Link  className="text-info" to="/">PuniPuni Studios Inc.</Link>
                    </Col>
                    
                    <Col > <h4> <a className="a" href="https://www.facebook.com/punipunistudios" 
                target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square"></i></a>
                <a className="a p-1" href="https://www.instagram.com/punipunistudios_/"  
                target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                </h4></Col>
                    <Col className="p-0 text-center" md={3} sm={12}>                       
                    <Link className="text-info" to="/privacy">Privacy Policy</Link>       
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={5}>
                    © 2019-2020 PuniPuni Studios. All rights reserved.
                    </Col>
                </Row>
            </Container>

        </footer>
    );
}

export default footer;