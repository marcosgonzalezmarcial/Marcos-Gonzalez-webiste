import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
// import { About } from "types/About";
import { Work } from "types/Work";

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
export async function getWorks(): Promise<Work[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "works"]{
      _id,
      _createdAt,
      title,
      description,
      projectLink,
      codeLink,
      image,
      tags,
      "imageUrl": image.asset->url
    }`
  );
}
