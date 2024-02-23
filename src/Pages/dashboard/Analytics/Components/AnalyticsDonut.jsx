import { Card, DonutChart, Title, ListItem, List } from "@tremor/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const cities = [
  {
    name: "Completed",
    hours: 5,
    color: "bg-orange-700",
  },
  {
    name: "In progress",
    hours: 2,
    color: "bg-orange-500",
  },
  {
    name: "Not started",
    hours: 3,
    color: "bg-orange-50",
  },
];

const AnalyticsDonut = () => {
  return (
    <div className="w-full mt-10 md:mt-0 md:bg-[#fff] md:w-[520px] md:rounded-md md:pt-3 md:pb-0 md:px-[10px]">
      <div className="flex items-center justify-between">
        <h4 className="font-[600] text-[11.43px] leading-3 text-[#1e1e1e] md:text-base md:leading-[19.5px]">
          Tasks
        </h4>
        <p className="tracking-[-4%] underline leading-[10px] font-medium text-[10px] text-[#034592] md:text-[14px] md:leading-[14px]">
          See all
        </p>
      </div>

      {cities.map((item, index) => (
        <div
          key={index}
          className="flex items-center my-4 md:rounded-xl justify-between gap-7"
        >
          <h4 className="flex self-center font-medium text-xs tracking-[-4%] leading-[14px] text-[#3d3d3d] justify-center md:text-base">
            Digital Productivity tool team
          </h4>

          <div className="flex gap-2 self-center">
            <div className="">
              <DonutChart
                className="w-[40px] h-[37px] md:w-[50px] md:h-[50px] self-center"
                data={cities}
                category="hours"
                index="name"
                showLabel={false}
                colors={["orange-50", "orange-500", "orange-700"]}
              />
            </div>

            <ul className="mt-2 md:h-[50px]">
              {cities.map((item) => (
                <li key={item.name} className="space-x-2 md:space-x-4">
                  <div className="flex items-center space-x-2.5 truncate">
                    <span
                      className={classNames(
                        item.color,
                        "h-2.5 w-2.5 shrink-0 rounded-sm"
                      )}
                      aria-hidden={true}
                    />
                    <span className="truncate text-[8px] md:text-[12px] font-medium text-[#636363]">
                      {item.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsDonut;
