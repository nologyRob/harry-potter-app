import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import SearchBar from  '../../components/SearchBar/SearchBar'
import Characters from '../../containers/Characters/Characters'

it("should render the Nav", () => {
  // 1. Arrange
  render(<Nav />);

  // 2. Act
  const nav = screen.getByRole("navigation");

  // 3. Assert
  expect(nav).toBeInTheDocument();
});

it("should render the image", () => {
  render(<Nav />);

  // getBy...
  // -> ONLY SINGLE NODE
  // -> ERROR IF MULTIPLES / DOESN'T GET ONE
  const image = screen.getByRole("img");

  // expect and matcher's
  expect(image).toBeInTheDocument();
  expect(image).toBeTruthy();
;
});

it("should render the placeholder text", async () => {
  render(<><Nav /></>);
  const placeholder = screen.queryByPlaceholderText(/Search/i)
  const input = screen.getByRole("textbox");

  expect(placeholder).toBeInTheDocument();


})