import ShowNextFeedback from "./Arrow";
import Feedback from "./Feedback";

const CustomerFeedback = () => {
  return (
    <>
      <section className="md:hidden flex justify-center flex-col items-center gap-[32px]">
        <Feedback />
      </section>

      <section className="hidden overflow-hidden md:block md:w-[1440px] ml-[113px] pt-[80px] md:flex-shrink-0 md:bg-white md:pb-[80px]">
        <Feedback />
      </section>
    </>
  );
};

export default CustomerFeedback;
