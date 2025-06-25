// src/components/sections/__tests__/Contact.test.jsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Contact from './Contact';

// Mock del componente SectionTitle
vi.mock('../../common/SectionTitle', () => ({
  default: ({ title, subtitle }) => (
    <div data-testid="section-title">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}));

// Mock de framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>
  }
}));

// Theme básico para MUI
const theme = createTheme();

// Wrapper para proveer el theme de MUI
const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('Contact Component', () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renderiza el componente correctamente', () => {
    renderWithTheme(<Contact />);
    
    expect(screen.getByText('Contacto')).toBeInTheDocument();
    expect(screen.getByText('¿Tienes un proyecto en mente? ¡Conversemos!')).toBeInTheDocument();
    expect(screen.getByText('Información de Contacto')).toBeInTheDocument();
    expect(screen.getByText('Envíame un Mensaje')).toBeInTheDocument();
  });

  it('muestra la información de contacto correcta', () => {
    renderWithTheme(<Contact />);
    
    expect(screen.getByText('matiasbenonip@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Santiago, Chile')).toBeInTheDocument();
    expect(screen.getByText('+56 9 9999 9999')).toBeInTheDocument();
  });

  it('renderiza todos los campos del formulario', () => {
    renderWithTheme(<Contact />);
    
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/asunto/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument();
  });

  it('actualiza los valores de los campos cuando el usuario escribe', async () => {
    renderWithTheme(<Contact />);
    
    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectInput = screen.getByLabelText(/asunto/i);
    const messageInput = screen.getByLabelText(/mensaje/i);
    
    await user.type(nameInput, 'Juan Pérez');
    await user.type(emailInput, 'juan@example.com');
    await user.type(subjectInput, 'Consulta');
    await user.type(messageInput, 'Hola, tengo una consulta');
    
    expect(nameInput).toHaveValue('Juan Pérez');
    expect(emailInput).toHaveValue('juan@example.com');
    expect(subjectInput).toHaveValue('Consulta');
    expect(messageInput).toHaveValue('Hola, tengo una consulta');
  });

  it('muestra errores de validación cuando se envía el formulario vacío', async () => {
    renderWithTheme(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('El nombre es requerido')).toBeInTheDocument();
      expect(screen.getByText('El email es requerido')).toBeInTheDocument();
      expect(screen.getByText('El mensaje es requerido')).toBeInTheDocument();
    });
  });

  it('muestra error cuando el email es inválido', async () => {
    renderWithTheme(<Contact />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    
    await user.type(emailInput, 'email-invalido');
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Email inválido')).toBeInTheDocument();
    });
  });

  it('limpia los errores cuando el usuario comienza a escribir', async () => {
    renderWithTheme(<Contact />);
    
    const nameInput = screen.getByLabelText(/nombre/i);
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    
    // Primero enviar formulario vacío para generar errores
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('El nombre es requerido')).toBeInTheDocument();
    });
    
    // Escribir en el campo debe limpiar el error
    await user.type(nameInput, 'Juan');
    
    await waitFor(() => {
      expect(screen.queryByText('El nombre es requerido')).not.toBeInTheDocument();
    });
  });

  it('envía el formulario cuando todos los campos requeridos están llenos', async () => {
    renderWithTheme(<Contact />);
    
    // Llenar todos los campos requeridos
    await user.type(screen.getByLabelText(/nombre/i), 'Juan Pérez');
    await user.type(screen.getByLabelText(/email/i), 'juan@example.com');
    await user.type(screen.getByLabelText(/mensaje/i), 'Este es mi mensaje');
    
    // Enviar formulario
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    await user.click(submitButton);
    
    // Verificar que se muestra el mensaje de éxito/info
    await waitFor(() => {
      expect(screen.getByText('Funcionalidad en desarrollo :(')).toBeInTheDocument();
    });
  });

  it('resetea el formulario después de un envío exitoso', async () => {
    renderWithTheme(<Contact />);
    
    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/mensaje/i);
    
    // Llenar el formulario
    await user.type(nameInput, 'Juan Pérez');
    await user.type(emailInput, 'juan@example.com');
    await user.type(messageInput, 'Mi mensaje');
    
    // Enviar
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    await user.click(submitButton);
    
    // Verificar que los campos se resetean
    await waitFor(() => {
      expect(nameInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
      expect(messageInput).toHaveValue('');
    });
  });

  it('muestra el snackbar de error cuando hay campos faltantes', async () => {
    renderWithTheme(<Contact />);
    
    // Solo llenar algunos campos
    await user.type(screen.getByLabelText(/nombre/i), 'Juan');
    
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Por favor, completa todos los campos requeridos.')).toBeInTheDocument();
    });
  });

  it('renderiza los enlaces sociales correctamente', () => {
    renderWithTheme(<Contact />);
    
    const linkedinLink = screen.getByLabelText('LinkedIn');
    const githubLink = screen.getByLabelText('GitHub');
    const twitterLink = screen.getByLabelText('Twitter');
    
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/matías-benoni-peralta-1050541a0');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/matiassbp');
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/');
  });

  it('cierra el snackbar cuando se hace click en cerrar', async () => {
    renderWithTheme(<Contact />);
    
    // Enviar formulario para mostrar snackbar
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    await user.click(submitButton);
    
    // Esperar a que aparezca el snackbar
    await waitFor(() => {
      expect(screen.getByText('Por favor, completa todos los campos requeridos.')).toBeInTheDocument();
    });
    
    // Hacer click en el botón de cerrar
    const closeButton = screen.getByRole('button', { name: /close/i });
    await user.click(closeButton);
    
    // Verificar que el snackbar se cierra
    await waitFor(() => {
      expect(screen.queryByText('Por favor, completa todos los campos requeridos.')).not.toBeInTheDocument();
    });
  });
});