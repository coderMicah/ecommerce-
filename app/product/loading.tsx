import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
      <Skeleton className="h-6 w-3/12" />
      <div className="mx-auto max-w-4xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr]  lg:gap-x-8">
        <Skeleton className="mt-6 h-[500px] w-full rounded-lg"/>

        <div className="mt-4 lg:row-span-3 lg:col-span-1 lg:mt-0  ">
          <div className="lg:col-span-1 mb-3">
            <Skeleton className="h-12 w-1/2 mb-3" />
          </div>

          <h2 className="sr-only">Product information</h2>
          <Skeleton className="h-8 w-2/6" />

          <div className="py-10 lg:pb-16 lg:pt-6">
            <div className="mt-10">
              <Skeleton className="h-6 w-2/6" />

              <div className="mt-4 space-y-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4  w-full" />
                <Skeleton className="h-4  w-full" />
              </div>
            </div>
          </div>

          <Skeleton className="h-16 w-full mt-6"/>

         
        </div>
      </div>
    </div>
  );
}

export default loading;
