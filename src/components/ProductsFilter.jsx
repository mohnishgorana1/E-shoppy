import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormOptions from "./FormOptions";

function ProductsFilter() {
  const categories = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ];

  const sortBy = ["asc", "desc"];
  return (
    <div className="bg-base-300 w-full h-auto p-6 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5  ">
      <FormInput
        type="text"
        label="Search Product"
        name="Search"
        defaultValue={""}
        size="xs"
      />
      <FormOptions options={categories} label={"Select Categories"} size="xs" />
      <FormOptions options={sortBy} label={"Sort By"} size="xs" />

      <div className="flex flex-wrap items-center justify-between  gap-5 px-3">
        <button type="submit" className="btn btn-block btn-sm btn-primary rounded-lg">
          Search
        </button>
        <Link to="/products" className="btn btn-block btn-accent btn-sm rounded-lg ">
          Reset
        </Link>
      </div>
    </div>
  );
}

export default ProductsFilter;
