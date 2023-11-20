import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SkeletonCard from "./components/SkeletonCard";


function Loading() {
  return (
    <main className="pb-6 sm:pb-8 lg:pb-12">
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
            <Skeleton className="h-[500px] rounded-lg w-[500px]"/>
                
            
          
          </div>
          <div className=" overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <Skeleton className="h-[500px] rounded-lg w-[500px]"/>
          </div>
        </div>
      </div>
    </section>
    
    <section className="mx-auto max-w-2xl  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div className="flex justify-between flex-center ">
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
        {[1,2,3,4].map((product) => (
          <SkeletonCard key={product} />
        ))}
      </div>
    </section>
    </main>
  );
}

export default Loading;