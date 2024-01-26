import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link
      to="/signup"
      className="bg-[#034592] mx-3 font-[500] text-[16px] ease-out duration-500 py-[10px] text-white text-center px-[16px] rounded-[30px] w-[112px] h-[48px] md:hidden"
    >
      Sign up
    </Link>
  );
};

export default Button;
