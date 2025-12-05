import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { Send, X } from "lucide-react";
import { useMessageModal } from "./hooks/useMessageModal";

const MessageModal: React.FC = () => {
  const {
    formHeaderData,
    handleChange,
    messageBody,
    handleCloseModal,
    handleSubmit,
    isError,
    isLoading,
    messageModalOpen,
  } = useMessageModal();

  return (
    <>
      <Dialog
        open={messageModalOpen}
        onClose={handleCloseModal}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-full max-w-3xl h-[60vh] transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-2xl transition-all flex flex-col">
            <div className="p-4 border-b border-b-gray-300 flex justify-between items-center bg-cyan-600/5">
              <DialogTitle className="text-xl font-bold text-gray-800">
                Nuevo Mensaje
              </DialogTitle>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 p-2 rounded-full hover:bg-gray-200 transition duration-150"
                title="Cerrar"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            {isError ? (
              <div className="flex grow flex-col items-center justify-center p-4 gap-6">
                <div className="flex grow  items-center justify-center text-center">
                  <div className="p-4 bg-red-100 text-red-700">
                    Ocurrió un error al enviar el mensaje. Por favor, inténtalo
                    de nuevo.
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition duration-200 shadow-md bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200"
                >
                  Cerrar
                </button>{" "}
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col flex-1 overflow-hidden"
              >
                <div className="p-4 space-y-3 border-b border-b-gray-200">
                  <input
                    type="text"
                    name="sender"
                    value={formHeaderData.sender}
                    onChange={handleChange}
                    placeholder="Para:"
                    className="w-full p-2 border-b border-gray-200 focus:outline-none focus:border-cyan-500 transition duration-150 text-gray-700 placeholder-gray-500"
                  />
                  <input
                    type="text"
                    name="title"
                    value={formHeaderData.title}
                    onChange={handleChange}
                    placeholder="Asunto:"
                    className="w-full p-2 border-b border-gray-200 focus:outline-none focus:border-cyan-500 transition duration-150 text-gray-700 placeholder-gray-500"
                  />
                </div>

                <div className="flex-1 p-4 overflow-y-scroll">
                  <textarea
                    placeholder="Escribe tu mensaje aquí..."
                    name="messageBody"
                    value={messageBody}
                    onChange={handleChange}
                    className="w-full h-full p-2 resize-none focus:outline-none text-gray-700 placeholder-gray-500 "
                  />
                </div>

                <div className="p-4 border-t border-t-gray-300 flex justify-end gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-6 py-2 rounded-lg font-semibold transition duration-200 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition duration-200 shadow-md bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200`}
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
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MessageModal;
