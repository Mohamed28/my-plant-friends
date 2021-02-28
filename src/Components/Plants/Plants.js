import React from 'react'
import Plant from '../Plant/Plant'

import picksImage from "./Images/pick.png";
import arrowDnImage from '../../Images/Icons/arrow-up.svg'

import "../Plants/Plants.scss"

class Plants extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="plants" className="plants">
                <div className="plants__header">
                    <img className="plants__illustration" src={picksImage} alt="Hand holding a plant" />
                    <h2>Our picks for you</h2>
                </div>

                <div className="plants__content">
                    {
                        this.props.plants.map((plant) => {
                            return <Plant key={plant.id} plant={plant} />
                        })
                    }
                </div>

                <div className="plants__footer">
                    <a href="#selection-results">
                        <span><img src={arrowDnImage} alt="Arrow Up" /></span>
                        <span>back to the top</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Plants;