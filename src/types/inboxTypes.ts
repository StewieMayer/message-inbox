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

