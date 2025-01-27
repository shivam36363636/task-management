"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
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

  return <div className="mt-4">
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between text-sm font-medium cursor-pointer hover:bg-gray-200 p-2 rounded-sm"
      >
        <h2>{title}</h2>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
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
            <div className="flex flex-col mt-2 text-sm">
              {data.map((item) => (
                  <div key={item.id} className="flex items-center gap-2">              
                      <label htmlFor={item.key} className="cursor-pointer hover:bg-gray-200 w-full rounded-sm p-2 truncate">{item.name}</label>
                  </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
  </div>
}