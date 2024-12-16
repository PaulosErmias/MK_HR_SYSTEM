import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ chartData, options }) {
  console.log(chartData);
  return (
    <div style={{ height: "160px", width: "160px" }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}

export default DoughnutChart;
