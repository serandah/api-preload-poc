import React from 'react';
import ApiPreload from 'api-preload'
import Properties from './Properties'
import hrefs from './hrefs'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    const preload = new ApiPreload(hrefs)
    preload.load()
    this.state = { properties: [], isLoaded: false };
  }

  render() {
    return <Properties
      title={'London property listings'}
      fetch={{ url: '/for-sale/london/?key=82db11669fa84f4ead487f77152dd51f', options: {} }}
      numItems={5}
    >
      <Properties
        title={'From Yesterday'}
        fetch={{ url: '/for-sale/london/?key=82db11669fa84f4ead487f77152dd51f&maxDaysSinceAdded=1', options: {} }}
        numItems={3}
      >
        <Properties
          title={'With two bedrooms'}
          fetch={{ url: '/for-sale/london/?key=82db11669fa84f4ead487f77152dd51f&maxDaysSinceAdded=1&minBedrooms=2&maxBedrooms=2', options: {} }}
          numItems={3}
        />
      </Properties>
    </Properties>
  }
}

export default App;
