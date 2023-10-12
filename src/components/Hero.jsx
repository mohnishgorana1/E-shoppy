import { Link } from "react-router-dom";



function Hero() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="w-full flex gap-x-2  lg:text-4xl items-center justify-center">
        <h1 className="capitalize text-primary-focus font-serif p-4 shadow-md shadow-secondary text-xs lg:text-5xl bg-base-100">
          We are Changing the way People shop
        </h1>
      </div>

      <div className="flex flex-col md:flex-row w-[100%] lg:w-[60%] align-element mt-8 card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://www.jiomart.com/images/product/original/rv2dcclzkn/brown-fox-brown-fox-stylish-attractive-snekaers-shoes-for-man-s-boy-s-sneakers-for-men-white-product-images-rv2dcclzkn-3-202209241601.jpg?im=Resize=(600,750)"
            alt="Movie"
            className='w-[80%] h-[40vh] rounded-lg'
          />
        </figure>
        <div className="mt-5 justify-center mb-5 flex flex-col gap-4">
          <h2 className="card-title text-md text-secondary">New Products are Listed</h2>
          <p>Click the button to Grab Your Comfy</p>
          <div className="card-actions ">
            <Link to='/products' className="btn btn-primary self-center">Our Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
