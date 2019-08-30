import React from 'react'
import './Properties.css'
import $ from 'jquery'

class PropertiesDevThree extends React.Component {

    constructor(props) {
        super(props);
        this.state = { properties: [], isLoaded: false };
    }

    componentDidMount() {

        $.ajax(this.props.fetch.url)
            .done(result => {
                this.setState({
                    isLoaded: true,
                    properties: result.properties
                });
            })
            .fail(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
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

export default PropertiesDevThree;
