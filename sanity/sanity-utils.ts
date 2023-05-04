import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { About } from "types/About";

export async function getAbouts(): Promise<About[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "abouts"]{
      _id,
      _createdAt,
      title,
      description,
      image,
      "imageUrl": image.asset->url
    }`
  );
}
