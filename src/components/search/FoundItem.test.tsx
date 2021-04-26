import FoundItem from "./FoundItem";
import { render } from "@testing-library/react";

describe('FoundItem: ', () => {
  let container: HTMLDivElement;
  const testUser = {
    name: 'Ilya Mazunin',
    username: 'Koshacha',
    picture: 'https://picsum.photos/200'
  };

  test('should render correctly', () => {
    const { getByText } = render(<FoundItem { ...testUser } inputHandler={() => {}} />);
    expect(getByText(/Ilya Mazunin/i)).toBeTruthy();
    expect(getByText(/Koshacha/i)).toBeTruthy();
  });
});
