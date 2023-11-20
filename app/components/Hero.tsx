import { client } from "@/lib/client";
import { urlForImage } from "@/lib/image";
import { heroImagesQuery } from "@/lib/queries";
import Image from "next/image";



async function Hero() {
  const data = await client.fetch(heroImagesQuery);
 

  return (
    <section className="mx-auto max-w-2xl  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion For Top Price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            earum excepturi itaque maiores explicabo obcaecati quasi sit dicta
            sint. Consectetur in ab exercitationem ipsa consequatur, cum
            blanditiis quae accusantium cumque.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlForImage(data[0].image1).url()}
              alt="image1"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className=" overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlForImage(data[0].image2).url()}
              alt="image1"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
