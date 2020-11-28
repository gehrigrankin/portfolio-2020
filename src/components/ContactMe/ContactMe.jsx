import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-bulma-components/lib/components/icon';

import { Container, Row, Col, FormControl, Button } from 'react-bootstrap';

import './ContactMe.scss';

class ContactMe extends React.Component {
    state = {
        email: '',
        comapany: '',
        message: ''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: event.target.value });
    }

    getEmailAction = () => {
        const { name, company, message } = this.state;

        let subjectStr = this.state.name + ' from ' + this.state.company;
        subjectStr.split(' ').join('%20');

        return `mailto:rgrankin22@gmail.com?Subject=${subjectStr}&body=${message}`
    }

    render() {
        const emailAction = this.getEmailAction()
        return (
            <div className="ContactMe page">
                <div className="page-header">
                    <p className="header-1">Contact Me</p>
                </div>
                <Container>
                    <Row className="h-75 align-items-center">
                        <Col>
                            <div className="information">
                                <p className="header-2">Email: </p>
                                <p>Rgrankin22@gmail.com</p>

                                <p className="header-2">Phone: </p>
                                <p>(703) 939 - 7355</p>

                                <p className="header-2">LinkedIn: </p>
                                <a target="_blank" href="https://www.linkedin.com/in/gehrigrankin/">linkedin.com/in/gehrigrankin</a>

                                <p className="header-2">Github: </p>
                                <a target="_blank" href="https://github.com/gehrigrankin">github.com/gehrigrankin</a>
                            </div>
                        </Col>
                        <Col>
                            <div className="email-me">

                                <label class="label">Name</label>
                                <div class="input-container">
                                    <Icon>
                                        <FontAwesomeIcon icon={faUser} />
                                    </Icon>
                                    <input name="name" type="text" onChange={this.handleChange} placeholder="Jane Doe" />
                                </div>

                                <label class="label">Company</label>
                                <div class="input-container">
                                    <Icon>
                                        <FontAwesomeIcon icon={faAddressBook} />
                                    </Icon>
                                    <input name="company" type="text" onChange={this.handleChange} placeholder="ex. Trilogy Education" />
                                </div>
                                    <label class="label">Message</label>
                                    <FormControl name="message" onChange={this.handleChange} as="textarea" aria-label="With textarea" rows={3} />

                                <form action={emailAction} method="POST">
                                    <Button className="mt-3" block type="submit">Submit</Button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ContactMe;
