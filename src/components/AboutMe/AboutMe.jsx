import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import gehrigHeadshot from './gehrigrankin.jpg'

import './AboutMe.scss';

export const AboutMe = () => {
    return (
        <Container className="AboutMe page">
            <div className="page-header font-bungee">
                <p className="header-1">Gehrig Rankin</p>
                <p className="header-2">Full Stack Web Developer</p>
            </div>

            <Row className="about-me-content">
                <Col sm={12} md={3} className="picture-card">
                    <Row>
                        <Image src={gehrigHeadshot} rounded fluid />
                    </Row>
                    <Row>
                        <div className="information w-100">
                            <p className="text-center">Rgrankin22@gmail.com</p>
                            <p className="text-center">(703) 939-7355</p>



                            <Row className="info-icons pt-4 mx-3">
                                <Col sm={6} className="text-center">
                                    <FontAwesomeIcon className="linkedin-icon" icon={faLinkedinIn} />
                                </Col>
                                <Col sm={6} className="text-center">
                                    <FontAwesomeIcon className="github-icon" icon={faGithub} />
                                </Col>
                            </Row>

                            




                            



                            {/* <p className="header-2">LinkedIn: </p>
                            <a target="_blank" href="https://www.linkedin.com/in/gehrigrankin/">linkedin.com/in/gehrigrankin</a>

                            <p className="header-2">Github: </p>
                            <a target="_blank" href="https://github.com/gehrigrankin">github.com/gehrigrankin</a> */}
                        </div>
                    </Row>
                </Col>
                <Col xs="" className="text-card">
                    <div className="text">
                        To whom it may concern, <br /><br />

                        Full stack web developer specializing in Javascript and modern front end libraries. For the past 6 years I've been in a couple of full stack roles but ended up doing most of my contributions on the front end. As a developer I find my strengths are in my eye for page layout design and my ability to create user experiences that are simple yet effective at the same time.
                        <br />
                        <br />
                        I have a passion for web development and enjoy being part of a team that is connected and believes in the product. I am a hard worker, overachiever, team player, mentor, and a reliable source for any help you may need. Feel free to email me with any questions or inquiries you may have.

                        <br /><br />
                        Thank you for your time,<br />
                        Gehrig Rankin
                    </div>
                </Col>
            </Row>








           
        </Container>
    );
}
