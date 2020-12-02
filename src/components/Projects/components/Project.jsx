import React from 'react'
import { Button } from 'react-bootstrap';

export const Project = (props) => {
    const displayBtn = () => {
        if(props.btnTxt && props.btnSrc) {
            return (
                <Button
                    className="launch-btn"
                    target="_blank"
                    href={props.btnSrc}
                >
                    {props.btnTxt}
                </Button>
            )
        } else return null
    }

    return (
        <div className="Project">
            <div className="text">
                <p className="title">{props.title}</p>
                <p className="description">{props.description}</p>
                {displayBtn()}
            </div>
            <img src={props.src} alt={props.title} />
        </div>
    )
}

export default Project;
