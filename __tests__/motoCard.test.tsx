import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

import Card from "@/common/components/Motorcycle/Card";

const mockedData = {
  id: "1",
  name: "Moto",
  seller: "Seller",
  price: "1000",
  currency: "USD",
  image:
    "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_3e3e59c3_195d_4e28_89b3_bcb9ebc4d95f_fb415b4c18.webp",
  color: {
    name: "color",
    hex: "#000",
  },
  details: {
    height: "100",
    category: "category",
    motor: "motor",
  },
  isFeatured: true,
  hasDiscount: true,
  isOnOffer: true,
  variantId: "1",
};

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("Card", () => {
  (useRouter as jest.Mock).mockReturnValue({ query: {} });

  it("renders a card", () => {
    render(<Card {...mockedData} />);

    const div = screen.getByTestId("moto-card");

    expect(div).toBeInTheDocument();
  });
});
