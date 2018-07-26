import React, { Component } from 'react';

class ToolBar extends Component {
  render() {
    return (
      <h2 className='ui icon header center aligned'>
        <i aria-hidden='true' className='search icon' />Fraud Detectors
        <div className='sub header'>
          Stopping Fraud as fast as it is published!
        </div>
        <br/>
      </h2>
    );
  }
}

export default ToolBar;
