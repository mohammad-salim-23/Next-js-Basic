
const DynamicProductsPage =async ({params , searchParams})=>{
    const productId = await params.productId;
    console.log(await searchParams);
    return (
        <div>
            <h1 className="text-4xl text-center">This is dynamic product page  {productId}</h1>
        </div>
    )
}
export default DynamicProductsPage ;