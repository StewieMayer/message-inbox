import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";
import { useSearchBar } from "../hooks/useSearchBar";

jest.mock("../hooks/useSearchBar", () => ({
  useSearchBar: jest.fn(),
}));

const mockHandleChange = jest.fn();
const mockSearchValue = "initial search";

const mockUseSearchBar = (value = mockSearchValue) => ({
  handleChange: mockHandleChange,
  searchValue: value,
});

describe("SearchBar Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useSearchBar as jest.Mock).mockReturnValue(mockUseSearchBar());
  });

  test("should render the search input and the search icon", () => {
    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText("Buscar...");
    expect(searchInput).toBeInTheDocument();

    expect(searchInput).toHaveValue(mockSearchValue);

    const searchIcon = screen.getByTestId("search-icon");
    expect(searchIcon).toBeInTheDocument();
  });

  test("should call handleChange when the user types in the input field", () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText("Buscar...");
    const newSearchValue = "new query";

    fireEvent.change(searchInput, { target: { value: newSearchValue } });

    expect(mockHandleChange).toHaveBeenCalledTimes(1);

  });
});
