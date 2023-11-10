import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import Project from './components/Project'

import azcImg from './images/azcImage.png';
import skellyImg from './images/Skelly.png';
import groupGenImg from './images/Group-gen.png';
import iionsLogo from './images/IIONS_login_logo.png';

import ProjectsArr from './projects.json'

import './Projects.scss';

export const Projects = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <div className="Projects page">
            <div className="page-header font-bungee">
                <p className="header-1">Projects</p>
            </div>
            <div className="projects py-5">
                <Carousel style={{height: '45vh'}} activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item interval={99999999} className="h-100">
                        <Image
                            className="d-block m-auto"
                            src={azcImg}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={99999999} className="h-100">
                        <Image
                            className="d-block m-auto"
                            src={iionsLogo}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={99999999} className="h-100">
                        <Image
                            className="d-block m-auto"
                            src={skellyImg}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={99999999} className="h-100">
                        <Image
                            className="d-block m-auto"
                            src={groupGenImg}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <Row>
                    <Col xl={{ span: 8, offset: 2 }}>
                    <div className="project-details">
                        <h1 className="text-center white-font">{ProjectsArr[index].projectName}</h1>

                        <p className="header-2 primary-red-font mb-0">technologies used:</p>
                        <p className="header-3 monospace mb-3">{ProjectsArr[index].techUsed}</p>

                        {ProjectsArr[index].githubLink ? 
                            <span className="monospace grey-font mr-5">
                                Link to codebase:  <a className="secondary-red-font">{ProjectsArr[index].githubLink}</a>
                            </span>
                        : null}

                        {ProjectsArr[index].webpageLink ? 
                            <span className="monospace grey-font ml-5">
                                Deployed Webpage: <a className="secondary-red-font">{ProjectsArr[index].webpageLink}</a>
                            </span>
                            : null}
                        
                       
                        

                        <p className="mt-4">{ProjectsArr[index].description}</p>
                    </div>
                    </Col>
                </Row>
                
                {/* <Row>
                    <Col className="mt-3" md={12} lg={6} xl={4}>
                        <Project
                            title="AZ Central Scraper"
                            description={descriptions.azc}
                            src={azcImg}
                            btnTxt="Launch"
                            btnSrc="https://still-brook-83736.herokuapp.com/"
                        />
                    </Col>
                    <Col className="mt-3" md={12} lg={6} xl={4}>
                        <Project
                            title="IIONS"
                            description={descriptions.iions}
                            src={iionsLogo}
                        />
                    </Col>
                    <Col className="mt-3" md={12} lg={6} xl={4}>
                        <Project
                            title="Skelly"
                            description={descriptions.skelly}
                            src={skellyImg}
                            btnTxt="Launch"
                            btnSrc="https://github.com/ivme83/skeletor"
                        />
                    </Col>
                    <Col className="mt-3" md={12} lg={6} xl={4}>
                        <Project
                            title="Group Generation"
                            description={descriptions.groupGen}
                            src={groupGenImg}
                            btnTxt="Launch"
                            btnSrc="https://still-brook-83736.herokuapp.com/"
                        />
                    </Col>
                </Row> */}
            </div>
        </div>
    );
}
