import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function SkeletonCard() {
  return (
    <div>
      <Skeleton className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  h-[500px] bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" />

      <div className="mt-4 flex items-center justify-between">
        <Skeleton className="h-4 w-2/5" />
        <Skeleton className="mt-1 h-4 w-1/6" />
      </div>
      <Skeleton className="mt-2 h-2 w-1/6 " />
    </div>
  );
}

export default SkeletonCard;
