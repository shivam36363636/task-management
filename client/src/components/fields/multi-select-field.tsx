import { useEffect, useRef, useState } from "react";

type MultiSelectFieldProps = {
    label: string;
    options: {label: string; value: string}[];
    value: string[];
    onChange: (value: string[]) => void;
}

export default function MultiSelectField({label, options, value, onChange}: MultiSelectFieldProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredOptions = options.filter(option => 
        option?.label?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
    );
    const elementRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
        setSearchTerm("");
    }

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (e.target instanceof HTMLElement && !elementRef.current?.contains(e.target as Node)) {
                handleClose();
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, [isOpen]);

    return (
      <div ref={elementRef} className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor={label}>
          {label} ({value.length} selected)
        </label>
        <div
          onClick={() => setIsOpen(true)}
          className="flex flex-wrap gap-2 mb-2 border border-gray-300 rounded-md p-2"
        >
          {value?.map((selectedValue) => {
            const option = options.find((opt) => opt.value === selectedValue);
            return (
              option && (
                <div
                  key={selectedValue}
                  className="bg-gray-100 rounded-md px-2 py-1 flex items-center gap-1"
                >
                  <span>{option.label}</span>
                  <button
                    type="button"
                    onClick={() =>
                      onChange(value.filter((v) => v !== selectedValue))
                    }
                    className="hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
              )
            );
          })}
          {value?.length === 0 && (
            <div className=" text-gray-500 text-center">Click to select</div>
          )}
        </div>
        {isOpen && (
          <div className="flex flex-col gap-2">
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2"
              placeholder="Search options..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="max-h-48 overflow-y-auto border border-gray-300 rounded-md">
              {filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100"
                >
                  <input
                    type="checkbox"
                    id={option.value}
                    checked={value.includes(option.value)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onChange([...value, option.value]);
                      } else {
                        onChange(value.filter((v) => v !== option.value));
                      }
                    }}
                  />
                  <label
                    htmlFor={option.value}
                    className="flex-1 cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
              {filteredOptions.length === 0 && (
                <div className="p-2 text-gray-500 text-center">
                  No options found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
}

