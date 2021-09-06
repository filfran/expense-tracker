import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({ dataPoints }) {
  const dataPointsValues = dataPoints.map((d) => d.value);
  const maximumValue = Math.max(...dataPointsValues);

  const bars = dataPoints.map((d) => (
    <ChartBar
      value={d.value}
      maxValue={maximumValue}
      label={d.label}
      key={d.label}
    />
  ));

  return <div className="chart">{bars}</div>;
}

export default Chart;
