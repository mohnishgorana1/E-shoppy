import { useLoaderData, useParams} from "react-router-dom";
import { formatPrice, generateAmountOptions } from "../utils/utils";
import { useState } from "react";

function SingleProduct() {
  // GETTING PRODUCT DETAILS
  const { id } = useParams();
  console.log(id);
  const { products } = useLoaderData();
  const myProduct = products[id];
  console.log(myProduct);

  // PRODUCT DETAILS
  const { price, title } = myProduct;
  const productCategory = myProduct.category.name;
  const productImages = myProduct.images;
  
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  return (
    <div className="w-full h-screen border border-red-500 px-10 py-5 flex flex-col sm:flex-row  gap-x-10 ">

      {/* IMAGE CAROUSEL */}
      
      <div className="carousel w-[50%] h-[80%] shadow-2xl px-4 py-8 gap-x-5 rounded-xl  ">
        <div id="slide1" className="carousel-item relative w-full px-4 ">
          <img src={productImages[0]} alt={title} className="w-full rounded-3xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-transparent border-none">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-transparent border-none">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full px-4">
          <img src={productImages[1]} alt={title} className="w-full rounded-3xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-transparent border-none">❮</a> 
            <a href="#slide3" className="btn btn-circle bg-transparent border-none">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full px-4">
          <img src={productImages[2]} alt={title} className="w-full rounded-3xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-transparent border-none">❮</a> 
            <a href="#slide1" className="btn btn-circle bg-transparent border-none">❯</a>
          </div>
        </div> 
        
      </div>

      {/* PRODUCT DETAILS */}

      <div className="w-auto px-4 py-8  h-max flex flex-col gap-y-8 ">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary">{title}</h1>
        <h2 className="text-md sm:text-xl font-medium "> {`Category: ${productCategory}`}</h2>
        <h3>{`Price: ${formatPrice(price)}`}</h3>

        {/* amount / quantity */}
        <div className="form-control w-full max-w-xs mt-6">
          <label htmlFor="amount" className="label">
            <h4 className="text-md font-medium tracking-wider capitalize ">Amount</h4>
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
        
      </div>
    </div>
  );
}

export default SingleProduct;
