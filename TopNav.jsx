import React, { useState } from "react";
import Button from "./src/components/ui/Button";
import { PlusIcon } from "@radix-ui/react-icons";
import ProjectModal from "./src/Pages/dashboard/project/components/ProjectModal";
import TimerModal from "./src/Pages/Timer/TimerModal/TimerModal";

const ProjectTopNav = ({ text }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  // const openModal=()=>{
  //     setOpenModal(true)
  // }
  // const [openModal, setOpenModal]= useState(false)
  const closeModal = () => setOpenModal(false);
  return (
    <div className="w-full flex h-full items-center justify-end ">
      <Button
        // onClick={() => setOpenModal(true)}
        onClick={() => (modalOpen ? close() : open())}
        className="flex items-center gap-1"
      >
        {" "}
        {text} <PlusIcon height={16} width={16} color="white" />
      </Button>

      {modalOpen && <TimerModal handleClose={close} modalOpen={modalOpen} />}
      {/* <ProjectModal openModal={openModal} closeModal={closeModal} /> */}
    </div>
  );
};

export default ProjectTopNav;
