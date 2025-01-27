type TextareaFieldProps = {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export default function TextareaField({label, placeholder, value, onChange}: TextareaFieldProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-gray-700" htmlFor={label}>{label}</label>
            <textarea className="border border-gray-200 outline-none shadow-sm text-sm rounded-xl px-4 py-1.5 text-gray-900 placeholder-gray-500" id={label} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}

