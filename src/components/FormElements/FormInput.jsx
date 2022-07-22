const FormInput = ({
  labelClass,
  inputClass,
  htmlFor,
  label,
  value,
  id,
  //   placeholder,
  type,
  onChange,
}) => {
  return (
    <>
      <div className="input-container flex flex-col">
        <label className={labelClass} htmlFor={htmlFor}>
          {label}
        </label>
        <input
          //   placeholder={placeholder}
          type={type}
          id={id}
          className={`input-auth mb-2 ${inputClass}`}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default FormInput;
