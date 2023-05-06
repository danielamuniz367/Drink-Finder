import React from "react";
import ReactApexChart from "react-apexcharts";

export default function PieChart(props: any) {
  return (
    <ReactApexChart
      options={{
        chart: {
          width: 380,
          type: "pie",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
            },
          },
        ],
      }}
      type="pie"
      width="100%"
      height="100%"
    />
  );
}
