import { LineChart } from "@tremor/react";

const chartdata3 = [
  {
    number: "1",
    "time spent": 2,
    overtime: 6,
  },
  {
    number: "2",
    "time spent": 4,
    overtime: 7,
  },
  {
    number: "3",
    "time spent": 6,
    overtime: 9,
  },
  {
    number: "4",
    "time spent": 8,
    overtime: 6,
  },
  {
    number: "5",
    "time spent": 10,
    overtime: 4,
  },
  {
    number: "6",
    "time spent": 12,
    overtime: 4,
  },
  {
    number: "7",
    "time spent": 2,
    overtime: 8,
  },
  {
    number: "8",
    "time spent": 4,
    overtime: 7,
  },
];

export function LineChartCustomChartColorsExample() {
  return (
    <div className="w-[360px] h-[185.91px] md:w-[850px]">
      <div className="text-sm">
        <LineChart
          className="h-[184px] w-full mt-[10px] md:h-[191px] opacity-70"
          data={chartdata3}
          index="number"
          categories={["time spent", "overtime"]}
          colors={["blue-400", "orange-600"]}
          yAxisWidth={30}
          showYAxis={true}
          showLegend={false}
        />
      </div>
    </div>
  );
}
