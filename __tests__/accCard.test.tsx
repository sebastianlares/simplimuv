import { render, screen } from "@testing-library/react";

import Card from "@/common/components/Accesory/Card";

const mockedData = {
  id: "1",
  name: "Moto",
  seller: "Seller",
  price: "1000",
  currency: "USD",
  image:
    "https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_3e3e59c3_195d_4e28_89b3_bcb9ebc4d95f_fb415b4c18.webp",
  isFeatured: true,
  hasDiscount: true,
  isOnOffer: true,
  variantId: "1",
};

// Mock useRouter:
jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
    usePathname: () => ({
      get: () => {},
    }),
  };
});

describe("Card", () => {
  it("renders a card", () => {
    render(<Card {...mockedData} />);

    const div = screen.getByTestId("accesory-card");

    expect(div).toBeInTheDocument();
  });
});
