import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { About } from "types/About";
import { Work } from "types/Work";
import { Skill } from "types/Skill";
import { Experience } from "types/Experience";

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

export async function getSkills(): Promise<Skill[]> {
  const skillsQuery = '*[_type == "skills"]';

  return createClient(clientConfig).fetch(
    groq`${skillsQuery}{
        _id,
        _createdAt,
        name,
        bgColor,
        icon,
        "imageUrl": icon.asset->url
      }`
  );
}
export async function getExperiences(): Promise<Experience[]> {
  const experiencesQuery = '*[_type == "experiences"]';

  return createClient(clientConfig).fetch(
    groq`${experiencesQuery}`
    // groq`${experiencesQuery}{
    //     _id,
    //     _createdAt,
    //     works,
    //     year,
    //   }`
  );
}

// {
//   _id: "ee3e1e55-b3ab-4f12-91ea-3f6aaac55c98";
//   _createdAt: "2023-05-09T16:10:02Z";
//   _updatedAt: "2023-05-09T16:11:18Z";
//   works: [{}];
//   year: "2021";
//   _rev: "KGEi6BBH71oXTwp6honRBk";
//   _type: "experiences";
// }
