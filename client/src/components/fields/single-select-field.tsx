
type SingleSelectFieldProps = {
    label: string;
    options: {label: string; value: string}[];
    value: string;
    onChange: (value: string) => void;
}

export default function SingleSelectField({label, options, value, onChange}: SingleSelectFieldProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-gray-700" htmlFor={label}>{label}</label>
            <select className="border border-gray-200 outline-none shadow-sm text-sm rounded-xl px-2 py-1.5 text-gray-900 placeholder-gray-500" id={label} value={value} onChange={(e) => onChange(e.target.value)}> 
                {options.map((option) => (
                    <option className="text-sm" key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

