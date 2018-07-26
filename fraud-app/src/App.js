import React, { Component } from 'react';
import ToolBar from './components/ToolBar'
import EventList from './components/EventList'
import Fraud_Chart from './components/Fraud_Chart'
import './App.css';

class App extends Component {
  state = {
    events: []
    // events: [
    //   {id: 1, name: "test1", fraud_probability: .2, classification: "low"},
    //   {id: 2, name: "test2", fraud_probability: .9, classification: "high"},
    //   {id: 3, name: "test3", fraud_probability: .5, classification: "medium"}
    // ]
  }

  componentDidMount = async () => {
  const eventsJSON = await fetch('http://ec2-54-91-86-14.compute-1.amazonaws.com:3333/events')
  console.log(eventsJSON, 'eventsJSON')
  let events = await eventsJSON.json()

  this.setState({events})

}

// fraudCounter (events) {
//   let lowCount = 0;
//   let medCount = 0;
//   let highCount = 0;
//
//   for (let i = 0; i < events; i++) {
//     let singleEvent = events[i]
//
//     if(singleEvent.fraud_probability > 0.85) {
//       highCount++
//     }
//     else if(singleEvent.fraud_probability < 0.85 > .65) {
//       medCount++
//     } else {
//       lowCount++
//     }
//   }
// }

  render() {
    const {events} = this.state;

    return (
      <div className="App">

        <ToolBar />
        <Fraud_Chart events={events}/>
        <EventList events={events}/>
      </div>
    );
  }
}

export default App;
