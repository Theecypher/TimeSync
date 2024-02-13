const chartdata = [
  {
    day: "Sunday",
    "Daily hours": 4,
  },
  {
    day: "Monday",
    "Daily hours": 4,
  },
  {
    day: "Tuesday",
    "Daily hours": 3,
  },
  {
    day: "Wednesday",
    "Daily hours": 4,
  },
  {
    day: "Thursday",
    "Daily hours": 4,
  },
  {
    day: "Friday",
    "Daily hours": 3,
  },
  {
    day: "Saturday",
    "Daily hours": 7,
  },
];

const valueFormatter = (number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

export default { valueFormatter, chartdata };
