import Eclipse from "../../../assets/Eclipse.svg";
import CustomerFeedback from "./CustomerFeedback";
import HowItWorksFrame from "./HowitWorksFrame";
import Analytics from "../../../assets/analystics.svg";
import HowItWorksImage from "./Assets/Frame 1618868376.svg";
const HowItWorks = () => {
  return (
    <>
      <section className="relative h-[492px] flex py-[30px] px-[20px] flex-col items-center gap-[30px] flex-shrink-0 bg-[#034592] md:pt-[72px] md:px-[112px] md:pb-[41.31px] md:flex-end md:gap-[60px]">
        <img src={Eclipse} className="absolute right-0 top-0" alt="" />
        <h2 className="text-[24px] font-[600] text-[#fff] text-center leading-[38.4px] tracking-[-0.64px]">
          How it works
        </h2>
        <img src={Eclipse} className="absolute left-0 bottom-0" alt="" />
        {/* <HowItWorksFrame /> */}
        <img
          src={HowItWorksImage}
          // className="flex w-[380px] justify-self-center h-[242.09px] justify-center items-center flex-shrink-0 rounded-lg"
          className="h-[242.09px] w-[340px] rounded-lg flex justify-center items-center md:w-[1216px] md:rounded-3xl md:h-[300px] md:flex"
          alt=""
        />
      </section>

      {/* <section className="hidden md:flex pt-[80px] px-[112px] pb-[0px] flex-col justify-end items-center gap-[75px] bg-[#034592]">
        <h2 className="text-[#fff] text-center font-[700] text-[56px] tracking-[-2.24px] leading-[100%]">
          How It Works
        </h2>
        <img src={Analytics} alt="" />
      </section> */}
    </>
  );
};

export default HowItWorks;
