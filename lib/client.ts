import { createClient } from "next-sanity";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-11-18'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const authToken = process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN;
export const useCdn = false  

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: authToken,
});