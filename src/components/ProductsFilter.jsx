import FormInput from "./FormInput"
import FormOptions from "./FormOptions"


function ProductsFilter() {
  return (
    <div className="bg-base-300 w-full h-auto p-6 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5  ">
        <FormInput 
            type="text"  
            label="Search Product1"
            name="Search"
            defaultValue={""}
            size="xs"
        />
    </div>
        
        
  )
}

export default ProductsFilter