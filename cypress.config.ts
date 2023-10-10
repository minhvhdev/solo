import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'e8inqm',
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
