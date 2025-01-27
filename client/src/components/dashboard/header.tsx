"use client";

import CreateTaskButton from "./create-task-button";

export default function Header() {
    return <header className="flex justify-between items-center">
        <p className="text-sm font-bold">All Tasks</p>
        <CreateTaskButton />
    </header>;
}