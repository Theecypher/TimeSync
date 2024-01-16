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

      <section className="hidden md:flex background pt-[40px] flex-col items-center gap-[40px] justify-end">
        <section className="flex self-start ml-[113px] justify-between items-start md:gap-[10px] lg:gap-[60px]">
          <FooterContent />
        </section>
        <Copyright />
      </section>
    </>
  );
};

export default Footer;
