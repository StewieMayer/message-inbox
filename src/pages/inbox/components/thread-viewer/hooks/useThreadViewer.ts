import { selectInboxState } from "@app/features/inboxSlice";
import { useAppSelector } from "@app/hooks";
import { useRespondToThreadMutation } from "@app/query/threadApi";
import { useState } from "react";

export const useThreadViewer = () => {
  const { currentTread } = useAppSelector(selectInboxState);
  const [respond, { isLoading, isError, reset }] = useRespondToThreadMutation();
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isError || isLoading) {
      reset();
    }
    setMessage(e.target.value);
  };

  const handleSendReply = () => {
    if (!currentTread) return;

    if (isError || isLoading) {
      reset();
    }

    const { id, messages } = currentTread;
    const lastMessage = messages[messages.length - 1];

    const date = new Date().toISOString();
    const subject = `Re: ${lastMessage.subject}`;

    respond({
      threadId: id,
      message: { body: message, date, subject },
    });
  };

  return {
    currentTread,
    handleChange,
    handleSendReply,
    message,
    isLoading,
    isError,
  };
};
