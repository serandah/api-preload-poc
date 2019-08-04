import React from 'react';
import LevelThree from './LevelThree'

//import './App.css';

class LevelTwo extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { properties: [], isLoaded: false };
        //this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch(
            "/for-sale/london/?key=82db11669fa84f4ead487f77152dd51f&maxDaysSinceAdded=1",
            {
                method: 'GET'
            }
        )
            .then(res => res.json())
            .then(
                result => {
                    console.log(result)

                    this.setState({
                        isLoaded: true,
                        properties: result.properties
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }

            );
    }

    render() {
        return this.state.properties.length > 0 && <div>
            <h3>From Yesterday</h3>
            <ul>
            {this.state.properties.map((property, index) => {
                return <li key={index}>{property.summary}</li>;
            })}
            </ul>
            <LevelThree />
        </div>
    }
}


export default LevelTwo;
