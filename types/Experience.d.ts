import { WorkExperience } from "./WorkExperience";

export type Experience = {
  _id: string;
  createdAt: Date;
  year: string;
  works: WorkExperience[];
};
