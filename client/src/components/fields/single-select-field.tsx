
type SingleSelectFieldProps = {
    label: string;
    options: {label: string; value: string}[];
    value: string;
    onChange: (value: string) => void;
}

export default function SingleSelectField({label, options, value, onChange}: SingleSelectFieldProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor={label}>{label}</label>
            <select className="border border-gray-300 rounded-md p-2" id={label} value={value} onChange={(e) => onChange(e.target.value)}> 
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

