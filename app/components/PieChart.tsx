import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function PieChart(props: any) {
  const { labels, series, colors } = props;
  console.log("series", series);

  const options: ApexOptions = {
    labels: labels,
    colors: colors,
    chart: {
      animations: {
        enabled: false,
      },
      selection: { enabled: false },
      height: "120px",
      width: "100%",
      dropShadow: {
        enabled: false,
      },
    },
    states: {
      active: {
        filter: {
          type: "none",
        },
      },
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: colors,
    },
    tooltip: { enabled: false },
    responsive: [
      {
        breakpoint: undefined,
        options: {},
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="pie"
      width="100%"
      height="100%"
    />
  );
}
