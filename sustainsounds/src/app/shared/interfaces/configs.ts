export interface IEventPayload {
  name: string;
  date: string;
  time: string;
  location: string;
  price: number;
  imageUrl: string | undefined;
  description: string | undefined;
}

export interface IUser {
  _id: string;
  accessToken: string;
  email: string;
  eventsAttended?: string[];
  eventsCreated?: string[];
  alias?: string;
  bio?: string;
}
