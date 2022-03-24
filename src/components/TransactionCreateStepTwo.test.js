import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import TransactionCreateStepTwo from "./TransactionCreateStepTwo"

// test for the button to become enabled and insert a note
//arrange act assert pattern*

test('if an amount and note is entered, the pay button becomes enabled', async () => {
    render(<TransactionCreateStepTwo sender={{ id: '5' }} receiver={{ id: '5' }}/>);

    expect(await screen.findByRole('button', {name: /pay/i})).toBeDisabled()

    userEvent.type(screen.getByPlaceHolderText(/amount/i), "50");
    userEvent.type(screen.getByPlaceHolderText(/add a note/i), "dinner");

    expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled()
});

