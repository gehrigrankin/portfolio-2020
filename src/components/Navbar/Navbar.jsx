import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faFileCode, faChartBar, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-bulma-components/lib/components/icon';

import './Navbar.scss';


export class NavbarContainer extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="icon-container">
                    <div onClick={() => this.props.setActiveTab(1)} className={this.props.activeTab === 1 ? 'about-me active' : 'about-me'}>
                        <Icon>
                            <FontAwesomeIcon size="2x" icon={faAddressCard} />
                        </Icon>
                    </div>
                    <div onClick={() => this.props.setActiveTab(2)} className={this.props.activeTab === 2 ? 'projects active' : 'projects'}>
                       <Icon>
                            <FontAwesomeIcon size="2x" icon={faFileCode} />
                        </Icon>
                    </div>
                    <div onClick={() => this.props.setActiveTab(3)} className={this.props.activeTab === 3 ? 'skills active' : 'skills'}>
                        <Icon>
                            <FontAwesomeIcon size="2x" icon={faChartBar} />
                        </Icon>
                    </div>
                    <div onClick={() => this.props.setActiveTab(4)} className={this.props.activeTab === 4 ? 'contact active' : 'contact'}>
                        <Icon>
                            <FontAwesomeIcon size="2x" icon={faEnvelope} />
                        </Icon>
                    </div>
                </div>
            </div>
        )
    }
}

export const Navbar = NavbarContainer;