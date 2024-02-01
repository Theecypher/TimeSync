import { Outlet, useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";
import TopNav from "./TopNav";
import { useEffect, useRef, useState } from "react";
import useStore from "../../../zustand-store/store";
import ProjectModal from "../project/components/ProjectModal";
import TopBar from "./TopBar";
import LandingPage from "../../LandingPage/LandingPage";
import SideBar from "./SideBar";

const DashboardLayout = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setopenMenu] = useState(false);
  const [header, setHeader] = useState('Dashboard')

  return (
    <div className="w-full relative flex lg:flex-ro flex-col transition-all duration-500 overflow-hidden h-screen">

      <div className={`${openModal ? 'z-20' :"z-[30]"}`}>
        <TopBar openMenu={openMenu} setopenMenu={setopenMenu} header={header}/>
      </div>
      <div className="w-full z-[20] flex h-full">
        <SideBar openMenu={openMenu} closeMenu={()=>setopenMenu(false)} />
        {openMenu && (
          <div
            onClick={() => setopenMenu(false)}
            className="bg-transparent w-full fixed z-[99] top-0 bottom-0 left-0"
          ></div>
        )}
        <div className="w-full shrink max-lg:flex-1 pl-0 mx-lg:pl-[70px] lg:pl[230px] h-full overflow-scroll z-[30]">
          <ProjectModal
            openModal={openModal}
            closeModal={() => setOpenModal(false)}
          />
          <Outlet context={[openModal, setOpenModal, setHeader, header]} />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
