import ProductCard from "@/components/products/ProductCard";

const HomePage = async()=>{
  const res = await fetch ("http://localhost:5000/products");
  const products = await res.json();
  console.log(products);
  return (
    <div>
      <h1 className="text-center text-4xl my-5">
         Data Fetching, Caching , and Revalidating
      </h1>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] mx-auto">
      {products.map ((product)=>(
        <ProductCard key={product.id} product = {product}/>
      ))}
     </div>
    </div>
  )
}
export default HomePage;