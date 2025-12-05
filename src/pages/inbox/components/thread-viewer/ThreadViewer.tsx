import { Send } from "lucide-react";
import { useThreadViewer } from "./hooks/useThreadViewer";

const ThreadViewer: React.FC = () => {
  const {
    currentTread,
    handleChange,
    handleSendReply,
    isError,
    isLoading,
    message,
  } = useThreadViewer();
  return (
    <div className="flex grow p-6 bg-white shadow-xl overflow-hidden flex-col">
      {!currentTread ? (
        <div className="flex grow items-center justify-center font-bold text-2xl text-gray-300">
          Selecciona una conversación para ver los mensajes
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {currentTread.messages.map(({ subject, date, body, id }) => (
            <div className="flex flex-col grow overflow-y-auto pr-2" key={id}>
              <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
                {subject}
              </h2>
              <p className="text-sm text-gray-500 mb-6 border-b pb-4">{date}</p>
              <div className="text-gray-700 flex grow leading-relaxed whitespace-pre-line mb-10">
                <p>{body}</p>
              </div>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200 shrink-0">
            {isError && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                Ocurrió un error al enviar la respuesta. Por favor, inténtalo de
                nuevo.
              </div>
            )}
            <form>
              <textarea
                onChange={handleChange}
                value={message}
                name="message"
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
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div
                        className="
                    h-5 w-5 border-2 border-white border-t-transparent rounded-full 
                    animate-spin
                "
                      ></div>
                      Enviando...
                    </div>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Enviar
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default ThreadViewer;
