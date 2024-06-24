import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  framework: '@storybook/nextjs',
  staticDirs: ["../public"],
  docs: {
    defaultName: 'Documentation',
  },
};
export default config;
