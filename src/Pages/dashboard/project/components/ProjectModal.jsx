import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "../../../../components/ui/Modal";
import Input from "../../../../components/ui/Input";
import Select, { Option, OptionGroup } from "../../../../components/ui/Select";
import Button from "../../../../components/ui/Button";

const ProjectModal = ({ openModal, closeModal, setValue}) => {
  const [project, setProject] = useState({
    name: "",
    assignedTo: "",
    timeline: null,
    billing: null,
    priority: null,
    description: null,
  });
  const selectList = ['item 1', 'item 2', 'item 3', 'item 4']
  const [error, setError] = useState(null);
  // const [value, setValue] = useState(null)
  // console.log(value)

  return (
    <Modal openModal={openModal} closeModal={closeModal}>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-row items-center justify-between">
          <h3 className="font-[600] text-[20px] leading-[30px] tracking-[-0.46px] text-[#3D3D3D]">
            New Project
          </h3>
          <IoCloseOutline
            color="#1E1E1E"
            size={34}
            className="bg-slate-100 p-2"
          />
        </div>
        <form className="w-full mt-[40px] flex flex-col gap-y-[20px]">
          <div className=" flex flex-col gap-y-[8px]">
            <h4 className="text-[#1E1E1E] text-[16px] font-[500] leading-[24px] tracking-[-0.368px]">
              Project name:
            </h4>
            <Input
              type="text"
              placeholder={"Project name"}
              className="w-full"
            />
            {error?.name && (
              <p className=" text-error-1 text-[12px] font-[500] leading-[18px] tracking-[-0.276px]">
                {error?.name}
              </p>
            )}
          </div>
          <div className=" flex flex-col gap-y-[8px]">
            <h4 className="text-[#1E1E1E] text-[16px] font-[500] leading-[24px] tracking-[-0.368px]">
              Assigned To:
            </h4>
            <Input type="text" placeholder={"Enter name"} className="w-full" />
            {error?.assignedTo && (
              <p className=" text-error-1 text-[12px] font-[500] leading-[18px] tracking-[-0.276px]">
                {error?.assignedTo}
              </p>
            )}
          </div>
          <div className=" flex flex-col gap-y-[8px]">
            <h4 className="text-[#1E1E1E] text-[16px] font-[500] leading-[24px] tracking-[-0.368px]">
              Timeline:
            </h4>
            <Select setValue={setValue} className="w-full" >
              {selectList.map((item, index)=>(
                <Option key={index}  >
                  {item}
                </Option>
                ))}
            </Select>
            {error?.timeline && (
              <p className=" text-error-1 text-[12px] font-[500] leading-[18px] tracking-[-0.276px]">
                {error?.timeline}
              </p>
            )}
          </div>
          <div className=" flex flex-col gap-y-[8px]">
            <h4 className="text-[#1E1E1E] text-[16px] font-[500] leading-[24px] tracking-[-0.368px]">
              Billing:
            </h4>
            <Select className="w-full" />
            {error?.billing && (
              <p className=" text-error-1 text-[12px] font-[500] leading-[18px] tracking-[-0.276px]">
                {error?.billing}
              </p>
            )}
          </div>
          <div className=" flex flex-col gap-y-[8px]">
            <h4 className="text-[#1E1E1E] text-[16px] font-[500] leading-[24px] tracking-[-0.368px]">
              Priority:
            </h4>
            <Select className="w-full" />
            {error?.priority && (
              <p className=" text-error-1 text-[12px] font-[500] leading-[18px] tracking-[-0.276px]">
                {error?.priority}
              </p>
            )}
          </div>
          <div className=" flex flex-col gap-y-[8px]">
            <h4 className="text-[#1E1E1E] text-[16px] font-[500] leading-[24px] tracking-[-0.368px]">
              Decscription:
            </h4>
            <div className="relative max-w-full border-[1px] border-[#E9EBF8] shadown-sm p-[16px] rounded-[16px] text-[#7B7C7C] font-[400] text-[14px] leading-[21px]">
              <textarea className="h-[48px] w-full " />
              <span className="absolute bottom-2 right-4">0/200</span>
              {error?.description && (
                <p className=" text-error-1 text-[12px] font-[500] leading-[18px] tracking-[-0.276px]">
                  {error?.description}
                </p>
              )}
            </div>
          </div>
          <Button className="w-fit self-center mt-[40px] rounded-[16px] py-[5.714px] px-[38.095px]">
            Create
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default ProjectModal;
