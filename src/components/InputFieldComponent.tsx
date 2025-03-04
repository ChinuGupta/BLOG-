import {InputFieldProps} from "../types/types"

const InputField = ({ label,name, type, value, onChange, placeholder, required }: InputFieldProps) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded"
        required={required}
      />
    </div>
  );
};

export default InputField;
