type InputFieldProps = {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export default function InputField({label, placeholder, value, onChange}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700" htmlFor={label}>{label}</label>
      <input 
        className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-500
        shadow-sm transition-all duration-200 ease-in-out
        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none
        hover:border-gray-400
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
