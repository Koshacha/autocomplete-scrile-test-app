import React from 'react';
import App from './App';
import { render, fireEvent } from "@testing-library/react";

describe("Autocomplete", () => {
  it('autocomplete, ch', async () => {
    const { getByRole, getAllByTestId } = render(<App />);
    const searchQuery = 'ch';
    const input = getByRole('textbox');

    fireEvent.change(input, {
      target: {
        value: searchQuery
      }
    });

    const listItems = getAllByTestId('item');
    listItems.forEach((item: HTMLElement) => {
      expect(item).toHaveTextContent(searchQuery);
    });
  });


});


