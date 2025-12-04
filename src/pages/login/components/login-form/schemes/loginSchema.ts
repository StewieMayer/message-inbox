import { z } from "zod";

// Definimos el esquema de validación para el formulario de login
export const loginSchema = z.object({
  email: z
    .email({ message: "Por favor, introduce una dirección de correo válida." })
    .min(1, { message: "El correo electrónico es requerido." }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres." }),
});

// Extraemos el tipo de TypeScript directamente del esquema de Zod.
export type LoginFormInputs = z.infer<typeof loginSchema>;
