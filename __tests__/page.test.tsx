import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Page from "../src/app/page";
import { describe } from "node:test";
import { UserProvider } from "@auth0/nextjs-auth0/client";

describe("Page", () => {
  it("renders a login button", async () => {
    render(
      <UserProvider>
        <Page />
      </UserProvider>
    );

    await waitFor(() => {
      const loginButton = screen.getByTestId("LoginBtn");

      expect(loginButton).toBeInTheDocument();
    });
  });
});
