import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("Pay button is disabled on initial render", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "6" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("Pay button is enabled if amount and note is entered", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "6" }} />);

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
