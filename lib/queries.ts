import { groq } from "next-sanity";

// Get hero images
export const heroImagesQuery = groq`*[_type == 'heroImage']`;

// get all products
export const productsQuery = groq`*[_type == "product"]{
  _id,
  price,
  name,
  "slug":slug.current,
  "categoryName":category->name,
  "imageUrl":images[0].asset->url
  } | order(_createdAt desc)`;

// Get 4 latest products
export const productsLatestQuery = groq`*[_type == "product"][0...4]{
  _id,
  price,
  name,
  "slug":slug.current,
  "categoryName":category->name,
  "imageUrl":images[0].asset->url
  } | order(_createdAt desc)`;

// Get a single product by its slug
export const productQuery = groq`*[_type == "product" && slug.current == $slug][0]{ 
  _id,
  price,
  name,
  description,
  "slug":slug.current,
  "categoryName":category->name,
  images,
  price_id,
  }`;
// Get products by category
export const productQueryByCategory = groq`*[_type == "product" && category->name == $category]{ 
  _id,
  price,
  name,
  "slug":slug.current,
  "categoryName":category->name,
  "imageUrl":images[0].asset -> url
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post"]{
  slug
}`;