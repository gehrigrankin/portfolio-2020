import React from 'react';

import './ContactMe.scss';

export const ContactMe = () => {
    return (
        <div className="ContactMe page">
            <div className="page-header font-bungee">
                <p className="header-1">Contact Me</p>

                <div className="container">
                    <div className="information">
                        <p>Email: </p>
                        <p>Rgrankin22@gmail.com</p>

                        <p>Phone: </p>
                        <p>(703) 939 - 7355</p>

                        <p>Email: </p>
                        <p>Rgrankin22@gmail.com</p>

                        <p>LinkedIn: </p>
                        <a target="_blank" href="https://www.linkedin.com/in/gehrigrankin/">linkedin.com/in/gehrigrankin</a>

                        <p>LinkedIn: </p>
                        <a target="_blank" href="https://github.com/gehrigrankin">github.com/gehrigrankin</a>
                    </div>
                    <div className="email-me">
                        <form action="mailto:rgrankin22@gmail.com" method="POST" enctype="text/plain">
                            {/* <label class="label">Name</label>
                            <div class="control has-icons-left">
                                <input class="input" type="text" placeholder="Jane Doe" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>

                            <label class="label">Company</label>
                            <div class="control has-icons-left">
                                <input class="input" placeholder="ex. Trilogy Education" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-address-book"></i>
                                </span>
                            </div>

                            <label class="label">Message</label>
                            <div class="control">
                                <textarea class="textarea" placeholder="Textarea"></textarea>
                            </div>

                            <button class="button is-link has-background-primary" type="submit">Submit</button> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
