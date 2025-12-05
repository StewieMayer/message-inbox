import InboxHeader from "./components/inbox-header/InboxHeader";
import MessageModal from "./components/message-modal/MessageModal";
import ThreadContainer from "./components/thread-container/ThreadContainer";
import ThreadViewer from "./components/thread-viewer/ThreadViewer";

const InboxPage: React.FC = () => {
  return (
    <div className="flex flex-col grow">
      <InboxHeader />
      <main className="flex grow p-5 gap-5 bg-blue-100">
        <ThreadContainer />
        <ThreadViewer />
      </main>
      <MessageModal />
    </div>
  );
};

export default InboxPage;
