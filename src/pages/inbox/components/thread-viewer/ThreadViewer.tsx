import { Send } from "lucide-react";

const ThreadViewer: React.FC = () => {
  return (
    <div className="flex grow p-6 bg-white shadow-xl overflow-hidden flex-col">
      <div className="flex flex-col grow overflow-y-auto pr-2">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-2">Subject</h2>
        <p className="text-sm text-gray-500 mb-6 border-b pb-4">Hora</p>
        <div className="text-gray-700 flex grow leading-relaxed whitespace-pre-line mb-10">
          <p>Cuerpo del mensaje</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 shrink-0">
        <form>
          <textarea
            placeholder="Escribir respuesta..."
            rows={2}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-150 resize-none text-gray-700"
          />

          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition duration-200 shadow-md hover:cursor-pointer
              }`}
            >
              <Send className="h-5 w-5" />
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ThreadViewer;
