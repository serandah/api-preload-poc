import React from 'react';
import ApiPreload from 'api-preload'
import LevelTwo from './LevelTwo'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    const preload = new ApiPreload([
      '/for-sale/london/?key=82db11669fa84f4ead487f77152dd51f',
      '/for-sale/london/?key=82db11669fa84f4ead487f77152dd51f&maxDaysSinceAdded=1',
      '/for-sale/london/?key=82db11669fa84f4ead487f77152dd51f&maxDaysSinceAdded=1&minBedrooms=2&maxBedrooms=2'
    ])
    preload.load()
    // Don't call this.setState() here!
    this.state = { properties: [], isLoaded: false };
    //this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(
      "/for-sale/london/?key=82db11669fa84f4ead487f77152dd51f",
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
      <h2>London property listings</h2>
      <ul>
        {this.state.properties.map((property, index) => {
          return <li key={index}>{property.summary}</li>;
        })}
      </ul>
      <LevelTwo />
    </div>
  }
}


export default App;
