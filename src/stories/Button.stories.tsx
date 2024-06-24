import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/common/components/Button";

const meta = {
  title: "Components/Button",
  component: Button,

  argTypes: {
    content: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    content: "Button",
  },
};
