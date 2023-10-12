import React from "react";

function FormInput({ type, label, name, defaultValue, size }) {
  return (
    <div className="form-control gap-1">
      <label>
        <span className="capitalize label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={`Enter ${label}`}
        className={`input input-bordered input-${size}`}
      />
    </div>
  );
}

export default FormInput;
