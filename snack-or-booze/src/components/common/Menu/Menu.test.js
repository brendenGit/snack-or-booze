import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';

import Menu from "./Menu";


describe("Menu component", () => {
  const snacks = [
    { id: 1, name: "Snack1" },
    { id: 2, name: "Snack2" },
  ];

  const drinks = [
    { id: 3, name: "Drink1" },
    { id: 4, name: "Drink2" },
    {
      id: "martini",
      name: "Martini",
      description: "An ice-cold, refreshing classic.",
      recipe: "Mix 3 parts vodka & 1 part dry vermouth.",
      serve: "Serve very cold, straight up."
    }
  ];

  const snacksItems = { snacks };
  const drinksItems = { drinks };

  it("renders the Snacks menu correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Menu items={snacksItems} />
      </MemoryRouter>
    );
    expect(getByText("Snacks Menu")).toBeInTheDocument();
    snacks.forEach((snack) => {
      expect(screen.getByText(snack.name)).toBeInTheDocument();
    });
  });

  it("renders the Drinks menu correctly", () => {
    render(
      <MemoryRouter>
        <Menu items={drinksItems} />
      </MemoryRouter>
    );
    expect(screen.getByText("Drinks Menu")).toBeInTheDocument();
    drinks.forEach((drink) => {
      expect(screen.getByText(drink.name)).toBeInTheDocument();
    });
  });

  it("navigates to the '/' URL when an unkown item is clicked", () => {
    render(
      <MemoryRouter>
        <Menu items={snacksItems} />
      </MemoryRouter>
    );
    const snackLink = screen.getByText("Snack1");
    fireEvent.click(snackLink);
    expect(window.location.pathname).toBe("/");
  });

});
