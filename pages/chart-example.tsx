import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import { Line } from "react-chartjs-2";

export const options = {
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

const chartData = {
  options,
  data,
};

export const ChartExample = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <Line
      options={chartData.options}
      data={chartData.data}
      width={width}
      height={height}
    />
  );
};

export const getChartExamplePng = async (
  width: number,
  height: number
): Promise<Buffer> => {
  console.time("chart example render");

  const chartJSNodeCanvas = new ChartJSNodeCanvas({
    width: width,
    height: height,
    backgroundColour: "white", // Uses https://www.w3schools.com/tags/canvas_fillstyle.asp
  });
  const buffer = await chartJSNodeCanvas.renderToBuffer({
    type: "line",
    data: chartData.data,
    options: chartData.options,
  });
  console.timeEnd("chart example render");

  return buffer;
};
