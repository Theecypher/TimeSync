import Star from "../../../assets/card001.svg";
import Star1 from "../../../assets/card002.svg";
import Star2 from "../../../assets/card003.svg";
import data from "./Feedbackdata";
import "./Feedback.css";

const FeedbackCard = () => {
  return (
    <section className="flex flex-col font-montserrat mt-[40px] items-start gap-[20px] md:flex-row md:inline-flex md:gap-[32px] md:flex-shrink-0 md:h-[354px]">
      {data.map((card, index) => (
        <article className="box-shadow w-[350px] flex rotate-[-0.237deg] p-[20.661px] flex-col items-center gap-[10.331px] rounded-[3.444px] border-[0.861px] border-[#E9EBF8] bg-[#FFF] md:w-[549px] md:h-[354px] md:p-[32.085px] md:items-start md:gap-[16.064px] md:rounded-[5.347px] md:border-[1.337px] md:border-[#e9ebf8]">
          <div className="flex items-start self-stretch justify-between">
            <img
              src={card.imgLink}
              className="md:width-[80.211] md:h-[80.211]"
              alt=""
            />
          </div>
          <h3 className="text-[#1E1E1E] text-center leading-normal tracking-[0.48px] text-[24px] font-[600] md:tracking-[0.588px] md:text-[29.411px]">
            {card.name}
          </h3>
          <p className="font-[400] text-[14px] md:overflow-hidden md:text-[#4D4D4D] md:text-ellipsis md:text-[18px] lg:text-[20px] md:trackin-[0.4px]">
            {card.review}
          </p>
        </article>
      ))}
    </section>
  );
};

export default FeedbackCard;
