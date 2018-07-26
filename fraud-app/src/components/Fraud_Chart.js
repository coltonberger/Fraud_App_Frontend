import React, { Component } from 'react';
import Event from './Event';
import { render } from "react-dom";
import { Chart } from "react-google-charts";

class Fraud_Chart extends Component {


  render(){
    const { event } = this.props;

    console.log(this.props)

    const data = [
      ["Fraud Classification", "Fraud Count", { role: "style" }],
      ["Low", 1, "color: #ffd633"],
      ["Medium", 1, "color: #ff6600"],
      ["High", 1, "color: #ff471a"],
    ];

    return (
      <div className="App">
        <Chart chartType="BarChart" width="100%" height="250px" data={data} />
      </div>
    );
  };
}
export default Fraud_Chart;
