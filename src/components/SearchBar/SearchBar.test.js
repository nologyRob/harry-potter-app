import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

it("should render the Nav", () => {
  // 1. Arrange
  render(<SearchBar />);

  // 2. Act
  const placeholder = screen.getByPlaceholderText("search");

  // 3. Assert
  expect(nav).toBeInTheDocument();
});