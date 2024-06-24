import type { Meta, StoryObj } from "@storybook/react";

import Carousel from "@/common/components/Carousel";

const meta = {
  title: "Components/Carousel",
  component: Carousel,

  argTypes: {
    images: { control: "object" },
    alt: { control: "text" },
    height: { control: "number" },
    width: { control: "number" },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCarousel: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    images: [
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_3e3e59c3_195d_4e28_89b3_bcb9ebc4d95f_fb415b4c18.webp",
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_3e3e59c3_195d_4e28_89b3_bcb9ebc4d95f_fb415b4c18.webp",
      "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_3e3e59c3_195d_4e28_89b3_bcb9ebc4d95f_fb415b4c18.webp",
    ],
    width: 300,
    height: 300,
    alt: "Carousel",
  },
};
