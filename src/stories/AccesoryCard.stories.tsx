import type { Meta, StoryObj } from "@storybook/react";

import Card from "@/common/components/Accesory/Card";

const meta = {
  title: "Components/Accesory/Card",
  component: Card,

  argTypes: {
    name: { control: "text" },
    currency: { control: "text" },
    price: { control: "text" },
    image: { control: "text" },
    id: { control: "text" },
    isFeatured: { control: "boolean" },
    hasDiscount: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    id: "1",

    name: "Accesorio",
    currency: "USD",
    price: "1000",
    image:
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_3e3e59c3_195d_4e28_89b3_bcb9ebc4d95f_fb415b4c18.webp",
    isFeatured: true,
    hasDiscount: true,
    isOnOffer: true,
  },
};
