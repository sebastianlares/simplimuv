import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

import ContactForm from "@/modules/ContactForm";

const mockedData = {
  motoId: "1",
  accesoriesId: ["1", "2"],
};

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

it("renders a form with a name, email message, phone and submit button", () => {
  (useRouter as jest.Mock).mockReturnValue({ query: {} });
  render(<ContactForm {...mockedData} />);
  const name = screen.getByLabelText(/Nombre/i);
  const lastName = screen.getByLabelText(/Apellido/i);
  const email = screen.getByLabelText(/Email/i);
  const phone = screen.getByLabelText(/Teléfono/i);
  const button = screen.getByRole("button");

  expect(name).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(phone).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
