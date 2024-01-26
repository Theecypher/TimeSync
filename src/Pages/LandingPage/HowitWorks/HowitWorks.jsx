import Eclipse from "../../../assets/Eclipse.svg";
import CustomerFeedback from "./CustomerFeedback";
import HowItWorksFrame from "./HowitWorksFrame";
import Analytics from "../../../assets/analystics.svg";
import HowItWorksBox from "./HowItWoorksBox";

const HowItWorks = () => {
  return (
    <>
      <section className="relative md:hidden flex py-[30px] px-[20px] flex-col items-center gap-[30px] flex-shrink-0 h-[568px] bg-[#034592]">
        <img
          src={Eclipse}
          className="absolute right-0 top-0 md:hidden"
          alt=""
        />
        <h2 className="text-[32px] font-[600] text-[#fff] text-center leading-[38.4px] tracking-[-0.64px]">
          How it works
        </h2>
        <img
          src={Eclipse}
          className="absolute left-0 bottom-0 md:hidden"
          alt=""
        />
        <HowItWorksFrame />
      </section>

      <section className="hidden md:flex pt-[80px] px-[112px] pb-[0px] flex-col justify-end items-center gap-[75px] bg-[#034592]">
        <h2 className="text-[#fff] text-center font-[700] text-[56px] tracking-[-2.24px] leading-[100%]">
          How It Works
        </h2>
        {/* <HowItWorksBox /> */}
        <img src={Analytics} alt="" />
      </section>
    </>
  );
};

export default HowItWorks;
