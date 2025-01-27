"use client";

import useStore from "@/state/state-store";
import { motion } from "motion/react";

export function LeftSidebarLayout({ children }: { children: React.ReactNode }) {
    const {isLeftSidebarOpen} = useStore();
        return (
          <motion.aside
            initial={{ minWidth: isLeftSidebarOpen ? "200px" : "0px" }}
            animate={{ minWidth: isLeftSidebarOpen ? "200px" : "0px" }}
            transition={{ duration: 0.3 }}
            layout
            className="h-[100dvh] overflow-y-auto border-r border-gray-200 bg-gray-100"
          >
            {isLeftSidebarOpen && children}
          </motion.aside>
        );
}

export function RightSidebarLayout({ children }: { children: React.ReactNode }) {
    const {isRightSidebarOpen} = useStore();
        return <motion.aside
        initial={{minWidth: isRightSidebarOpen ? "300px" : "0px"}}
        animate={{minWidth: isRightSidebarOpen ? "300px" : "0px"}}
        transition={{duration: 0.3}}
        layout
        className="h-[100dvh] border-l border-gray-200"
    >
        {isRightSidebarOpen && children}
    </motion.aside>
}