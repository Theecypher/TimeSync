import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import TopNav from "./TopNav";

const DashboardLayout = () => {
  
  return (
    <div className="w-full relative flex flex-row ">
      <SideMenu />
      <div className="w-full">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
