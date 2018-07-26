import React, { Component } from 'react';
import ToolBar from './components/ToolBar'
import EventList from './components/EventList'
import Fraud_Chart from './components/Fraud_Chart'
import './App.css';

class App extends Component {
  state = {
    //events: []
    events: [
      {id: 1, name: "test1", fraud_probability: .8},
      {id: 2, name: "test2", fraud_probability: .9},
      {id: 3, name: "test3", fraud_probability: .88}
    ]
  }

//   componentDidMount = async () => {
//   const eventsJSON = await fetch('http://ec2-54-91-86-14.compute-1.amazonaws.com:3333/events')
//   console.log(eventsJSON, 'eventsJSON')
//   let events = await eventsJSON.json()
//
//   this.setState({events})
//
// }

  render() {
    const {events} = this.state;

    return (
      <div className="App">

        <ToolBar />
        <Fraud_Chart />
        <EventList events={events}/>
      </div>
    );
  }
}

export default App;
