type Props = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
};

const TextField = ({ placeholder, value, onChange, label }: Props) => {
  return (
    <div className="flex flex-col">
      {label && <label className="text-xs mb-0.5">{label}</label>}
      <input placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default TextField;
