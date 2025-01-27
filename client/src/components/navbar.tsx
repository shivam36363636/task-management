"use client";

import useStore from "@/state/state-store";
import { Sidebar, User } from "lucide-react";
import LogoComponent from "./logo-component";

export default function Navbar() {
    const {toggleLeftSidebar, toggleRightSidebar, isLeftSidebarOpen} = useStore();
    return <nav className="flex gap-4  items-center py-2 px-4 border-b border-gray-200">
        <button onClick={toggleLeftSidebar}>
            <Sidebar className="w-4 h-4" /> 
        </button>
        <LogoComponent isOpen={isLeftSidebarOpen} />
        <button className="hover:bg-gray-200 p-2 rounded-md ml-auto" onClick={toggleRightSidebar}>
            <User className="w-4 h-4" />
        </button>
    </nav>
}