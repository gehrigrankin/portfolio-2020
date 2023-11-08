import React from 'react';

import './Skills.scss';

export const Skills = () => {
    return (
        <div className="Skills page">
            <div className="page-header font-bungee">
                <p className="header-1">Skills</p>
            </div>
            <div className="information">
                <div className="left-side">
                    <div className="experience">
                        <p className="header-2">Experience</p>

                        <div className="job">
                            <p className="job-title">Product Developer</p>
                            <p className="company">Execute to Win <span className="date-range">(1/2021 - 07/2023)</span></p>
                            <div className="description">
                                <ul>
                                    <li>Migrated a legacy AngularJS app to modern Angular increasing code maintainability and decreasing vulnerability.</li>
                                    <li>Learned AngularJS and Angular coding languages and methodologies to develop front end components and web pages</li>
                                    <li>Drew up and implemented a plan to make the UI/UX of the site easier to navigate  for first time users</li>
                                    <li>Redesigned the UI/UX  to enhance navigation ability</li>
                                    <li>Developed new applications with ReactJS that interfaced with existing legacy applications</li>
                                    <li>Used d3.js data visualization library to create many different graphs to display a variation of data to users</li>
                                </ul>
                                <p><span className="white-font">Technologies Used:</span><br />
                                JavaScript,  Typescript, AngularJS, Modern Angular, ReactJS</p>
                            </div>
                        </div>

                        <div className="job">
                            <p className="job-title">Lead Front-End Developer/Full Stack Developer</p>
                            <p className="company">Advanced Reimbursement Solutions <span className="date-range">(12/2018 - 07/2020)</span></p>
                            <div className="description">
                                <ul>
                                    <li>First in-house developer for a medical insurance reimbursement company</li>
                                    <li>The application was built as a tool for our employees to automate part of the insurance reimbursement process and to later be pushed out to the public.</li>
                                    <li>Researched new technologies and libraries to give the company my best opinions on the direction they should go in</li>
                                    <li>Promoted to lead front end developer where I would focus on the front end of the application designing new user flows, web components, and page design mock ups</li>
                                    <li>Redesigned the UI/UX  to enhance navigation and improve visual appeal with a more modern look.</li>
                                </ul>
                                <p><span className="white-font">Technologies Used:</span><br />
                                MERN Stack, Javascript, HTML, CSS, SCSS, Bootstrap, ReactJS, Redux, ExpressJS, NodeJS, MySQL, MongoDB, Git, Agile Development, JSON, RESTful API, Test Driven Development (TDD)</p>
                            </div>
                        </div>
                        <div className="job">
                            <p className="job-title">Bootcamp Teachers Assistant</p>
                            <p className="company">Trilogy Education <span className="date-range">(05/2018 - 12/2018)</span></p>
                            <div className="description">
                                <ul>
                                    <li>Assist in teaching full stack web development and grade assignments</li>
                                    <li>Manage student projects to ensure they are completed by a certain deadline</li>
                                    <li>Developed an application to assist the instructional teams in splitting the classes into groups based on skill level</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="right-side">
                    <div className="education">
                        <p className="header-2">Education</p>

                        <div className="school">
                            <p className="school-name">University of Arizona Continuing Education</p>
                            <p className="area-of-study">Full Stack Web Development <span className="date-range">(2018)</span></p>
                            <div className="description">
                                <p>Intensive full-time boot camp covering front end and back end technologies</p>
                                <p><span className="white-font">Technologies Used:</span><br />
                            HTML5/CSS3, JavaScript, jQuery, Node.js, React.js, HandleBars, Express, Bootstrap, MySQL, MongoDB, Responsive Design, Firebase, Deployment (Heroku, Git)</p>
                            </div>
                        </div>
                        <div className="school">
                            <p className="school-name">Chandler Gilbert Community College</p>
                            <p className="area-of-study">Computer Science <span className="date-range">(2016 - 2017)</span></p>
                            <div className="description">
                                <p>GPA: 3.5</p>
                                <p><span className="white-font">Technologies Used:</span><br />
                            C++, Java</p>
                            </div>
                        </div>
                    </div>
                    <div className="technical-skills">
                        <p className="header-2">Skills</p>

                        <div className="languages">
                            <p className="skills-header">Programming Languages</p>

                            <div className="graph">
                                <div className="flex">
                                    <div className="bar" style={{ width: '90%' }}></div>
                                    <span>HTML</span>
                                </div>
                                <div className="flex">
                                    <div className="bar" style={{ width: '90%' }}></div>
                                    <span>CSS</span>
                                </div>
                                <div className="flex">
                                    <div className="bar" style={{ width: '90%' }}></div>
                                    <span>JavaScript</span>
                                </div>
                                <div className="flex">
                                    <div className="bar" style={{ width: '35%' }}></div>
                                    <span>Java</span>
                                </div>
                                <div className="flex">
                                    <div className="bar" style={{ width: '25%' }}></div>
                                    <span>C++</span>
                                </div>
                                <div className="flex">
                                    <div className="bar" style={{ width: '25%' }}></div>
                                    <span>Ruby</span>
                                </div>
                            </div>
                        </div>
                        <div className="frameworks">
                            <p className="skills-header">Frameworks & Libraries</p>

                            <div className="graph">
                                <div className="flex">
                                    <div className="bar" style={{ width: '80%' }}></div>
                                    <span>React.js</span>
                                </div>
                                <div className="flex">
                                    <div className="bar" style={{ width: '80%' }}></div>
                                    <span>Angular</span>
                                </div>
                                <div className="flex">
                                    <div className="bar" style={{ width: '75%' }}></div>
                                    <span>Express</span>
                                </div>
                                <div className="flex">
                                    <div className="bar" style={{ width: '75%' }}></div>
                                    <span>jQuery</span>
                                </div>
                                <div className="flex">
                                    <div className="bar" style={{ width: '80%' }}></div>
                                    <span>Bootstrap</span>
                                </div>
                                <div className="flex">
                                    <div className="bar" style={{ width: '80%' }}></div>
                                    <span>Bulma</span>
                                </div>
                            </div>
                        </div>
                        <div className="tools">
                            <p className="skills-header">Tools and Technologies</p>

                            <div className="graph">
                                <div className="flex">
                                    <div className="bar" style={{ width: '75%' }}></div>
                                    <span>MySQL</span>
                                </div>
                                <div className="flex">
                                    <div className="bar" style={{ width: '55%' }}></div>
                                    <span>MongoDB</span>
                                </div>
                                <div className="flex">
                                    <div className="bar" style={{ width: '70%' }}></div>
                                    <span>Redux</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
