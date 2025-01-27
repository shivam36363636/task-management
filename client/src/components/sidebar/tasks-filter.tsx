"use client";

import { useState } from "react";
import {  ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type TeamData = {
  id: number;
  name: string;
  key: string;
}

type TasksFilterProps = {
  title: string;
  data: TeamData[];
}

export default function TasksFilter({ title, data }: TasksFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 px-2">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between text-sm font-medium cursor-pointer hover:bg-gray-100 p-2.5 rounded-lg transition-colors duration-200"
      >
        <h2 className="text-gray-700 font-semibold truncate">{title}</h2>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight size={18} className="text-gray-500" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 mt-2 text-sm pl-2">
              {data.map((item) => (
                <div key={item.id} className="flex items-center">
                  <label 
                    htmlFor={item.key}
                    className="cursor-pointer hover:bg-gray-100 w-full rounded-lg p-2.5 truncate text-gray-600 transition-colors duration-200 hover:text-gray-900"
                  >
                    <span className="truncate">{item.name}</span>
                  </label>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}