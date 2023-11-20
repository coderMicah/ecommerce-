import { client } from "@/sanity/lib/client";
import { productQueryByCategory } from "@/sanity/lib/queries";
import { simplifiedProduct } from "../interface";
import ProductItem from "../components/ProductItem";


export const dynamic = "force-dynamic"
async function CategoryPage({ params }: { params: { category: string } }) {
  const products:simplifiedProduct[] = await client.fetch(productQueryByCategory, params);
  
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between flex-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {`${params.category}'s`} Products
        </h2>
       
      </div>

      <div className="mt-6 grid grid-col-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
