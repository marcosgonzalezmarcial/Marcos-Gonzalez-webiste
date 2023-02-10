import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "hprji8ub",
  dataset: "production",
  title: "Marcos Gonzalez website",
  apiVersion: "2023-04-25",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
