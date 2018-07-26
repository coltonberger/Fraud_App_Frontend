import React, { Component } from 'react';

class Event extends Component {
  render() {
    const { event } = this.props;
    return (
      <div className="ui inverted segment dark-grey">
        <div className="ui inverted relaxed divided list">
          <div className="item">
            <div className="content">
              <div className="header"> Event: {event.name}</div>
              Fraud Probability: {event.fraud_probability}
              <br/>
              Fraud Classification: {event.classification}
            </div>
             <button
              className="ui inverted red button"
              >Review</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
