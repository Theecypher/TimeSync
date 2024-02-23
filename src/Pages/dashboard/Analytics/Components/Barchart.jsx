import { BarChart } from "@tremor/react";

const chartdata = [
  {
    name: "Sun",
    dailyHours: 8,
  },
  {
    name: "Mon",
    dailyHours: 5,
  },
  {
    name: "Tue",
    dailyHours: 7,
  },
  {
    name: "Wed",
    dailyHours: 2,
  },
  {
    name: "Thur",
    dailyHours: 2,
  },
  {
    name: "Fri",
    dailyHours: 2,
  },
  {
    name: "Sat",
    dailyHours: 9,
  },
];

const valueFormatter = (number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const AnalyticsBarChart = () => (
  // <div className="w-full md:w-max mt-10 md:mt-0 md:bg-[#fff] md:rounded-md md:shadow md:py-3 md:px-7">
  <div className="w-full md:w-[495px] md:h-[284px] bg-[#fff] md:rounded-md md:pt-[24px] md:pb-[189px] md:px-[24px]">
    <p className="text-[1e1e1e] text-[9.15px] leading-normal font-[500]">
      Average daily hours
    </p>
    <h2 className="font-[500] text-[#1e1e1e] text-[27.46px] tracking-[-1.098%] leading-normal">
      00:04:22
    </h2>
    <BarChart
      className="h-[200px] w-full ml-[-28px] lg:w-[472px] md:w-[400px] rounded-[30px]"
      data={chartdata}
      index="name"
      categories={["dailyHours"]}
      colors={["blue"]}
      showTooltip={false}
      showLegend={false}
      showYAxis={false}
      showGridLines={false}
    />
  </div>
);

export default AnalyticsBarChart;
