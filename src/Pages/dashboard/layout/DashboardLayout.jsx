import { Outlet, useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";
import TopNav from "./TopNav";
import { useEffect } from "react";
import useStore from "../../../zustand-store/store";

const DashboardLayout = () => {
   const {token} = useStore()
  const navigateTo = useNavigate()
  useEffect(()=>{
    if(!token || token== '' || token== null){
      navigateTo('/')
    }
  },[])

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
