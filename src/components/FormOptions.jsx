function FormOptions({ label, options, size }) {
  return (
    <div className="form-control flex flex-col items-start justify-between gap-3">
      <label htmlFor={label} >
        <span className="label-text capitalize text-lg">{label}</span>
      </label>
      <select 
        name={label} id={label}
        className={`select select-bordered ${size}  text-sm w-full rounded-lg px-1 text-center input-${size} `}  
      >
        {
          options.map((item) => {
            return(
              <option key={item} value={item}>
                {item}
              </option>
            )
          })
        }
      </select>
    </div>
  );
}

export default FormOptions;
