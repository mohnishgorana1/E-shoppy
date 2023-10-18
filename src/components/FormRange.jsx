import { useState } from "react";
import { formatPrice } from "../utils/utils";

function FormRange({ label, name, price, size }) {
  const step = 20;
  const maxPrice = 10000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  const formRangeSelect = (e) => {
    e.preventDefault()
    setSelectedPrice(e.target.value)
  }

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer ">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) =>  formRangeSelect(e)}
        step={step}
        className={`range range-primary ${size}`}
      />
      <div className="w-full flex justify-between text-sm pt-2 mt-2 ">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
}

export default FormRange;
