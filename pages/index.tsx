/* eslint-disable @next/next/no-img-element */
import React from "react";
import * as fs from "node:fs/promises";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartJSNodeCanvas } from "chartjs-node-canvas";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dimensions = {
  width: 800,
  height: 400,
};

const options = {
  responsive: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [681, 64, 257, 987, 563, 515, 908, 348, 551, 146, 485, 109],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [
        4529, 454, 2445, 1345, 1843, 4027, 294, 1207, 319, 964, 4829, 2194,
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export async function getServerSideProps() {
  console.time("chart");
  const chartJSNodeCanvas = new ChartJSNodeCanvas({
    width: dimensions.width,
    height: dimensions.height,
    backgroundColour: "white", // Uses https://www.w3schools.com/tags/canvas_fillstyle.asp
  });
  const res = await chartJSNodeCanvas.renderToBuffer({
    type: "line",
    data,
    options,
  });
  console.timeEnd("chart");

  await fs.writeFile("chart.png", res);
  const chartBase64 = res.toString("base64");

  return {
    props: { chart: chartBase64 },
  };
}

const Page = ({ chart }) => {
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>
        Chart client side &ndash; empty canvas element where client side JS
        renders chart
      </h1>
      <Line
        options={options}
        data={data}
        width={dimensions.width}
        height={dimensions.height}
      />

      <h1>
        Chart server side &ndash; chart rendered on server, converted into
        base64, put into &lt;img /&gt; tag
      </h1>
      <img
        src={"data:image/png;base64," + chart}
        width={dimensions.width}
        height={dimensions.height}
        alt="Server side rendered chart"
      />
    </div>
  );
};

export default Page;
