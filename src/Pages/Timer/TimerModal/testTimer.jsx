import { motion } from "framer-motion";
import { useState } from "react";
import TimerModal from "./TimerModal";

const ShowTimerModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return ( 
        <div className="bg-green">
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-black text-white border p-3 rounded-sm"
            onClick={() => (modalOpen ? close() : open())}
            >
                Open Modal
            </motion.button>

            {modalOpen && <TimerModal handleClose={close}  modalOpen={modalOpen} />}
        </div>
     );
}
 
export default ShowTimerModal;