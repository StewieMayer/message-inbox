# Message Inbox

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-5.103-blue?logo=webpack&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-blue?logo=tailwindcss&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-30.2-red?logo=jest&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.11-purple?logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.10-red?logo=reactrouter&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-blue?logo=react&logoColor=white)

## Descripción
Aplicación de bandeja de entrada de mensajes construida con React, Redux Toolkit, Webpack y Tailwind CSS.

## Instalación y Uso

### Instalación
```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd message-inbox

# Install dependencies
npm install
```

### Ejecución
```bash
# Start the development server
npm start
```

### Construcción
```bash
# Build for production
npm run build
```

### Pruebas
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

### Configuración de API
Para que la aplicación funcione correctamente, es necesario configurar la URL base de la API. Crea un archivo `.env` en la raíz del proyecto con la siguiente variable:

```
BASE_URL=tu_url_de_api
```
Asegúrate de reemplazar `tu_url_de_api` con la dirección de tu API.

## Diseño

La arquitectura de la aplicación sigue un enfoque modular y basado en componentes, aprovechando las capacidades de React para construir interfaces de usuario interactivas y reutilizables. A continuación, se detallan los principales patrones de diseño e implementación utilizados:

### Patrones de Diseño Arquitectónico

*   **Arquitectura Basada en Componentes**: La UI se descompone en componentes React encapsulados y reutilizables, facilitando la gestión y el mantenimiento de la interfaz.
*   **Gestión de Estado Centralizada (Redux Toolkit)**: Se utiliza Redux Toolkit para una gestión predecible y escalable del estado global de la aplicación, implementando patrones como `Store`, `Slices` (que combinan `Actions` y `Reducers`), y `Selectors`.
*   **Interacción con APIs (RTK Query)**: Integrado con Redux Toolkit, RTK Query gestiona las llamadas a la API de forma declarativa, proveyendo funcionalidades de caching, invalidación, y manejo de estados de carga/error, lo que simplifica enormemente la capa de acceso a datos.

### Patrones de Implementación

*   **Hooks de React**: Se hace uso extensivo de los Hooks de React, incluyendo hooks personalizados (e.g., `useAuth`, `useDebounce`, `useMessageModal`), para encapsular lógica con estado y reutilizarla entre componentes, promoviendo un código más limpio y modular.
*   **Tipado Estático (TypeScript)**: El proyecto está construido con TypeScript para asegurar la robustez del código, la detección temprana de errores y una mejor experiencia de desarrollo a través de la autocompletado y la refactorización segura.
*   **Estilización Utility-First (Tailwind CSS)**: La aplicación emplea Tailwind CSS, un framework CSS de primera utilidad, para construir interfaces directamente en el marcado con clases CSS predefinidas. Esto agiliza el proceso de estilización y garantiza la consistencia visual.
*   **Rutas Protegidas (React Router)**: Se implementan rutas protegidas utilizando React Router para controlar el acceso a ciertas partes de la aplicación basándose en el estado de autenticación del usuario.
*   **Formularios Controlados**: Los formularios son gestionados como componentes controlados por React, donde el estado del formulario se mantiene en el estado del componente y se actualiza a través de controladores de eventos.

## Razones Técnicas

### RTK (Redux Toolkit)
Se eligió Redux Toolkit (RTK) como la solución preferente para la gestión del estado de la aplicación y la interacción con APIs. RTK ofrece un enfoque moderno y eficiente, simplificando el manejo de la lógica de datos y las operaciones asíncronas, lo que se traduce en un código más robusto y mantenible en comparación con implementaciones manuales con `fetch` o `axios`.

### Webpack
Webpack fue seleccionado por su flexibilidad y capacidad de personalización en la configuración del proceso de bundling. Permite optimizar la carga de recursos, modularizar el código de manera eficiente y mantener una estructura de proyecto organizada y limpia.

### Tailwind CSS
La elección de Tailwind CSS se basó en su enfoque de "utility-first", que facilita una estilización rápida y altamente personalizable. Su sistema de clases atómicas reduce la necesidad de escribir CSS personalizado, promueve la consistencia en el diseño y mejora la mantenibilidad del código, superando a otras librerías como Bootstrap en términos de granularidad y adaptabilidad.

## API Rest

### Instrucciones
Se necesita una API REST a la cual se debe apuntar por medio de un `.env` con la variable `BASE_URL`.

### Contratos
La aplicación interactúa con las siguientes APIs. La `BASE_URL` se debe configurar para apuntar a la raíz de tu servicio API.

#### `notificationApi`
*   **GET /notifications**: Obtiene una lista de notificaciones.
    *   **Respuesta**: `Array<Notification>`

```typescript
export interface Notification{
  id: string;
  type: string;
  content: string;
  date: string;
}
```

#### `threadApi`
*   **GET /threads**: Obtiene una lista de hilos, con parámetros de consulta opcionales.
    *   **Parámetros**: `ThreadsParams` (objeto para filtrado/paginación)
    *   **Respuesta**: `Array<Thread>`
*   **GET /threads/{threadId}**: Obtiene un hilo específico por su ID.
    *   **Parámetros**: `threadId` (string)
    *   **Respuesta**: `Thread`
*   **POST /threads**: Crea un nuevo hilo.
    *   **Cuerpo de la Petición**: `NewThread` (objeto que representa el nuevo hilo)
    *   **Respuesta**: (depende de la implementación, `any` en el código actual)
*   **POST /threads/{threadId}/messages**: Responde a un hilo específico.
    *   **Parámetros**: `threadId` (string)
    *   **Cuerpo de la Petición**: `message` (objeto que representa el mensaje)
    *   **Respuesta**: (depende de la implementación, `any` en el código actual)

```typescript
export interface Message {
  id: string;
  subject: string;
  date: string;
  body: string;
}

export interface Thread {
  id: string;
  sender: string;
  title: string;
  messages: Array<Message>;
}

export interface NewThread {
  sender: string;
  title: string;
  message: Omit<Message, "id">;
}

export interface ThreadsParams {
  page?: number;
  limit?: number;
  search?: string;
  sort?: string;
  order?: string;
}

export interface ResponseThreads {
  threadId: string;
  message: Omit<Message, "id">;
}
```

#### `authApi`
*   **POST /login**: Inicia sesión de usuario.
    *   **Cuerpo de la Petición**: `LoginPayload` (credenciales de usuario)
    *   **Respuesta**: `LoginResponse`
*   **POST /logout**: Cierra la sesión del usuario.
    *   **Respuesta**: `LogoutResponse`
*   **GET /is-logged-in**: Verifica si el usuario está actualmente logueado.
    *   **Respuesta**: `IsLoggedInResponse` (objeto con una propiedad `loggedIn: boolean`)
*   **POST /refresh-token**: Refresca el token de autenticación.
    *   **Respuesta**: `LoginResponse`

```typescript
export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  t: string;
  rt: string;
}

export interface LogoutResponse {
  message: string;
}

export interface IsLoggedInResponse {
  loggedIn: boolean;
}

export interface RefreshTokenResponse {
  t: string;
  rt: string;
}
```

## Uso de IA
La Inteligencia Artificial (IA) fue empleada en este proyecto para la generación de tests unitarios y la maquetación inicial de componentes. Esta estrategia permitió optimizar los tiempos de desarrollo, focalizando los esfuerzos en la lógica de negocio y asegurando una coherencia en la experiencia de usuario (UX) e interfaz de usuario (UI). En el proceso de testing, se generaron pruebas que posteriormente fueron validadas y ajustadas manualmente para garantizar su precisión y cobertura.

## Complicaciones
Durante el desarrollo, se presentaron desafíos en la configuración de alias de importación (e.g., `@app`), lo que requirió ajustes específicos en la configuración de Jest para su correcta resolución. Adicionalmente, la ausencia de una API backend en las fases iniciales de desarrollo fue gestionada mediante el uso de mocks y datos hardcodeados, permitiendo así el progreso del frontend.

## Áreas de Mejora
Como Producto Mínimo Viable (MVP), se han identificado las siguientes áreas clave para futuras mejoras:
*   Fortalecer la implementación de la autenticación y la gestión de sesiones para una mayor seguridad y robustez.
*   Integrar un sistema de notificaciones en la interfaz de usuario y desarrollar funcionalidades para acceder a listados de contactos en el modal de creación de nuevos hilos.
*   Optimizar la experiencia de usuario (UX) del visualizador de hilos, implementando un diseño de conversación que distinga claramente los mensajes del remitente y del emisor.
*   Ajustar el comportamiento del scroll en el visualizador de mensajes para asegurar que siempre se posicione automáticamente al final de la conversación.

## Autor
Antonio Amaya