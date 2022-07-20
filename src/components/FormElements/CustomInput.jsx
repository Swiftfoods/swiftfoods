import "./input.scss";

const FileInput = ({
  inputId,
  inputType,
  inputLabel,
  prefix,
  suffix,
  register,
  registerId,
  validation,
  required,
  errorMsg,
  children,
  className,
  labelClass,
  onChange,
  ...rest
}) => {
  return (
    <div
      controlid={inputId}
      className={`input-field ${className ? className : ""}`}
    >
      <div className={`${labelClass}`}>{inputLabel}</div>
      <div className={`input-container mt-2.5 ${errorMsg ? "error" : ""}`}>
        {prefix && (
          <div className="affix prefix">
            {/* {inputIcon()} */}
            {prefix}
          </div>
        )}

        {register ? (
          <input
            type={inputType}
            {...register(registerId)}
            required={required}
            {...rest}
          />
        ) : (
          <input
            type={inputType}
            required={required}
            {...rest}
            onChange={onChange}
          />
        )}

        {suffix && (
          <div className="affix suffix">
            {/* {inputIcon()} */}
            {suffix}
          </div>
        )}

        {children}
      </div>

      <div className="input-footer">
        {errorMsg && (
          <div
            className="input- error-msg"
            dangerouslySetInnerHTML={{
              __html: errorMsg || "error",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default FileInput;
