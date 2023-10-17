import ProductsFilter from "../components/ProductsFilter";
import ProductsList from "../components/ProductsList";

function Products() {
  return (
    <div className="flex flex-col gap-4">
       {/* Products Filter Section */}
      <ProductsFilter />
      <h1 className="mt-2 text-xl sm:text-4xl text-secondary w-[90%] pb-2 border-b-slate-40000 border-b-2">
        Your Requested Products
      </h1>
      <ProductsList />
    </div>
  );
}

export default Products;
