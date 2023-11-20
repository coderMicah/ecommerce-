import Link from "next/link";
import { urlForImage } from "../../lib/image";
import { simplifiedProduct } from "../interface";
import Image from "next/image";

function ProductItem(props: { product: simplifiedProduct }) {
  const product = props.product;

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md h-[300px] bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={urlForImage(product.imageUrl).url()}
          alt={`${product.name} image`}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          width={200}
          height={500}
        />
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`product/${product.slug}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
