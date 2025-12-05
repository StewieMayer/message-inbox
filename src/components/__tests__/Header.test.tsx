import { render, screen } from '@testing-library/react';
import Header from '../Header'; 

describe('Header Component', () => {

  test('should render the children content passed to it', () => {
    const testContent = "Este es el contenido de prueba del Header";
    
    render(<Header>{testContent}</Header>);

    const contentElement = screen.getByText(testContent);

    expect(contentElement).toBeInTheDocument();

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });
  
});