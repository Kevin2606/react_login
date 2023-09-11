import { MemoryRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react";
import { SignIn } from "../../src/components/SignIn";

describe("SignIn", () => {
  it("verificar que se encuentre el texto en el DOM", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <SignIn />
      </MemoryRouter>);
    const text = screen.getByText("SIGN IN");
    expect(text).toBeInTheDOM;
  });
});

