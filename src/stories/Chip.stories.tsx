import type { Meta, StoryObj } from "@storybook/react";

import Chip from "@/common/components/Chip";

const meta = {
  title: "Components/Motorcycle/Chip",
  component: Chip,

  argTypes: {
    content: { control: "text" },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultChip: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    content: "Chip",
  },
};
