/* eslint-disable no-console */
import type { Meta, StoryObj } from "@storybook/react";

import Input from "@/common/components/Input";

const meta = {
  title: "Components/Input",
  component: Input,

  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
    name: { control: "text" },
    type: { control: "text" },
    error: { control: "text" },
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultChip: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    value: "Value",
    label: "Label",
    name: "Name",
    type: "text",
    error: "Error",
    onChange: () => console.log("onChange"),
  },
};
