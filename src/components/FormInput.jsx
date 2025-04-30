function FormInput({
  label,
  defaultValue,
  name,
  type,
  placeholder,
  className,
}) {
  return (
    <>
      {label && <label>{label}</label>}
      <input
        className={className}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required
        name={name}
        type={type}
      />
    </>
  );
}

export default FormInput;
