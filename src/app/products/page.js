import ProductCard from "@/components/products/ProductCard";

const AllProductsPage =async ()=>{
    const res = await fetch ("http://localhost:5000/products", {
        cache : "no-store" //server side rendering
    });
   const products = await res.json();
    return (
        <div>
            <h1 className="text-4xl text-center">All Products</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] mx-auto my-10">
                {products.map((product)=>(
                    <ProductCard key = {product.id} product = {product}/>
                ))}
            </div>
        </div>
    )
}
export default AllProductsPage;