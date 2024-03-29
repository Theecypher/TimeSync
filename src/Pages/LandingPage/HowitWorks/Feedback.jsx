import FeedbackCard from "./FeedbackCard";
import Vector from "../../../assets/vector03.svg";
import ShowNextFeedback from "./Arrow";

const Feedback = () => {
  // const [active, setActive]

  return (
    <>
      <section className="flex flex-col gap-[8px] items-center md:inline-flex justify-center md:items-start md:flex-col md:overflow-hidden md:mb-[20px]">
        <h2 className="text-[#034592] text-[20px] tracking-[-0.48] font-[700] md:text-[#F77A4A] md:text-center md:text-[36px] md:leading-[120%] md:tracking-[-1.6px]">
          Our Customer Feedback
        </h2>
        <p className="text-[#1e1e1e] text-center text-[18px] font-[500] w-[65%] tracking-[0.4px] md:hidden">
          Don't take our words for it. trust our customers
        </p>
        <p className="hidden md:block text-[#1e1e1e] text-[24px] font-[400] leading-[120%] tracking-[-0.48px]">
          Trust our customers to validate our credibility.
        </p>
      </section>

      <FeedbackCard />
      <ShowNextFeedback />
    </>
  );
};

export default Feedback;
