import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-bulma-components/lib/components/icon';

import './ContactMe.scss';

export const ContactMe = () => {
    return (
        <div className="ContactMe page">
            <div className="page-header">
                <p className="header-1">Contact Me</p>
            </div>
            <div className="container">
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
                <div className="email-me">
                    <form action="mailto:rgrankin22@gmail.com" method="POST" encType="text/plain">
                        <label class="label">Name</label>
                        <div class="input-container">
                            <Icon>
                                <FontAwesomeIcon icon={faUser} />
                            </Icon>
                            <input type="text" placeholder="Jane Doe" />
                        </div>

                        <label class="label">Company</label>
                        <div class="input-container">
                            <Icon>
                                <FontAwesomeIcon icon={faAddressBook} />
                            </Icon>
                            <input type="text" placeholder="ex. Trilogy Education" />
                        </div>

                        <label class="label">Message</label>
                        <div className="input-container">
                            <textarea class="textarea" placeholder="Textarea"></textarea>
                        </div>

                        {/* 
                            

                            

                            
                            

                            <button class="button is-link has-background-primary" type="submit">Submit</button> */}
                    </form>
                </div>
            </div>
        </div>
    );
}
