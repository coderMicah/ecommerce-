import React from 'react'
import SkeletonCard from '../components/SkeletonCard'
import { Skeleton } from '@/components/ui/skeleton'

function loading() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between flex-center">
        <Skeleton className='h-6 w-1/6'/>
       
      </div>

      <div className="mt-6 grid grid-col-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {"1234".split("").map((i) => (
          <SkeletonCard key={i}/>
        ))}
      </div>
    </div>
  )
}

export default loading