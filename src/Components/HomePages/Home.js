import React from 'react';
import { NavLink } from 'react-router-dom';

// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// CSS
import './Home.css'

const MainPage = (WrappedComponent) => {
    function Home(props) {
        return (
            <div>
                <Navbar className="navbar">
                    <Container>
                        <Navbar.Brand style={{ color: "white" }}>
                            Livelife
                            <i className="fa-solid fa-leaf"></i>
                        </Navbar.Brand>
                        <Nav className='nav-link'>
                            <NavLink to='/' className='nav-li'>Login</NavLink>
                            <i className="fa-solid fa-grip-lines-vertical fa-xl"></i>
                            <NavLink to='/signin' className='nav-li'>Signin</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                <div className='main-container'>
                    <div className="details">
                        <h2>Livelife</h2>
                        <p>We are a global health and wellness community born to support you in living your best life. For over 40
                            years and in more than 90 countries, we've empowered millions of people to make real changes to their
                            lives with our science-backed products, the support of a coach - what we call a Livelife Independent
                            Associate - and the opportunity to build a business. And we've just getting started.</p>
                        <p>To us, the best lives are balanced lives. Through our Livelife Independent Associates, who faster
                            community, personal growth and business opportunities to help you thrive, we offer a wide range of
                            products designed to help you meet your nutritional needs and reach your goals. You bring the will to
                            get started, and we'll help you every step of the way.</p><br />
                        <h3>2023 at a glance</h3>
                        <p>Named <q>The #1 brand in the world in meal replacement and protein supplements combined</q> and <q>The #1
                            brand in the world in weight management.</q></p>
                    </div>
                    <div className='form-card'>
                        <WrappedComponent {...props} />
                    </div>
                </div>
            </div>
        );
    }
    return Home;
}

export default MainPage;