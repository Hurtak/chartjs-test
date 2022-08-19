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
  Filler,
  TimeSeriesScale,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartExample, getChartExamplePng } from "./chart-example";
import { ChartStocks, getChartStockStoryPng } from "./chart-stocks";

Chart.register(
  CategoryScale,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeSeriesScale,
  Title,
  Tooltip
);

const dimensions = {
  width: 800,
  height: 200,
  devicePixelRatioServer: 2,
};

export async function getServerSideProps() {
  const chartExample = await getChartExamplePng(
    dimensions.width,
    dimensions.height,
    dimensions.devicePixelRatioServer
  );
  await fs.writeFile("public/chart-example.png", chartExample);

  const chartStockStory = await getChartStockStoryPng(
    dimensions.width,
    dimensions.height,
    dimensions.devicePixelRatioServer
  );
  await fs.writeFile("public/chart-stocks.png", chartStockStory);

  return {props: {}}
}

const Page = () => {
  return (
    <div
      style={{
        width: dimensions.width,
        margin: "50px auto",
      }}
    >
      <h1>Stocks client side</h1>
      <ChartStocks width={dimensions.width} height={dimensions.height} />

      <h1>Stocks server side</h1>
      <img
        src="chart-stocks.png"
        width={dimensions.width}
        height={dimensions.height}
        alt="Server side rendered chart"
      />

      <h1>Chart client side</h1>
      <ChartExample width={dimensions.width} height={dimensions.height} />

      <h1>Chart server side</h1>
      <img
        src="chart-example.png"
        width={dimensions.width}
        height={dimensions.height}
        alt="Server side rendered chart"
      />
    </div>
  );
};

export default Page;
