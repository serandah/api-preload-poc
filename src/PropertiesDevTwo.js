import React from 'react'
import './Properties.css'
import axios from 'axios';


class PropertiesDevTwo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { properties: [], isLoaded: false };
    }

    componentDidMount() {

        axios.get(this.props.fetch.url)
            .then(result => {
                this.setState({
                    isLoaded: true,
                    properties: result.data.properties
                })
            }).catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            })
    }

    render() {
        const numItems = this.state.properties.length
        if (numItems) {
            const end = this.props.numItems > numItems ? numItems : this.props.numItems
            const properties = this.state.properties.slice(0, end)

            return <div className='properties'>
                <h3>{this.props.title}</h3>
                <ul>
                    {properties.map((property, index) => {
                        return <li key={index}>{property.summary}</li>;
                    })}
                </ul>
                {this.props.children}
            </div>
        }

        return <div className='properties'>
            <h3>{this.props.title}</h3>
            <p>Loading...</p>
        </div>
    }
}

export default PropertiesDevTwo;
