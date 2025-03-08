import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";

const HomePage = async()=>{
  //SSG -> Static Side generation
  // const res = await fetch ("http://localhost:5000/products", {
  //   cache : "force-cache"
  // });
  // ISR -> Incremental static Regeneration
  const res = await fetch ("http://localhost:5000/products", {
    next: {
      revalidate : 5 // eita sudu fetch howa data gulu jodi update hoy taile update korbe static data gula te kunu change korte parbe na
    }
  });
  const products = await res.json();
  console.log(products);
  return (
    <div>
      <h1 className="text-center text-4xl my-5">
         Data Fetching, Caching , and Revalidating
      </h1>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] mx-auto my-10">
      {products.slice(0,4).map ((product)=>(
        <ProductCard key={product.id} product = {product}/>
      ))}
     </div>
     <div className="text-center">
      <Link href="/products" className="bg-blue-500 text-white py-2 px-5 rounded-lg shadow-md transition-all">
        See more
      </Link>
     </div>
    </div>
  )
}
export default HomePage;