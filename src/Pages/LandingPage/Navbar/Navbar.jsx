import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../../assets/Logo.svg";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = (e) => {
    setToggle((prev) => !prev);
  };

  return (
    <section className="lg:py-[36px] font-montserrat py-[6px] px-4 lg:px-[112px] md:py-[25px] md:px-[65px] bg-[#F9FCFE] md:h-[120px] md:justify-center md:items-center">
      <nav className="flex justify-between font-[16px] items-center text-black">
        <div className="flex items-center md:justify-center">
          <img src={Logo} alt="" />
          <h2 className="flex text-[16.842px] font-normal leading-[100%] tracking-[-0.674px] text-[#101928] lg:text-[20.211px] lg:font-[500] md:leading-[100%] md:tracking-[-0.808px]">
            Time <p className="md:text-[#f56630]">Sync</p>
          </h2>
        </div>

        <ul className="hidden md:flex justify-center items-center md:gap-[15px] gap-[24px]">
          <li className="flex flex-col justify-center items-start md:gap[5px] gap-[10px] font-[600]">
            Home
          </li>
          <li className="flex flex-col justify-center items-start md:gap[5px] gap-[10px] font-[600]">
            About
          </li>
          <li className="flex flex-col justify-center items-start md:gap[5px] gap-[10px] font-[600]">
            How it works
          </li>
        </ul>

        <div className="flex items-center justify-center gap-[16px]">
          <Link
            to="/signin"
            className="border-[1px] border-[#F77A4A] hidden md:block font-[500] text-[16px] py-[10px] text-[#E1E1E1] text-center px-[16px] rounded-[30px] w-[112px] h-[48px]"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-[#034592] md:mx-1 mx-3 font-[500] hidden md:block text-[16px] py-[10px] text-white text-center px-[16px] rounded-[30px] w-[112px] h-[48px]"
          >
            Sign up
          </Link>

          {!toggle ? (
            <Button className="block" />
          ) : (
            <button className="hidden"></button>
          )}

          <div onClick={handleToggle} className="md:hidden">
            {!toggle ? (
              <AiOutlineClose size={25} />
            ) : (
              <AiOutlineMenu size={25} />
            )}
          </div>
        </div>

        <div
          className={
            !toggle
              ? "fixed left-0 top-[70px] w-full z-10 border-r border-r-gray-900 ease-in-out duration-500 bg-white md:hidden"
              : "fixed left-[100%]"
          }
        >
          <ul className="p-4 text-center">
            <li className="p-4 border-b border-gray-300">
              <Link>Home</Link>
            </li>
            <li className="p-4 border-b border-gray-300">
              <Link>About</Link>
            </li>
            <li className="p-4 border-b border-gray-300">
              <Link>Blogs</Link>
            </li>
            <li className="p-4 border-b border-gray-300">
              <Link>How it works</Link>
            </li>
            <li className="p-4 border-b border-gray-300">
              <Link to="/signin">Log in</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
