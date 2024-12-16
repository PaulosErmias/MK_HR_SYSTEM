import { Chart as ChartJS } from "chart.js/auto";
import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData, options }) {
  return (
    <div className="h-full w-full p-3 mt-4">
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default BarChart;
