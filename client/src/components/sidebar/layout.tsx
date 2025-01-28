"use client";

import useStore from "@/state/state-store";
import { motion, AnimatePresence } from "motion/react";

export function LeftSidebarLayout({ children }: { children: React.ReactNode }) {
    const {isLeftSidebarOpen} = useStore();

    return (
        <motion.aside
            initial={{ width: "0px" }}
            animate={{ width: isLeftSidebarOpen ? "200px" : "0px" }}
            transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
            }}
            className="h-[100dvh] overflow-hidden border-r border-gray-200 relative bg-gray-100"
        >
            <AnimatePresence>
                {isLeftSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="h-[100dvh] overflow-hidden border-r border-gray-200"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.aside>
    );
}

export function RightSidebarLayout({ children }: { children: React.ReactNode }) {
    const {isRightSidebarOpen} = useStore();

    return (
        <motion.aside
            initial={{ width: "0px" }}
            animate={{ width: isRightSidebarOpen ? "300px" : "0px" }}
            transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
            }}
            className="h-[100dvh] overflow-hidden border-l border-gray-200"
        >
            <AnimatePresence>
                {isRightSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="h-[100dvh] overflow-hidden border-l border-gray-200"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.aside>
    );
}