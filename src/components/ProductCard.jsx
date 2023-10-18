
function ProductCard({props}) {
  return (
    <div className="w-[80%] m-auto  sm:w-full h-64 rounded-lg border-2">
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <p>{props.price}</p>
    </div>

  )
}

export default ProductCard