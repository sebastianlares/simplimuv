/* eslint-disable no-console */
import type { Meta, StoryObj } from "@storybook/react";

import VersionCard from "@/common/components/Motorcycle/VersionCard";

const meta = {
  title: "Components/Motorcycle/VersionCard",
  component: VersionCard,

  argTypes: {
    name: { control: "text" },
    color: { control: "color" },
    price: { control: "text" },
    details: { control: "object" },
    isActive: { control: "boolean" },
  },
} satisfies Meta<typeof VersionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultChip: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    name: "Version",
    color: {
      name: "red",
      hex: "#FF0000",
    },
    price: "1000",
    details: {
      motor: "V8",
      power: "1000",
      id: "1",
    },
    isActive: true,
  },
};
