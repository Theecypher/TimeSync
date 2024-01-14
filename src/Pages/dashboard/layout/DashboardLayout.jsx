import { Outlet, useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";
import TopNav from "./TopNav";
import { useEffect, useState } from "react";
import useStore from "../../../zustand-store/store";

const DashboardLayout = () => {
  //  const {token} = useStore()
  // const navigateTo = useNavigate()
  // useEffect(()=>{
  //   if(!token || token== '' || token== null){
  //     navigateTo('/')
  //   }
  // },[])
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="w-full relative flex flex-row ">
      <SideMenu />
      <div className="w-full">
        <TopNav setOpenModal={setOpenModal}/>
        <Outlet  context={[openModal, setOpenModal]}/>
      </div>
    </div>
  );
};

export default DashboardLayout;
