import { client } from "@/lib/client";
import { productsLatestQuery } from "@/lib/queries";
import { simplifiedProduct } from "../interface";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductItem from "./ProductItem";


async function Latest() {
  const products: simplifiedProduct[] = await client.fetch(productsLatestQuery);

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between flex-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Newest Product
        </h2>
        <Link href="/all" className="text-primary flex items-center gap-x-1">
          See All{" "}
          <span>
            <ArrowRight />
          </span>
        </Link>
      </div>

      <div className="mt-6 grid grid-col-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Latest;
