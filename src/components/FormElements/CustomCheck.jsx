import React from "react";

const FormCheck = ({
  inputClass,
  labelClass,
  htmlFor,
  label,
  value,
  id,
  onChange,
  checkClass,
}) => {
  return (
    <div>
      <>
        <div className={`${checkClass} input-check flex items-center mt-3`}>
          <input
            //   placeholder={placeholder}
            type="checkbox"
            id={id}
            className={`mr-6 check-con ${inputClass}`}
            value={value}
            onChange={onChange}
          />
          <label className={labelClass} htmlFor={htmlFor}>
            {label}
          </label>
        </div>
      </>
    </div>
  );
};

export default FormCheck;
