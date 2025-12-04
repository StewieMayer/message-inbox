import useLoginForm from "./hooks/useLoginForm";

const LoginForm: React.FC = () => {
  const { handleSubmit, handleChange, errors, isLoading } = useLoginForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 p-8 bg-white shadow-xl rounded-lg w-full max-w-sm border-t-4 border-cyan-700/50"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Iniciar Sesión
      </h2>

      <div className="flex flex-col">
        <input
          className={`
                            p-3 border-2 rounded-md 
                            focus:outline-none focus:ring-2 focus:ring-cyan-500 
                            transition duration-150 ease-in-out
                            ${
                              errors.email
                                ? "border-red-500"
                                : "border-gray-300"
                            }  disabled:bg-gray-50
                        `}
          type="email"
          name="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          required
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="flex flex-col">
        <input
          className={`
                            p-3 border-2 rounded-md 
                            focus:outline-none focus:ring-2 focus:ring-cyan-500 
                            transition duration-150 ease-in-out
                            ${
                              errors.password
                                ? "border-red-500"
                                : "border-gray-300"
                            }  disabled:bg-gray-50
                        `}
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
          required
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <button
        className="
                        p-3 mt-2 
                        bg-cyan-700 text-white font-semibold rounded-md 
                        hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-200 
                        transition duration-150 ease-in-out 
                        disabled:opacity-50 disabled:cursor-not-allowed
                        hover:cursor-pointer
                    "
        disabled={
          isLoading ||
          errors.email !== undefined ||
          errors.password !== undefined
        }
        type="submit"
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-3">
            {/* El Spinner animado */}
            <div
              className="
                    h-5 w-5 border-2 border-white border-t-transparent rounded-full 
                    animate-spin
                "
            ></div>
            Cargando...
          </div>
        ) : (
          "Iniciar Sesión"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
