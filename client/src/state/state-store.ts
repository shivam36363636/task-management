import { GetAllTaskResponse } from "@/hooks/useGetAllTask";
import { create } from "zustand";



type Store = {
  isLeftSidebarOpen: boolean;
  isRightSidebarOpen: boolean;
  setIsLeftSidebarOpen: (isOpen: boolean) => void;
  setIsRightSidebarOpen: (isOpen: boolean) => void;
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
  isCreateTaskOpen: boolean;
  setIsCreateTaskOpen: (isOpen: boolean) => void;
  isTaskDetailsOpen: GetAllTaskResponse | null;
  setIsTaskDetailsOpen: (task: GetAllTaskResponse | null) => void;
};

const useStore = create<Store>()((set) => ({
  isLeftSidebarOpen: false,
  isRightSidebarOpen: false,
  setIsLeftSidebarOpen: (isOpen) => set({ isLeftSidebarOpen: isOpen, isRightSidebarOpen: false }),
  setIsRightSidebarOpen: (isOpen) => set({ isRightSidebarOpen: isOpen, isLeftSidebarOpen: false }),
  toggleLeftSidebar: () => set((state) => ({ 
    isLeftSidebarOpen: !state.isLeftSidebarOpen,
    isRightSidebarOpen: false 
  })),
  toggleRightSidebar: () => set((state) => ({ 
    isRightSidebarOpen: !state.isRightSidebarOpen,
    isLeftSidebarOpen: false
  })),
  isCreateTaskOpen: false,
  setIsCreateTaskOpen: (isOpen) => set({ isCreateTaskOpen: isOpen }),
  isTaskDetailsOpen: null,
  setIsTaskDetailsOpen: (task) => set({ isTaskDetailsOpen: task }),
}));

export default useStore;
