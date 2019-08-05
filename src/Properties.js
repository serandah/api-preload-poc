import React from 'react';

class Properties extends React.Component {

    constructor(props) {
        super(props);
        this.state = { properties: [], isLoaded: false };
    }

    componentDidMount() {
        fetch(
            this.props.fetch.url, {
                ...this.props.fetch.options
            }
        )
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        properties: result.properties
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }

            );
    }

    render() {
        const numItems = this.state.properties.length
        if (numItems) {
            const end = this.props.numItems > numItems ? numItems : this.props.numItems
            const properties = this.state.properties.slice(0,end)
        
            return <div>
                <h3>{this.props.title}</h3>
                <ul>
                    {properties.map((property, index) => {
                        return <li key={index}>{property.summary}</li>;
                    })}
                </ul>
                {this.props.children}
            </div>
        }
        
        return <div>
        <h3>{this.props.title}</h3>
        <p>Loading...</p>
        </div>
    }
}

export default Properties;
