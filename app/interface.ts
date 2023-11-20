import { SanityImageObject } from "@sanity/image-url/lib/types/types"

export interface simplifiedProduct {
    _id: string,
    imageUrl: string,
    name: string,
    slug: string,
    categoryName: string,
    price: number
}

export interface productItem {
    _id: string,
    name: string,
    slug: string,
    categoryName: string,
    price: number,
    description:string,
    images: SanityImageObject[],
    price_id:string,
}