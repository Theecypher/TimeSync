import ShowNextFeedback from "./Arrow";
import Feedback from "./Feedback";

const CustomerFeedback = () => {
  return (
    <>
      <section className="md:hidden flex justify-center flex-col items-center gap-[32px] py-[40px]">
        <Feedback />
      </section>

      <section className="hidden relative overflow-hidden md:block md:w-[1440px] ml-[90px] py-[80px] md:flex-shrink-0 md:bg-white">
        <Feedback />
      </section>
    </>
  );
};

export default CustomerFeedback;
