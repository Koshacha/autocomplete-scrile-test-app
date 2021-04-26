import SearchBar from "./SearchBar";
import { render } from "@testing-library/react";

describe('SearchBar: ', () => {
  let container: HTMLDivElement;

  test('should render correctly', () => {
    const { getByPlaceholderText } = render(<SearchBar query="Test Query" inputHandler={() => {}} />);
    expect(getByPlaceholderText(/Search/i)).toBeTruthy();
  });
});
