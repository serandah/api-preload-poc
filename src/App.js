import React from 'react';
import ApiPreload from 'api-preload'
import PropertiesDevOne from './PropertiesDevOne'
import PropertiesDevTwo from './PropertiesDevTwo'
import PropertiesDevThree from './PropertiesDevThree'
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
    return <PropertiesDevOne
      title={'London property listings (Developer one)'}
      fetch={{ url: '/for-sale/london/?key=82db11669fa84f4ead487f77152dd51f', options: {} }}
      numItems={5}
    >
      <PropertiesDevTwo
        title={'From Yesterday (Developer two)'}
        fetch={{ url: '/for-sale/london/?key=82db11669fa84f4ead487f77152dd51f&maxDaysSinceAdded=1', options: {} }}
        numItems={3}
      >
        <PropertiesDevThree
          title={'With two bedrooms (Developer three)'}
          fetch={{ url: '/for-sale/london/?key=82db11669fa84f4ead487f77152dd51f&maxDaysSinceAdded=1&minBedrooms=2&maxBedrooms=2', options: {} }}
          numItems={3}
        />
      </PropertiesDevTwo>
    </PropertiesDevOne>
  }
}

export default App;
