import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from './components/Project'

import azcImg from './images/azcImage.png';
import skellyImg from './images/Skelly.png';
import groupGenImg from './images/Group-gen.png';
import iionsLogo from './images/IIONS_login_logo.png';

import './Projects.scss';

export const Projects = () => {
    const descriptions = {
        azc: `Full stack web scraping application using MongoDB, Express, React, 
            Node.js, and User Authentication. This app scrapes www.AZCentral.com and 
            stores news articles to your profile and into a Mongo Database.`,
        iions: `IIONS is a web application used by in-house analysts to automate
                the process of medical insurance rembursement. My job while I was there
                was to recreate the front end. Unfortunatley it is a private website. `,
        skelly: `Skelly is an online tool that allows you to customize a skeleton for 
                various project types. It uses various NPM packages to allow a user to 
                customize the start of a project through a web interface. The structure 
                is then delivered to the user as a zip file. It is not hosted anymore.`,
        groupGen: `The Skill-based group generator. This application was developed to 
                    assist Trilogy Instructors in equally skilled group generation. 
                    A user interface is currently being developed in React and will 
                    have the ability for students to enter their own name and skill level.`,

    }

    return (
        <div className="Projects page">
            <div className="page-header font-bungee">
                <p className="header-1">Projects</p>
            </div>
            <div className="projects py-5">
                <Row>
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
                </Row>
            </div>
        </div>
    );
}
