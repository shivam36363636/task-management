type TextareaFieldProps = {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export default function TextareaField({label, placeholder, value, onChange}: TextareaFieldProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor={label}>{label}</label>
            <textarea className="border border-gray-300 rounded-md p-2" id={label} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}

