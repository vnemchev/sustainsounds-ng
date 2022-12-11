export interface IEventPayload {
  name: string;
  date: string;
  time: string;
  location: string;
  price: number;
  imageUrl: string | undefined;
  description: string | undefined;
}
