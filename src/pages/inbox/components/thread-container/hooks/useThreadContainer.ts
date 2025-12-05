import { selectInboxState, setCurrentThread } from "@app/features/inboxSlice";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { Thread } from "src/types/inboxTypes";

export const useThreadContainer = () => {
  const { currentThreads } = useAppSelector(selectInboxState);
  const dispatch = useAppDispatch();

  const handleClickThread = (thread: Thread) => {
    dispatch(setCurrentThread(thread));
  };
  return { currentThreads, handleClickThread };
};
