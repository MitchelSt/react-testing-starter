import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "components/TransactionCreateStepTwo";

// Test 1: Component startup.
test("On startup, the Pay button should be disabled.", async () => {
  // Arrange: Rendering the component to be tested.
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  // Assertion: Button with text PAY should be disabled on startup.
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

// Test 2: Form behaviour.
test("If amount and note are written, the Pay button should be enabled.", async () => {
  // Arrange: Rendering the component to be tested.
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  // Action: Enter $ amount.
  userEvent.type(screen.getByPlaceholderText(/amount/i), "100");

  // Action: Enter a note of transaction.
  userEvent.type(
    screen.getByPlaceholderText(/add a note/i),
    "Test button enabled once inputs are filled."
  );

  // Assertion: Button with text PAY should be enabled once both amount and note are filled.
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
