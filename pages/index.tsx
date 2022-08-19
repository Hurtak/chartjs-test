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
  Filler,
  TimeSeriesScale,
} from "chart.js";
// import { ChartStockStory, getChartStockStoryPng } from "./chart-stockstory";
import { ChartExample, getChartExamplePng } from "./chart-example";

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
  height: 400,
};

export async function getServerSideProps() {
  const chartExample = await getChartExamplePng(
    dimensions.width,
    dimensions.height
  );
  await fs.writeFile("chart-example.png", chartExample);

  // const chartStockStory = await getChartStockStoryPng(
  //   dimensions.width,
  //   dimensions.height
  // );
  // await fs.writeFile("chart-stonks.png", chartStockStory);

  return {
    props: {
      chartExample: chartExample.toString("base64"),
      chartStockStory: '',
    },
  };
}

const Page = ({
  chartExample,
  chartStockStory,
}: {
  chartExample: string;
  chartStockStory: string;
}) => {
  return (
    <div
      style={{
        width: dimensions.width,
        margin: "50px auto",
      }}
    >
      <h1>StonkStory client side</h1>
      {/* <ChartStockStory width={dimensions.width} height={dimensions.height} /> */}

      <h1>StonkStory client side</h1>
      <img
        src={"data:image/png;base64," + chartStockStory}
        width={dimensions.width}
        height={dimensions.height}
        alt="Server side rendered chart"
      />
      <h1>Chart client side</h1>
      <ChartExample width={dimensions.width} height={dimensions.height} />

      <h1>Chart server side</h1>
      <img
        src={"data:image/png;base64," + chartExample}
        width={dimensions.width}
        height={dimensions.height}
        alt="Server side rendered chart"
      />
    </div>
  );
};

export default Page;
