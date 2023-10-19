import { Link, useLoaderData } from "react-router-dom";

import { formatPrice } from "../utils/utils";

function ProductsList() {
  const { products } = useLoaderData();
  console.log(products);

  return (
    // Products Listing with products card
    <>
      <div className="container mb-5 border-2 rounded-3xl grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14  px-10 py-5">
        {products.map((item) => {
          const { id, price, title, image, description, category } = item;
          
        
          return (
            <Link
              key={id}
              to={`/products/${id}`}
              className="w-[80%] m-auto  sm:w-full h-80 rounded-lg shadow-2xl hover:scale-105 duration-200 px-4 py-4 grid gap-2  "
            >
              <img src={image} alt={title} className=" w-full rounded-lg h-52" />
              <h1 className="text-md sm:text-xl text-primary text-center tracking-wider font-semibold font-sans ">{title.slice(0,20)}</h1>
              <p className="text-center text-red-400 font-medium">{formatPrice(price)}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default ProductsList;
