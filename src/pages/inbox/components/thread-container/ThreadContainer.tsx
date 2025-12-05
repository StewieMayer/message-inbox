import { MessageSquare } from "lucide-react";

const ThreadContainer: React.FC = () => {
  return (
    <div className="w-full min-h-full md:w-80 bg-white overflow-hidden flex flex-col border border-gray-200 shadow-xl">
      <div className="p-4 border-b border-gray-200 flex items-center gap-2 bg-cyan-600 text-white">
        <MessageSquare className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Lista de Conversaciones</h3>
      </div>

      <div className="flex min-h-full grow overflow-y-scroll"></div>
    </div>
  );
};
export default ThreadContainer;
