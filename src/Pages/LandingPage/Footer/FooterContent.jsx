import Logo from "../../../assets/Logo.svg";
import { Link } from "react-router-dom";
import Instagram from "./Assets/instagram.svg";
import Facebook from "./Assets/facebook.svg";
import Telegram from "./Assets/messanger.svg";

const FooterContent = () => {
  return (
    <>
      <div className="flex font-montserrat md:w-[360px] w-[375px] flex-col justify-center items-center gap-[42px] md:items-center md:gap-[20px]">
        <div className="flex items-center md:self-stretch">
          <img src={Logo} alt="" />
          <h3 className="">TimeSync</h3>
        </div>
        <p className="text-center text-[#2d2e2e] text-[16px] font-[400] leading-normal md:text-left">
          Your journey to enhanced productivity begins now. Sign up for
          <span className="text-[#034592] ml-1 text-[16px] font-[400] leading-normal">
            TimeSync
          </span>{" "}
          and embrace a new era of effective time management.
        </p>
      </div>

      {/* <div className="md:flex flex-col text-[#2d2e2e] md:items-start md:gap-[16px] lg:gap-[24px]"> */}
      <div className="flex flex-col justify-center items-center gap-[19px] md:items-start md:gap-[19px]">
        <p className="hidden md:block text-[#034592] text-center md:text-[16px] lg:text-[20px] font-[600] leading-[120%] tracking-[-0.4px]">
          Company
        </p>
        <ul className="flex flex-col justify-center items-center gap-[27px] md:gap-[16px]">
          <li className="text-[#2d2e2e]  md:text-[14px] lg:text-[16px] font-[400] leading-normal">
            Contact
          </li>
          <li className="text-[#2d2e2e] md:text-[14px] lg:text-[16px] font-[400] leading-normal">
            About
          </li>
        </ul>
      </div>

      {/* <div className="md:flex flex-col justify-center items-start gap-[24px]">
        <p className="hidden md:block text-[#034592] text-center md:text-[16px] lg:text-[20px] font-[600] leading-[120%] tracking-[-0.4px]">
          Link
        </p>
        <ul className="flex flex-col justify-between items-center h-[131px] md:h-[103px] md:items-start md:gap-[1px]">
          <li className="md:text-[16px] lg:text-[16px] text-[#2d2e2e] font-[400] leading-normal">
            Terms and condition
          </li>
          <li className="md:text-[16px] lg:text-[16px] text-[#2d2e2e] font-[400] leading-normal">
            Privacy Policy
          </li>
          <li className="md:text-[14px] lg:text-[16px] text-[#2d2e2e] font-[400] leading-normal">
            Cookie Policy
          </li>
        </ul>
      </div> */}

      <div className="flex flex-col justify-center items-center gap-[19px] md:items-start md:gap-[20px]">
        <p className="hidden md:block text-[#034592] text-center md:text-[16px] lg:text-[20px] font-[600] leading-[100%] tracking-[-0.4px]">
          Link
        </p>
        <ul className="flex flex-col justify-between items-center h-[131px] md:h-[80px] md:items-start">
          <li className="md:text-[14px] lg:text-[16px] text-[#2d2e2e] font-[400] leading-normal">
            Terms and condition
          </li>
          <li className="md:text-[14px] lg:text-[16px] text-[#2d2e2e] font-[400] leading-normal">
            Privacy Policy
          </li>
          <li className="md:text-[14px] lg:text-[16px] text-[#2d2e2e] font-[400] leading-normal">
            Cookie Policy
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center gap-[19px] md:items-start md:gap-[19px]">
        <Link className="text-[#034592] items-center md:text-[14px] lg:text-[16px] font-[600] leading-normal md:leading-[100%] tracking-[-0.4px]">
          Social Media
        </Link>
        <Link className="text-[#2d2e2e] hidden text-center md:text-[14px] lg:text-[16px] font-[600] leading-normal md:block">
          Connect with us
        </Link>

        <div className="flex gap-[16px] items-start md:gap-[4px] lg:gap-[16px]">
          <img
            src={Instagram}
            className="w-[40px] height-[40px]  fill-[#E3EFFC]"
            alt=""
          />
          <img
            src={Facebook}
            className="w-[40px] height-[40px]  fill-[#E3EFFC] "
            alt=""
          />
          <img
            src={Telegram}
            className="w-[40px] height-[40px]  fill-[#E3EFFC] "
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default FooterContent;
