//next-components
import Image from "next/image";
import Link from "next/link";

//utilis
import { urlForImage } from "../../lib/image";

//components
import { Button } from "@/components/ui/button";
// import Reviews from "./Reviews";

//icons
// import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
// import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { ArrowLeft } from "lucide-react";

//interface
import { productItem } from "../interface";
import ImageGallery from "./ImageGallery";
import AddToBag from "./AddToBag";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function Product(props: { product: productItem }) {
  const product = props.product;

  {
    return (
      <div >
        <Link href="/" className="group text-gray-700  ">
          <div className="flex gap-x-2  group-hover:text-blue-600">
            <ArrowLeft className="w-6" />
            <span>Back To Products</span>
          </div>
        </Link>
        <div className="mx-auto mt-6  max-w-4xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr]  lg:gap-x-8">
          {/* Image gallery */}
          <ImageGallery images={product.images} />
          {/* <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block lg:col-span-1">
              {product.images.map((image,idx) => <Image key={idx}
                 src={urlForImage(image).url()}
                 alt={`${product.name} image`}
                // className="h-full w-full object-cover object-center"
                width={500}
                height={300}
              /> )}
              
            </div> */}

          {/* Product Details and Descriptions */}
          <div className="mt-4 lg:row-span-3 lg:col-span-1 lg:mt-0  ">
            <div className="lg:col-span-1">
              <h1 className="text-2xl font-bold tracking-tight mb-3 text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ${product.price}
            </p>

            {/* Reviews */}
            {/* <Reviews /> */}

            {/* <div className="mt-4">
                {product.countInStock > 0 ? (
                  <div className="flex space-x-2 items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <p className="text-gray-400 text-sm">
                      In Stock and Ready To Ship
                    </p>
                  </div>
                ) : (
                  <div className="flex space-x-2 items-center">
                    <XCircleIcon className="h-6 w-6 text-red-600" />
                    <p className="text-gray-400 text-sm">Unavailable For Now</p>
                  </div>
                )}
              </div> */}

            {/* More details */}
            <div className="py-10 lg:pb-16 lg:pt-6">
              {/* <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div> */}

              {/* <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
            </div>

            {/* <Button
              id={product._id}
              className="flex w-full items-center justify-center rounded-md "
            >
              Add To Bag
            </Button> */}
            <AddToBag
              currency="USD"
              description={product.description}
              image={product.images[0]}
              key={product._id}
              name={product.name}
              price={product.price}
              price_id={product.price_id}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
