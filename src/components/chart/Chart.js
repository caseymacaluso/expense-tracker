import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = props => {
  let maxValue = 0;
  for (let point of props.data) {
    if (point.value > maxValue) {
      maxValue = point.value;
    }
  }

  return (
    <div className="chart">
      {props.data.map(point => (
        <ChartBar
          key={point.label}
          value={point.value}
          label={point.label}
          max={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
