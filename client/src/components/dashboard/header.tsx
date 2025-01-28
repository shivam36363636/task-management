"use client";

import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import UsersList from "../users/users-list";
import CreateTaskButton from "./create-task-button";

export default function Header() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const filter = searchParams.get("filter");
    const key = searchParams.get("key");

    const clearFilter = () => {
        router.push("/dashboard");
    };

    const getFilterLabel = () => {
        if (!filter || !key) return null;
        const capitalizedFilter = filter.split('_').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        return `${capitalizedFilter}`;
    };

    return (
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={clearFilter}
            className="text-sm font-bold hover:text-blue-600 transition-colors duration-200"
          >
            All Tasks
          </button>
          {filter && key && (
            <div className="flex items-center">
              <span className="text-gray-400 mx-2">•</span>
              <div className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full">
                <span className="text-sm text-gray-600">{getFilterLabel()}</span>
                <button
                  onClick={clearFilter}
                  className="hover:bg-gray-200 p-1 rounded-full transition-colors duration-200"
                >
                  <X className="w-3 h-3 text-gray-500" />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-2 items-center">
          <UsersList />
          <CreateTaskButton />
        </div>
      </header>
    );
}