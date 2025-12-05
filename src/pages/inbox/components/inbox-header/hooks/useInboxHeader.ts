import { setMessageModalOpen } from "@app/features/inboxSlice";
import { useAppDispatch } from "@app/hooks";

export const useInboxHeader = () => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => dispatch(setMessageModalOpen(true));

  return { handleOpenModal };
};
