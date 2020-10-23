import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faFileCode, faChartBar, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Navbar.scss';

export class NavbarContainer extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="icon-tabs">
                    <div onClick={() => this.props.setActiveTab(1)} className={this.props.activeTab === 1 ? 'about-me active' : 'about-me'}>
                        <FontAwesomeIcon size="3x" icon={faAddressCard} />
                    </div>
                    <div onClick={() => {
                        console.log('here');
                        this.props.setActiveTab(2)}} className={this.props.activeTab === 2 ? 'projects active' : 'projects'}>
                        <FontAwesomeIcon size="3x" icon={faFileCode} />
                    </div>
                    <div onClick={() => this.props.setActiveTab(3)} className={this.props.activeTab === 3 ? 'skills active' : 'skills'}>
                        <FontAwesomeIcon size="3x" icon={faChartBar} />
                    </div>
                    <div onClick={() => this.props.setActiveTab(4)} className={this.props.activeTab === 4 ? 'contact active' : 'contact'}>
                        <FontAwesomeIcon size="3x" icon={faEnvelope} />
                    </div>
                </div>
            </div>
        )
    }
}

export const Navbar = NavbarContainer;