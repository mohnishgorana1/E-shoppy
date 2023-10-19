
function FormOptions({ label, options, size, optionSelection }) {
  const selectOption = (e) => {
    optionSelection = e.target.value;
    console.log(optionSelection);
  }
  return (
    <div className="form-control flex flex-col items-start justify-between gap-3">
      <label htmlFor={label} >
        <span className="label-text capitalize text-lg">{label}</span>
      </label>
      <select 
        name={label} id={label}
        className={`select select-bordered ${size}  text-sm w-full rounded-lg px-1 text-center input-${size} `}
        value=""
        onChange={(e) => selectOption(e)}
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
