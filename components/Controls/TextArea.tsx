type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  resizeable?: boolean;
  placeholder?: string;
  label?: string;
};

const TextArea = ({
  value,
  onChange,
  resizeable = false,
  placeholder,
  label,
}: Props) => {
  const textAreaClasses = resizeable ? "resize" : "resize-none";
  return (
    <div className="flex flex-col gap-0.5">
      {label && <label className="text-xs mb-0.5">{label}</label>}
      <textarea
        className={textAreaClasses}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
    </div>
  );
};

export default TextArea;
