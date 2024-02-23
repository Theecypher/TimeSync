import Star from "../../../assets/card001.svg";
import Star1 from "../../../assets/card002.svg";
import Star2 from "../../../assets/card003.svg";
import data from "./Feedbackdata";
import "./Feedback.css";

const FeedbackCard = () => {
  return (
    <section className="flex flex-col font-montserrat mt-[20px] items-start gap-[20px] md:flex-row md:inline-flex md:gap-[25px] md:flex-shrink-0 md:h-[354px] md:mt-[70px]">
      {data.map((card, index) => (
        <article
          key={index}
          className="box-shadow w-[280px] flex rotate-[-0.237deg] p-[20.661px] flex-col gap-[10.331px] items-start rounded-[3.444px] border-[0.861px] border-[#E9EBF8] bg-[#Fff] md:w-[500px] md:p-[32.085px] md:gap-[10.064px] md:rounded-[5.347px] md:border-[1.337px] md:border-[#e9ebf8]"
        >
          <div className="flex items-start self-stretch justify-between">
            <img
              src={card.imgLink}
              className="md:width-[60px] md:h-[60px]"
              alt=""
            />
          </div>
          <h3 className="text-[#1E1E1E] leading-normal text-left tracking-[0.48px] text-[18px] font-[600] md:tracking-[0.588px] md:text-[24px]">
            {card.name}
          </h3>
          <p className="font-[400] text-[10px] md:overflow-hidden md:text-[#4D4D4D] md:text-ellipsis md:text-[10px] lg:text-[14px] md:trackin-[0.4px]">
            {card.review}
          </p>
        </article>
      ))}
    </section>
  );
};

export default FeedbackCard;
