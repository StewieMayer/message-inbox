import Header from "../../../../components/Header";
import MessageModal from "./components/message-modal/MessageModal";
import SearchBar from "./components/search-bar/SearchBar";
import { Mail } from "lucide-react";
import { useInboxHeader } from "./hooks/useInboxHeader";

const InboxHeader: React.FC = () => {
  const { handleOpenModal } = useInboxHeader();
  return (
    <Header>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center rounded py-1 px-2 border-b-cyan-800 border-b-2 border-r-cyan-600 border-r-2">
          <Mail className="h-8 w-8 border rounded px-1" />
          <h1 className="text-3xl font-extrabold text-gray-100">MiInbox</h1>
        </div>
        <div className="flex gap-4">
          <SearchBar />
          <button
            className="bg-white text-cyan-700 px-4 py-2 rounded hover:bg-gray-200 hover:cursor-pointer"
            onClick={handleOpenModal}
          >
            New Message
          </button>
          <MessageModal />
        </div>
      </div>
    </Header>
  );
};

export default InboxHeader;
