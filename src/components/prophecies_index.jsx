import React from 'react';

class PropheciesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
  }
  
  componentDidMount() {
    this.handleFetch();
  }
  
  handleFetch() {
    this.props.fetchProphecies();
  }
    
  render () {
    
    
    const prophecies = this.props.prophecies.map(prophecy => {
      return (
        <div key={prophecy.id}>
          {`${prophecy.name}: ${prophecy.chaosValue}`}
        </div>
      );
    });
    
    return (
      <div>
        {prophecies}
      </div>
    );
  }
}

export default PropheciesIndex;




////////////////////////////////////////

// SAMPLE PROPHECY
// {
//   "id": 1711,
//   "name": "Trash to Treasure",
//   "icon": "http://web.poecdn.com/image/Art/2DItems/Currency/ProphecyOrbRed.png?scale=1&scaleIndex=0&w=1&h=1",
//   "mapTier": 0,
//   "levelRequired": 0,
//   "baseType": null,
//   "stackSize": 0,
//   "variant": null,
//   "prophecyText": "You will turn a normal item into a unique item with a single Chance Orb.",
//   "artFilename": null,
//   "links": 0,
//   "itemClass": 8,
//   "sparkline": {
//     "data": [
//       0,
//       3.82,
//       3.48,
//       -47.94,
//       -0.94,
//       -35.71,
//       -39.305
//     ],
//     "totalChange": -38.24
//   },
//   "implicitModifiers": [],
//   "explicitModifiers": [],
//   "flavourText": "A blank canvass holds untold potential, but the artist's fortunate hand transforms it into a masterpiece.",
//   "corrupted": false,
//   "gemLevel": 0,
//   "gemQuality": 0,
//   "itemType": "Unknown",
//   "chaosValue": 2594.92,
//   "exaltedValue": 29,
//   "count": 1
// }
