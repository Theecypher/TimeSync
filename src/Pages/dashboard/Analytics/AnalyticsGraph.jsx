import AnalyticsBarChart from "./Components/Barchart";
import AnalyticsDonut from "./Components/AnalyticsDonut";
import Circle from "./Assets/circle.svg";
import Ellipse from "./Assets/Ellipse2.svg";
import Icon from "./Assets/icon.svg";
import { LineChartCustomChartColorsExample } from "./Components/AnalyticsLineGraph";

const AnalyticsGraph = () => {
  return (
    <div className="flex flex-col justify-center overflow-hidden pt-[24px] px-4 w-full md:items-start rounded-xl bg-[#fff] flex-shrink-0 md:border-none md:bg-[#f6f6f6]">
      <div className="flex flex-col w-full justify-center gap-10">
        <div className="md:flex gap-5">
          <AnalyticsBarChart />
          <AnalyticsDonut />
        </div>
      </div>

      <div className="md:flex flex-col md:w-full md:p-5 md:my-3 md:mx-2 justify-center items-start gap-[10px] flex-shrink-0 rounded-xl bg-[#fff]">
        <div className="mt-3 flex gap-7 justify-around items-start">
          <div className="w-[165px] flex flex-col gap-4 p-3">
            <div>
              <div className="flex gap-[4px]">
                <img className="" src={Circle} alt="" />
                <h2 className="tracking-[0.7px] text-[12px] text-blue-600 leading-normal font-medium">
                  Total Work hour{" "}
                </h2>
              </div>
              <h3 className="font-[500] text-4xl text-[#1e1e1e] mt-[12px] mb-[5px] tracking-[-1.44px] leading-[100%]">
                62:56:34
              </h3>
            </div>
            <div className="">
              <p className="w-[102px] text-[#636363] text-[10px] leading-normal">
                You worked 2 percent more this week
              </p>
              <img className="font-[700] mt-2" src={Icon} alt="" />
            </div>
          </div>

          <div className="w-[165px] flex flex-col gap-4 p-3">
            <div>
              <div className="flex gap-[4px]">
                <img className="" src={Ellipse} alt="" />
                <h2 className="tracking-[0.7px] text-[12px] text-[#f77a4a] leading-normal font-medium">
                  Overtime{" "}
                </h2>
              </div>
              <h3 className="font-[500] text-4xl text-[#1e1e1e] mt-[12px] mb-[5px] tracking-[-1.44px] leading-[100%]">
                00:28:56
              </h3>
            </div>
            <div className="">
              <p className="w-[102px] text-[#636363] text-[10px] leading-normal">
                Your overtime reduced by 25% this month
              </p>
              <img className="font-[700] mt-2" src={Icon} alt="" />
            </div>
          </div>
        </div>

        <LineChartCustomChartColorsExample />
      </div>
    </div>
  );
};

export default AnalyticsGraph;
