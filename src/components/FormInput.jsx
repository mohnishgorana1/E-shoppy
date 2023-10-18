

function FormInput({ type, label, name, defaultValue, size }) {
  return (
    <div className="form-control  flex flex-col items-start justify-between gap-3">
      <label>
        <span className="capitalize label-text text-lg">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={`Enter ${label}`}
        className={`input input-bordered text-sm w-full rounded-lg px-1 text-center input-${size}`}
      />
    </div>
  );
}

export default FormInput;
