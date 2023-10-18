import ProductsFilter from "../components/ProductsFilter";
import ProductsList from "../components/ProductsList";
import {customFetch} from '../utils/utils'


const url = `/products`

export const loader = async({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])
   /*
   * It takes a URL string from the request.url property.
   * It creates a URL object from that URL string.
   * It extracts the query parameters using the searchParams property.
   * It converts the query parameters into an iterable of key-value pairs using the entries() method.
   * It spreads these key-value pairs into an array.
   * It uses Object.fromEntries() to create a new object where the key-value pairs become properties of the object.
   */

   const response = await customFetch(url, params)
   const products = response.data;

  //  console.log(response);
   console.log(products);
  return { products, params}
}


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
