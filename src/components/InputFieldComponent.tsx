import { InputFieldProps } from "../types/types"

const InputField = ({ label, name, type, value, onChange, placeholder, required, className }: InputFieldProps) => {
  return (
    <div className="mb-4">

      {label && <label htmlFor={name} className="block mb-1 text-sm text-gray-700">{label}</label>}

      {
        type === "textarea" ? (<textarea

          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={className}
          required={required}
        />
        ) :

          (
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={className}
              required={required}
            />
          )

      }


    </div>
  );
};

export default InputField;
