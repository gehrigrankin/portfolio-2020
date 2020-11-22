import React from 'react';

import './Skills.scss';

export const Skills = () => {
    return (
        <div className="Skills page">
            <div className="page-header font-bungee">
                <p className="header-1">Skills</p>
            </div>
            <div className="information">
                <div className="experience">
                    <p className="header-2">Experience</p>

                    <div className="job">
                        <p className="job-title">Lead Front-End Developer/Full Stack Developer</p>
                        <p className="company">Advanced Reimbursement Solutions <span className="date-range">(12/2018 - 07/2020)</span></p>
                        <div className="description">
                            <ul>
                                <li>Assist in teaching full stack web development and grade assignments</li>
                                <li>Manage student projects to ensure they are completed by a certain deadline</li>
                                <li>Developed an application to assist the instructional teams in splitting the classes into groups based on skill level</li>
                            </ul>
                        </div>
                    </div>
                    <div className="job">
                        <p className="job-title">Bootcamp Teachers Assistant</p>
                        <p className="company">Trilogy Education <span className="date-range">(05/2018 - 12/2018)</span></p>
                        <div className="description">
                            <p>As the first in-house developer for a medical insurance reimbursement company, I went through a lot of changes in technology systems and often had to research new technologies and libraries to give the company my best opinions on the direction they should go in. Our application was built as a tool for our employees to automate part of the insurance reimbursement process and to later be pushed out to the public. In the last 1.5 years I worked there I focused on the front end of the application designing new flows, web components, and overall designs.</p>
                            <ul>
                                <li>Assist in teaching full stack web development and grade assignments</li>
                                <li>Manage student projects to ensure they are completed by a certain deadline</li>
                                <li>Developed an application to assist the instructional teams in splitting the classes into groups based on skill level</li>
                            </ul>
                            <p>Technologies Used:<br />
                                MERN Stack, Javascript, HTML, CSS, SCSS, Bootstrap, ReactJS, Redux, ExpressJS, NodeJS, MySQL, MongoDB, Git, Agile Development, JSON, RESTful API, Test Driven Development (TDD)</p>
                        </div>
                    </div>
                </div>
                <div className="education">
                    <p className="header-2">Education</p>

                    <div className="school">
                        <p className="school-name">University of Arizona Continuing Education</p>
                        <p className="area-of-study">Full Stack Web Development <span className="date-range">(2018)</span></p>
                        <div className="description">
                            <p>Intensive full-time boot camp covering front end and back end technologies</p>
                            <p>Technologies Used:<br />
                            HTML5/CSS3, JavaScript, jQuery, Node.js, React.js, HandleBars, Express, Bootstrap, MySQL, MongoDB, Responsive Design, Firebase, Deployment (Heroku, Git)</p>
                        </div>
                    </div>
                    <div className="school">
                        <p className="school-name">Chandler Gilbert Community College</p>
                        <p className="area-of-study">Computer Science <span className="date-range">(2016 - 2017)</span></p>
                        <div className="description">
                            <p>GPA: 3.5</p>
                            <p>Technologies Used:<br />
                            C++, Java</p>
                        </div>
                    </div>
                </div>
                <div className="technical-skills">
                    <p className="header-2">Skills</p>

                    <div className="languages">
                        <p>Programming Languages</p>

                        <div className="graph">
                            <div className="flex">
                                <div className="bar" style={{width: '60%'}}></div>
                                <span>HTML</span>
                            </div>
                            <div className="flex">
                                <div className="bar" style={{width: '65%'}}></div>
                                <span>CSS</span>
                            </div>
                            <div className="flex">
                                <div className="bar" style={{width: '55%'}}></div>
                                <span>JavaScript</span>
                            </div>
                            <div className="flex">
                                <div className="bar" style={{width: '35%'}}></div>
                                <span>Java</span>
                            </div>
                            <div className="flex">
                                <div className="bar" style={{width: '25%'}}></div>
                                <span>C++</span>
                            </div>
                            <div className="flex">
                                <div className="bar" style={{width: '25%'}}></div>
                                <span>Ruby</span>
                            </div>
                        </div>
                    </div>
                    <div className="frameworks">
                        <p>Frameworks</p>

                        <div className="graph">
                            <div className="flex">
                                <div className="bar" style={{width: '45%'}}></div>
                                <span>React</span>
                            </div>
                            <div className="flex">
                                <div className="bar" style={{width: '55%'}}></div>
                                <span>Express</span>
                            </div>
                            <div className="flex">
                                <div className="bar" style={{width: '65%'}}></div>
                                <span>jQuery</span>
                            </div>
                            <div className="flex">
                                <div className="bar" style={{width: '50%'}}></div>
                                <span>Handelbars</span>
                            </div>
                            <div className="flex">
                                <div className="bar" style={{width: '65%'}}></div>
                                <span>Bootstrap</span>
                            </div>
                            <div className="flex">
                                <div className="bar" style={{width: '65%'}}></div>
                                <span>Bulma</span>
                            </div>
                        </div>
                    </div>
                    <div className="tools">
                        <p>Tools and Technologies</p>

                        <div className="graph">
                            <div className="flex">
                                <div className="bar" style={{width: '65%'}}></div>
                                <span>MySQL</span>
                            </div>
                            <div className="flex">
                                <div className="bar" style={{width: '65%'}}></div>
                                <span>MongoDB</span>
                            </div>
                            <div className="flex">
                                <div className="bar" style={{width: '60%'}}></div>
                                <span>Firebase</span>
                            </div>
                            <div className="flex">
                                <div className="bar" style={{width: '45%'}}></div>
                                <span>Redux</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
