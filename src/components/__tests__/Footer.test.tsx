import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";

// Mockear la fecha actual para que el año en el copyright no cambie con el tiempo
const MOCK_YEAR = 2025;
let dateSpy: jest.SpyInstance;

describe("Footer Component", () => {
  beforeAll(() => {
    dateSpy = jest
      .spyOn(Date.prototype, "getFullYear")
      .mockImplementation(() => MOCK_YEAR);
  });

  afterAll(() => {
    dateSpy.mockRestore();
  });

  test("should render the correct copyright text and year", () => {
    render(<Footer />);

    const expectedText = `© ${MOCK_YEAR} Antonio Amaya. Todos los derechos reservados.`;
    const copyrightElement = screen.getByText(expectedText);

    expect(copyrightElement).toBeInTheDocument();
  });

  test("should render all social media and contact links with correct attributes", () => {
    render(<Footer />);

    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/stewiemayer"
    );
    expect(githubLink).toHaveAttribute("target", "_blank");

    const linkedinLink = screen.getByRole("link", { name: /LinkedIn/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/antonioamayastc/"
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");

    const contactLink = screen.getByRole("link", { name: /Contacto/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute(
      "href",
      "mailto:stewiemayer@hotmail.com"
    );
  });
});
