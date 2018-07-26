import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {
    const { events } = this.props;

    return (
      <div className="container">
        <h1 className='ui header'>Current Events to Review:</h1>
          <div className="list-group">
            {events.map((event, i) => {
              return <
              Event key={i}
              event={event}
              />;
            })}
          </div>
      </div>
    );
  }
}

export default EventList;
