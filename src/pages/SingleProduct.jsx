import { Link, useLoaderData, useParams } from "react-router-dom";
import { formatPrice, generateAmountOptions } from "../utils/utils";
import { useState } from "react";

function SingleProduct() {
  // GETTING PRODUCT DETAILS
  const { id } = useParams();
  // console.log(id);

  const { products } = useLoaderData();
  const myProduct = products[id];
  console.log("MP-ID", myProduct);

  // PRODUCT DETAILS
  const { price, title, image, description, category } = myProduct;

  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="object-cover w-full h-auto bg-base-300 rounded-xl px-10 py-5 mb-10 flex flex-col sm:flex-row items-center   gap-x-14 ">

      {/* IMAGE */}
      <div className="w-[100%] sm:w-[100%] h-96 shadow-2xl sm:px-4 sm:py-8 sm:gap-x-5 rounded-xl border border-primary  ">
        <img
          src={image}
          alt={title}
          className="w-full rounded-3xl h-full"
        />
      </div>

      {/* PRODUCT DETAILS and BUY NOW BTN */}
      <div className="w-auto px-4 py-8  h-max flex flex-col gap-y-8 ">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary">{title}</h1>
        <h2 className="text-md sm:text-xl font-medium capitalize">
          {" "}
          {`Category: ${category}`}
        </h2>
        <h2 className="text-md sm:text-xl font-medium capitalize">
          Description: 
          <div className=" mt-3 sm:ml-5 text-sm font-normal text-neutral-content tracking-wider font-mono "> {description} </div>
        </h2>
        <h3>
          Price: {" "}
          <span className="text-red-500">{formatPrice(price)}</span>
          </h3>

        {/* amount / quantity */}
        <div className="form-control w-full max-w-xs mt-6">
          <label htmlFor="amount" className="label">
            <h4 className="text-md font-medium tracking-wider capitalize ">
              Amount
            </h4>
          </label>
          <select
            className="select select-secondary select-bordered select-md"
            id="amount"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(10)}
          </select>
        </div>

        <div>
          <Link
            to="/cart"
            className="btn border bg-transparent border-orange-600 text-orange-600  rounded-xl hover:bg-orange-600 hover:text-neutral-content hover:font-semibold hover:scale-110 "
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
