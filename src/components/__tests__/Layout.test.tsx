import { render, screen } from '@testing-library/react';
import Layout from '../Layout'; 

jest.mock('../Footer', () => {
  return () => <div data-test-id="mock-footer">Footer Mockeado</div>;
});

// Mockear el Outlet de react-router-dom
jest.mock('react-router-dom', () => ({
  Outlet: () => <div data-test-id="mock-outlet">Contenido de la Página</div>,
}));


describe('Layout Component', () => {

  test('should render the mocked Outlet (page content) and the mocked Footer', () => {

    render(<Layout />);

    const outletContent = screen.getByTestId('mock-outlet');
    expect(outletContent).toBeInTheDocument();
    expect(outletContent).toHaveTextContent('Contenido de la Página');

    const footerContent = screen.getByTestId('mock-footer');
    expect(footerContent).toBeInTheDocument();
    expect(footerContent).toHaveTextContent('Footer Mockeado');
  });

});