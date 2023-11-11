import React from 'react';
import { useState } from 'react';
import { Row, Col, Carousel, Image } from 'react-bootstrap';

import messengerImg from './images/messenger-pic.PNG';
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
                            src={messengerImg}
                            alt="Real Time Messenger screenshot"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={99999999} className="h-100">
                        <Image
                            className="d-block m-auto"
                            src={azcImg}
                            alt="AZ Central Scraper screenshot"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={99999999} className="h-100">
                        <Image
                            className="d-block m-auto"
                            src={iionsLogo}
                            alt="IIONS screenshot"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={99999999} className="h-100">
                        <Image
                            className="d-block m-auto"
                            src={skellyImg}
                            alt="Skelly screenshot"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={99999999} className="h-100">
                        <Image
                            className="d-block m-auto"
                            src={groupGenImg}
                            alt="Group Generator screenshot"
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
                            <p className="monospace grey-font mr-5">
                                Link to codebase:  <a target="_blank" href={`https://${ProjectsArr[index].githubLink}`}  className="secondary-red-font">{ProjectsArr[index].githubLink}</a>
                            </p>
                        : null}

                        {ProjectsArr[index].webpageLink ? 
                            <p className="monospace grey-font">
                                Deployed Webpage: <a href={ProjectsArr[index].webpageLink} target="_blank" className="secondary-red-font">{ProjectsArr[index].webpageLink}</a>
                            </p>
                            : null}

                        <p className="mt-4">{ProjectsArr[index].description}</p>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
