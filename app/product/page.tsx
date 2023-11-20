import { productsQuery } from "@/lib/queries";

import { client } from "@/lib/client";
import { simplifiedProduct } from "../interface";
import ProductItem from "../components/ProductItem";

async function ProductsPage() {
  const products: simplifiedProduct[] = await client.fetch(productsQuery);

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mt-6 grid grid-col-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductItem key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
