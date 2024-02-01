import React, { useState } from "react";
import Modal from "../../../components/ui/Modal";
import { useOutletContext } from "react-router-dom";
import ProjectModal from "./components/ProjectModal";
import emptyState from "../../../assets/empty-state.svg";
import Button from "../../../components/ui/Button";
import ProjectTopNav from "./components/TopNav";

const Project = () => {
  const [openModal, setOpenModal] = useOutletContext();
  const closeModal = () => {
    setOpenModal(false);
  };
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Dashboard design",
      client: "Mr. David",
      status: "Ongoing",
      team: "Team X",
    },
    {
      id: 2,
      name: "Dashboard design",
      client: "Mr. David",
      status: "Not started",
      team: "Team X",
    },
    {
      id: 3,
      name: "Dashboard design",
      client: "Mr. David",
      status: "Completed",
      team: "Team X",
    },
    {
      id: 4,
      name: "Dashboard design",
      client: "Mr. David",
      status: "Ongoing",
      team: "Team X",
    },
  ]);
  
  return (
    <div className="w-full  min-h-[calc(100vh-88px)] flex flex-col px-[20px] ">
      <div className="w-full bg-white sticky top-0 z-30 h-[88px] border-b-[1px] border-[#F5F5F5] px-[24px] flex  items-center justify-end ">
       <ProjectTopNav openModal={openModal} setOpenModal={setOpenModal}/>
       </div>
      {/* <ProjectModal openModal={openModal} closeModal={closeModal} /> */}
      <h1 className="mt-[32px] font-[500] text-[48px] leading-[48px] text-[#3D3D3D]">
        Project
      </h1>
      <div className="w-full h-[calc(100vh-173px)] flex items-center justify-center">
        {!projects ? (
          <div className="w-full flex flex-col mt-[88px]">
            <div className="w-full grid grid-cols-4 gap-x-[104px] px-[8px] text-[#3D3D3D] text-[16px] font-[600] leading-[16px] tracking-[-0.64px] ">
              <p>Project name</p>
              <p>Client</p>
              <p>Status</p>
              <p>Team</p>
            </div>
            <div className="flex flex-col mt-[30px] gap-y-[8px]">
              {
                !projects?.map((project, index) => (
                  <div
                    key={project.id}
                    className="w-full grid grid-cols-4 gap-x-[104px] px-[8px] border-[1px] border-[#E9EBF8] py-[26px]"
                  >
                    <p className=" overflow-hidden overflow-ellipsis whitespace-nowrap text-[#1E1E1E] text-[24px] font-[500] leading-[24px] tracking-[0.96px]">
                      {project.name}
                    </p>
                    <p className=" overflow-hidden overflow-ellipsis whitespace-nowrap text-[#1E1E1E] text-[24px] font-[500] leading-[24px] tracking-[0.96px]">
                      {project.client}
                    </p>
                    <p
                      className={`${
                        project.status == "Ongoing"
                          ? "text-warning-2"
                          : project.status == "Not started"
                          ? "text-error-2"
                          : project.status == "Completed"
                          ? "text-success-green-2"
                          : ""
                      } text-[16px] font-[500] leading-[16px] tracking-[-0.64px] overflow-ellipsis`}
                    >
                      {project.status}
                    </p>
                    <p className=" overflow-hidden overflow-ellipsis whitespace-nowrap text-[#1E1E1E] text-[24px] font-[500] leading-[24px] tracking-[0.96px]">
                      {project.team}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        ) : (
          <div className="w-fit flex flex-col items-center">
            <img src={emptyState} alt='' className="h-[150px] w-[150px]" />
            <h4 className="text-black text-center font-[600] text-[16px] leading-[19.2px] tracking-[-0.32px]">
              Create new project
            </h4>
            <Button 
              onClick={()=>setOpenModal(true)} 
              className="w-fit self-center mt-[20px]">Create</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
