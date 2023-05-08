"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Box } from "@chakra-ui/react";

export default function PieChart(props: any) {
  const { series, colors, margin } = props;

  const options: ApexOptions = {
    colors: colors,
    chart: {
      animations: {
        enabled: false,
      },
      selection: { enabled: false },
      dropShadow: {
        enabled: false,
      },
      redrawOnWindowResize: false,
      sparkline: {
        enabled: true,
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
    <Box m={margin} width="120px" minHeight="120px">
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height="120px"
        width="100%"
      />
    </Box>
  );
}
