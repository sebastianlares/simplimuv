import type { Meta, StoryObj } from "@storybook/react";

import Card from "@/common/components/Motorcycle/Card";

const meta = {
  title: "Components/Motorcycle/Card",
  component: Card,

  argTypes: {
    color: { control: "color" },
    name: { control: "text" },
    currency: { control: "text" },
    price: { control: "text" },
    seller: { control: "text" },
    image: { control: "text" },
    details: { control: "object" },
    id: { control: "text" },
    variantId: { control: "text" },
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
    details: {
      motor: "V8",
      category: "Motorcycle",
      height: "100",
    },
    color: {
      name: "red",
      hex: "#FF0000",
    },
    name: "Moto",
    currency: "USD",
    price: "1000",
    seller: "Seller",
    image:
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_3e3e59c3_195d_4e28_89b3_bcb9ebc4d95f_fb415b4c18.webp",
    isFeatured: true,
    hasDiscount: true,
    isOnOffer: true,
    variantId: "1",
  },
};
