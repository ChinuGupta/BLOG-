import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputField= ({ label, type, value, onChange, placeholder }:InputFieldProps) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default InputField;
