"use client";

import UsersList from "../users/users-list";
import CreateTaskButton from "./create-task-button";

export default function Header() {
    return (
      <header className="flex justify-between items-center">
        <p className="text-sm font-bold">All Tasks</p>
        <div className="flex gap-2 items-center">
          <UsersList />
          <CreateTaskButton />
        </div>
      </header>
    );
}