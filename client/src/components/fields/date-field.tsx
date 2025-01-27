

type DateFieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export default function DateField({ label, value, onChange }: DateFieldProps) {

    return (
        <div className="flex flex-col gap-1">
            <label className="text-[12px] font-medium text-gray-700" htmlFor={label}>{label}</label>
            <input className="border border-gray-200 outline-none shadow-sm text-sm rounded-xl px-4 py-1.5 text-gray-900 placeholder-gray-500" type="date" value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}