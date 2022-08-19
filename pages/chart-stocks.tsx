import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

import { ChartJSNodeCanvas } from "chartjs-node-canvas";

const chartDataSet = [
  { aggregateStart: "2022-05-23T00:00", mid: 149.215 },
  { aggregateStart: "2022-05-24T00:00", mid: 139.82 },
  { aggregateStart: "2022-05-25T00:00", mid: 146.62 },
  { aggregateStart: "2022-05-26T00:00", mid: 155.81 },
  { aggregateStart: "2022-05-27T00:00", mid: 166.835 },
  { aggregateStart: "2022-05-31T00:00", mid: 160.005 },
  { aggregateStart: "2022-06-01T00:00", mid: 161.455 },
  { aggregateStart: "2022-06-02T00:00", mid: 173.97 },
  { aggregateStart: "2022-06-03T00:00", mid: 162.095 },
  { aggregateStart: "2022-06-06T00:00", mid: 168.905 },
  { aggregateStart: "2022-06-07T00:00", mid: 176.645 },
  { aggregateStart: "2022-06-08T00:00", mid: 178.845 },
  { aggregateStart: "2022-06-09T00:00", mid: 173.54 },
  { aggregateStart: "2022-06-10T00:00", mid: 169.27 },
  { aggregateStart: "2022-06-13T00:00", mid: 154.53 },
  { aggregateStart: "2022-06-14T00:00", mid: 159.205 },
  { aggregateStart: "2022-06-15T00:00", mid: 164.335 },
  { aggregateStart: "2022-06-16T00:00", mid: 157.27 },
  { aggregateStart: "2022-06-17T00:00", mid: 163.92 },
  { aggregateStart: "2022-06-21T00:00", mid: 164.69 },
  { aggregateStart: "2022-06-22T00:00", mid: 165.74 },
  { aggregateStart: "2022-06-23T00:00", mid: 174.945 },
  { aggregateStart: "2022-06-24T00:00", mid: 185.055 },
  { aggregateStart: "2022-06-27T00:00", mid: 181.95 },
  { aggregateStart: "2022-06-28T00:00", mid: 174.235 },
  { aggregateStart: "2022-06-29T00:00", mid: 175.88 },
  { aggregateStart: "2022-06-30T00:00", mid: 168.56 },
  { aggregateStart: "2022-07-01T00:00", mid: 179.235 },
  { aggregateStart: "2022-07-05T00:00", mid: 187.105 },
  { aggregateStart: "2022-07-06T00:00", mid: 185.955 },
  { aggregateStart: "2022-07-07T00:00", mid: 190.175 },
  { aggregateStart: "2022-07-08T00:00", mid: 190.345 },
  { aggregateStart: "2022-07-11T00:00", mid: 185.415 },
  { aggregateStart: "2022-07-12T00:00", mid: 174.375 },
  { aggregateStart: "2022-07-13T00:00", mid: 174.975 },
  { aggregateStart: "2022-07-14T00:00", mid: 172.7 },
  { aggregateStart: "2022-07-15T00:00", mid: 177.89 },
  { aggregateStart: "2022-07-18T00:00", mid: 177.18 },
  { aggregateStart: "2022-07-19T00:00", mid: 180.48 },
  { aggregateStart: "2022-07-20T00:00", mid: 184.245 },
  { aggregateStart: "2022-07-21T00:00", mid: 188.995 },
  { aggregateStart: "2022-07-22T00:00", mid: 183.55 },
  { aggregateStart: "2022-07-25T00:00", mid: 182.535 },
  { aggregateStart: "2022-07-26T00:00", mid: 169.235 },
  { aggregateStart: "2022-07-27T00:00", mid: 176.9 },
  { aggregateStart: "2022-07-28T00:00", mid: 182.03 },
  { aggregateStart: "2022-07-29T00:00", mid: 183.53 },
  { aggregateStart: "2022-08-01T00:00", mid: 183.305 },
  { aggregateStart: "2022-08-02T00:00", mid: 188.195 },
  { aggregateStart: "2022-08-03T00:00", mid: 195.235 },
  { aggregateStart: "2022-08-04T00:00", mid: 189.245 },
  { aggregateStart: "2022-08-05T00:00", mid: 191.09 },
  { aggregateStart: "2022-08-08T00:00", mid: 189.545 },
  { aggregateStart: "2022-08-09T00:00", mid: 186.74 },
  { aggregateStart: "2022-08-10T00:00", mid: 200.785 },
  { aggregateStart: "2022-08-11T00:00", mid: 198.135 },
  { aggregateStart: "2022-08-12T00:00", mid: 200.905 },
  { aggregateStart: "2022-08-15T00:00", mid: 201.895 },
  { aggregateStart: "2022-08-16T00:00", mid: 200.39 },
  { aggregateStart: "2022-08-17T00:00", mid: 196.845 },
  { aggregateStart: "2022-08-18T00:00", mid: 195.8 },
];

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const data = {
  labels: chartDataSet.map((_) => _.aggregateStart),
  datasets: [
    {
      label: "First dataset",
      data: chartDataSet.map((_) => _.mid),
      fill: true,
      borderColor: "rgba(105, 209, 164, 1)",
      backgroundColor: "rgba(105, 209, 164, 0.2)",
      pointRadius: 0,
    },
  ],
};

const options = {
  locale: "en-US",
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
  },
  scales: {
    x: {
      type: "timeseries",
      display: true,
      ticks: {
        autoSkip: true,
        minRotation: 0,
        maxRotation: 0,
        autoSkipPadding: 10,
        source: "labels",
      },
      time: {
        unit: "day",
        tooltipFormat: "MMM d, yyyy",
        displayFormats: {
          minute: "MMM d, h:mma",
          day: "MMM d, yyyy",
        },
      },
    },
    y: {
      ticks: {
        autoSkip: true,
        callback: (value) =>
          currencyFormatter.format(
            typeof value === "string" ? Number.parseFloat(value) : value
          ),
      },
    },
  },
} as const;

const chartData = {
  options,
  data,
};

export const ChartStocks: React.FC<{
  width: number;
  height: number;
}> = ({ width, height }) => {
  return (
    <div style={{ width, height }}>
      <Line data={chartData.data} options={chartData.options} />
    </div>
  );
};

export const getChartStockStoryPng = async (
  width: number,
  height: number,
  devicePixelRatio: number
): Promise<Buffer> => {
  console.time("chart stocks render");

  const chartJSNodeCanvas = new ChartJSNodeCanvas({
    width: width,
    height: height,
    backgroundColour: "white", // Uses https://www.w3schools.com/tags/canvas_fillstyle.asp
    plugins: {
      modern: ["chartjs-adapter-date-fns"],
    },
  });
  const buffer = await chartJSNodeCanvas.renderToBuffer({
    type: "line",
    data: chartData.data,
    options: { ...chartData.options, devicePixelRatio },
  });
  console.timeEnd("chart stocks render");

  return buffer;
};
