export interface Message {
  id: string;
  subject: string;
  date: string;
  body: string;
}

export interface Thread {
  id: string;
  sender: string;
  title: string;
  messages: Array<Message>;
}

export interface ThreadsParams {
  page?: number;
  limit?: number;
  search?: string;
  sort?: string;
  order?: string;
}

export interface ResponseThreads {
  threadId: string;
  message: Omit<Message, "id">;
}
