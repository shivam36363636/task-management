import useStore from "@/state/state-store";
import { motion } from "motion/react";

export  function CreateTaskLayout({ children }: { children: React.ReactNode }) {
    const {isCreateTaskOpen, setIsCreateTaskOpen} = useStore();
    return<>
    <motion.section
    initial={{opacity: 0, width: isCreateTaskOpen ? "500px" : "0px"}}
    animate={{opacity: 1, width: isCreateTaskOpen ? "500px" : "0px"}}
    transition={{duration: 0.3}}
      layout
      className="h-[100dvh] overflow-y-auto border-l border-gray-200 fixed top-0 right-0 z-20 bg-white"
  >
      {isCreateTaskOpen && children}
  </motion.section>
      {isCreateTaskOpen && <BackGroundBlur onClose={() => setIsCreateTaskOpen(false)} />}
    </>
}

function BackGroundBlur({onClose}:{onClose:()=>void}) {
    return <div className="fixed inset-0 bg-black/10 z-10 backdrop-blur-sm" onClick={onClose}></div>
}