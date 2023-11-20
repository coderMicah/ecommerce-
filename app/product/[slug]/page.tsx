
import Product from "@/app/components/Product";
import { productItem } from "@/app/interface";
import { client } from "@/lib/client";
import { productQuery } from "@/lib/queries";

export const dynamic = "force-dynamic"
async function ProductPage({ params }: { params: { slug: string } }) {
  const product: productItem = await client.fetch(productQuery, params);

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
      <Product product={product}/>
    </div>
  );
}

export default ProductPage;
