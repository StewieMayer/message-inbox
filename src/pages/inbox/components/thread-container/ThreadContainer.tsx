import { MessageSquare } from "lucide-react";
import { useThreadContainer } from "./hooks/useThreadContainer";

const ThreadContainer: React.FC = () => {
  const { currentThreads, handleClickThread } = useThreadContainer();
  return (
    <div className="w-full min-h-full md:w-80 bg-white overflow-hidden flex flex-col border border-gray-200 shadow-xl">
      <div className="p-4 border-b border-gray-200 flex items-center gap-2 bg-cyan-600 text-white">
        <MessageSquare className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Lista de Conversaciones</h3>
      </div>

      <div className="flex flex-col min-h-full grow overflow-y-scroll">
        {currentThreads.map((thread) => (
          <div
            key={thread.id}
            className="flex gap-3 px-4 items-center py-3 border-b border-gray-200 hover:bg-blue-100 cursor-pointer"
            onClick={() => handleClickThread(thread)}
          >
            <h4 className="font-bold text-lg text-gray-600">{thread.sender}</h4>
            <p className="text-sm text-gray-500">{thread.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ThreadContainer;
