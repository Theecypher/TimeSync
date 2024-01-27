import FooterContent from "./FooterContent";
import "./Footer.css";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <section className="md:hidden flex justify-center font-montserrat py-[32px] px-[16px] flex-col items-center gap-[12px]">
        <section className="flex flex-col items-center pt-[32px] px-[16px] gap-[40px] self-stretch">
          <FooterContent />
        </section>
      </section>

      <section className="background mt-[125px] hidden md:flex background pt-[30px] flex-col items-center gap-[40px] justify-end">
        <section className="flex self-start ml-[90px] justify-between gap-[30px] lg:gap-[100px]">
          <FooterContent />
        </section>
        <Copyright />
      </section>
    </>
  );
};

export default Footer;
