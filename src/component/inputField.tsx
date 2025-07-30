type InputFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  helperText?: string;
  required?: boolean;
};

const InputField = ({
  id,
  label,
  placeholder,
  type = "text",
  helperText,
  required = false,
}: InputFieldProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block Inter text-text21 text-[#6C7275] uppercase mb-1"
      >
        {label} {required && "*"}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-text6"
      />
      {helperText && (
        <p className="text-text7 italic text-[#6C7275] mt-1">{helperText}</p>
      )}
    </div>
  );
};

export default InputField;
