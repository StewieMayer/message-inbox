import {
  selectInboxState,
  setMessageModalOpen,
} from "@app/features/inboxSlice";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { useSetThreatMutation } from "@app/query/threadApi";
import { useState } from "react";
import { NewThread } from "src/types/inboxTypes";

export const useMessageModal = () => {
  const dispatch = useAppDispatch();
  const { messageModalOpen } = useAppSelector(selectInboxState);
  const [setThreat, { isLoading, isError, reset }] = useSetThreatMutation();
  const [formHeaderData, setFormHeaderData] = useState<
    Omit<NewThread, "message">
  >({
    title: "",
    sender: "",
  });
  const [messageBody, setMessageBody] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "messageBody") return setMessageBody(value);

    setFormHeaderData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseModal = () => {
    dispatch(setMessageModalOpen(false));
    reset();
    setFormHeaderData({
      title: "",
      sender: "",
    });
    setMessageBody("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setThreat({
      ...formHeaderData,
      message: {
        body: messageBody,
        date: new Date().toISOString(),
        subject: formHeaderData.title,
      },
    });
  };

  return {
    handleCloseModal,
    handleSubmit,
    isLoading,
    isError,
    handleChange,
    formHeaderData,
    messageBody,
    messageModalOpen,
  };
};
