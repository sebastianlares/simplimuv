import type { Meta, StoryObj } from "@storybook/react";

import ColorBadge from "@/common/components/Motorcycle/ColorBadge";

const meta = {
  title: "Components/Motorcycle/ColorBadge",
  component: ColorBadge,

  argTypes: {
    content: { control: "text" },
    color: { control: "color" },
  },
} satisfies Meta<typeof ColorBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultColorBadge: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    content: "ColorBadge",
    color: "#FF0000",
  },
};
