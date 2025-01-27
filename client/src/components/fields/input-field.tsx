type InputFieldProps = {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export default function InputField({label, placeholder, value, onChange}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] font-medium text-gray-700" htmlFor={label}>{label}</label>
      <input 
        className=" rounded-xl text-sm px-4 py-2 text-gray-900 placeholder-gray-500
        shadow-sm border border-gray-200 transition-all duration-200 ease-in-out
        outline-none
        bg-white" 
        id={label} 
        type="text" 
        placeholder={placeholder} 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
      />
    </div>
  )
}
